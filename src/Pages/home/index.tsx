import React ,{ useEffect, useLayoutEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';

/*css */

import './home.css'
/*
Bibliotecas
*/
import { 
  IconButton, 
  FormControl  
} from '@mui/material';

/** icones */
import { FaRegEdit } from "react-icons/fa";
import { GiWallet,GiPayMoney } from "react-icons/gi";
import { HiClock } from "react-icons/hi";
import { AiFillCaretRight,AiOutlineFieldTime } from "react-icons/ai";
/**
 * Imagens
 */
const logo = '../../../public/logo.png'

/** TIPAGENS */
type Amountandtaxes={
  net_salary:string,
  inss:string,
  irrpf:string
}
type menuActive={
  name:string,
  active:boolean
}
type calculateHours={
  name:string,
  value:string
}
function Home() {
  const [editAmount,setAmount] = useState(false)
  const [editHours,setHoursEdit] = useState(false)
  const [valueAmount,setValueAmount] = useState('R$ 0,00')
  const [valueHours,setHours] = useState ('')
  const [calculations,Setcalculations] = useState<calculateHours[]>([
    {
      name:'INSS',
      value:'00h:00m'
    },
    {
      name:'IRPF',
      value:'00h:00m'
    }
  ])
  const [cardAtive,setMenu] = useState<menuActive[]>([
    {
      name:'inss',
      active:false
    },
    {
      name:'ir',
      active:false
    }
  ])
  const [amountTaxes,CalculateAmount] = useState<Amountandtaxes>({
    inss:'R$ 0,00',
    irrpf:'R$ 0,00',
    net_salary:'R$ 0,00'
  })
  
  function handleAmount(){
    setAmount(!editAmount)
  }
  function handleHoursEdit(){
    setHoursEdit(!editHours)
  }
  function handleMenu(nameMenu:string){
    let menu = cardAtive.find(item => item.name==nameMenu)
    let position = cardAtive.findIndex(index=>index.name==nameMenu)
    let newState = [...cardAtive]
    if(menu){
      menu.active= !menu.active
      newState[position] = menu
    }
    setMenu(newState)
  }
  function getMenu(nameMenu:string){
    let menu = cardAtive.find(item => item.name==nameMenu)
    return menu?.active
  }
  function handleHours(hours:string){
    var v=hours.replace(/\D/g,"");
    v=v.replace(/(\d{3})(\d)/,"$1:$2");
    setHours(v)
  }



  useLayoutEffect(()=>{
    if(!editHours){
      const temp  = parseFloat(valueHours.replace(':','.'))
      const amount= parseFloat(valueAmount.replace('.','').replace(',','.').replace('R$',''))
      if(temp && amount){
        let h_inss = parseFloat(amountTaxes.inss.replace('.','').replace(',','.').replace('R$','').replace('-',''))
        let h_ir   = parseFloat(amountTaxes.irrpf.replace('.','').replace(',','.').replace('R$','').replace('-',''))
         
        h_inss = parseFloat(((h_inss * temp)/amount).toFixed(2))
        h_ir   = parseFloat(((h_ir * temp)/amount).toFixed(2))
        var minuts_inss = calculateMinuts((parseFloat(h_inss.toString().split('.')[1])))
        var minuts_ir = calculateMinuts((parseFloat(h_ir.toString().split('.')[1])))
        var hinns = h_inss.toString().split('.')[0]
        var hir   = h_ir.toString().split('.')[0]
  
        let newState = [...calculations]
        newState[0].value =  hinns+'h:'+minuts_inss+'m'
        newState[1].value =  hir+'h:'+minuts_ir+'m'
        Setcalculations(newState)
       
        function calculateMinuts(minuts:number){
          
          let temp = minuts*6
          if(temp>=60){
            temp = (temp/10)
           }
         
          return temp.toFixed(0)
        }
  
        
      }
    }
  },[editHours,amountTaxes])

  useEffect(()=>{
    if(!editAmount){
      const temp = parseFloat(valueAmount.replaceAll('R$','')
      .replaceAll('.','')
      .replace(',','.'))
      if(temp > 0){
        const first = {value:1212,valueIR:1903.99,rate:(7.5/100),rateIR:(7.5/100),accumuladeIR:0.00,accumulated:90.90,sum:0.00}
        const second ={value:2427.35,valueIR:2826.65,rate:(9/100),rateIR:(15/100),accumuladeIR:69.20,accumulated:200.28,sum:90.90}
        const third ={value:3641.03,valueIR:3751.05,rate:(12/100),rateIR:(22.5/100),accumuladeIR:207.86,accumulated:345.92,sum:200.28}
        const fourth ={value:7087.22,valueIR:4664.68,rate:(14/100),rateIR:(27.5/100),accumuladeIR:413.42,accumulated:828.39,sum:345.92}
        let dependent = 0
        let calInss=calculateInss(temp)
        let calIrrf=calculateIRRF(temp-(calInss?calInss*-1:0.00)-(189.59 * dependent))
        let amountLiquid = temp - (calInss?(calInss*-1):0.00) - (calIrrf?calIrrf*-1:0.00)

        CalculateAmount({
          inss:calInss? calInss.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}):'R$ 0,00',
          irrpf:calIrrf?calIrrf.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}):'R$ 0,00',
          net_salary:amountLiquid?amountLiquid.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}):'R$ 0,00'

        })

        function calculateInss(amount : number){
          if(amount <=first.value)
          {
            var cal = (amount * first.rate)*-1
            return cal
          }
       
          if(first.value < amount && amount <= second.value)
          { 
            var cal = first.accumulated
            const rest = amount - first.value
            cal = (cal + (rest * second.rate))*-1
            return cal
          }
          
          if(second.value < amount && amount <= third.value)
          { 
            console.log(second.value) 
            var cal = second.accumulated
            const rest = amount - second.value
            cal = (cal + (rest * third.rate))*-1
            return cal
          }   
          if(third.value < amount && amount <= fourth.value){
            var cal = third.accumulated
            const rest = amount - third.value
            cal = (cal + (rest * fourth.rate))*-1
            return cal
          }
     
          if(fourth.value < amount ){ 
           
            return (fourth.accumulated*-1)
          } 
          
          
        }
        function calculateIRRF(amount:number){
          if(amount <first.valueIR)
          {
            return 0.00
            //ok
          }
          if(first.valueIR <= amount && amount <= second.valueIR)
          { 
            var cal = amount - first.valueIR-0.01
            cal =(cal * first.rateIR)*-1
            return cal //ok
          }
          if(second.valueIR < amount && amount <= third.valueIR)
          { 
            var cal = second.accumuladeIR
            const rest = amount - second.valueIR
            cal = (cal + (rest * second.rateIR))*-1
            return cal //ok
          }    
          if(third.valueIR < amount && amount <= fourth.valueIR){
            var cal = third.accumuladeIR
            const rest = amount - third.valueIR
            cal = (cal + (rest * third.rateIR))*-1
            return cal 
          }
          if(fourth.valueIR < amount ){ 
            var cal = fourth.accumuladeIR
            const rest = amount - fourth.valueIR+0.01
            cal = (cal + (rest * fourth.rateIR))*-1
            return cal
          } 
        }

      }     
    }
  },[editAmount])


  return (
    <div className="home">
      <div className='content'>
        <header> 
          <img src={logo} />
        </header>
        <div className='cardsContent'>
          <div className='card'>
            <div className='icon'>
              <GiWallet className='iconItem' /> 
            </div>
            <div className='value'>
              <div>
                <CurrencyInput  
                  disabled={!editAmount} 
                  className={!editAmount?'inputSal':'editValue'}
                  allowDecimals={true}
                  onChange={(e)=> setValueAmount(e.target.value)}
                  decimalsLimit={2}
                  defaultValue={'0,00'}
                  prefix={'R$'}
                  onBlur={()=>{setAmount(false)}}
                  maxLength={8}
                  data-size='2'
                /> 
              </div>
              <div>Salário Bruto</div>
            </div>
            <span className='edit'> 
              <IconButton onClick={()=>handleAmount()} sx={{fontSize:'1.2em'}} ><FaRegEdit className='iconOpacity'/></IconButton> 
            </span>
          </div>
          <div className='card'>
            <div className='icon'>
              <HiClock className='iconItem' /> 
            </div>
            <div className='value'>
              <div>
                <input  
                  disabled={!editHours} 
                  className={!editHours?'inputSal':'editValue'}
                  onBlur={()=>{setHoursEdit(false)}}
                  placeholder={'00H00M'}
                  value={valueHours}
                  onChange={(e)=>handleHours(e.target.value)}
                  maxLength={6}
                /> 
              </div>
              <div>Horas Trabalhadas(Mês)</div>
            </div>
            <span className='edit'> 
              <IconButton onClick={()=>handleHoursEdit()} sx={{fontSize:'1.2em'}} ><FaRegEdit className='iconOpacity'/></IconButton> 
            </span>
          </div>
        </div>
        <div className='cardsContentDouble'>
          <div className='cardDouble'>
            <span className='title'> GANHO REAL</span>
            <div className='list'>
              <div className='monoCard'>
                  <span className='icon'>
                    <GiPayMoney className='iconItem'/>
                  </span>
                  <div className='informtaion' >
                    {amountTaxes.net_salary}
                    <span className='legend'>Valor Liquido</span>
                  </div>
              </div>
            </div>
            <span className='title'> Deduções e Encargos</span>
            <div className='list'>
              <div className='listItem'>
                <span className='icon'>
                  <GiPayMoney className='iconItem'/>
                </span>
                <div className='informtaion' >
                  {amountTaxes.inss}
                  <span>INSS</span>
                </div>
                <div className='details'>
                  <IconButton sx={{color:'#fff',fontSize:'15px'}} onClick={()=>handleMenu( 'inss' )}>
                    <AiFillCaretRight className={'button '.concat(getMenu('inss')?'activeButton':'')}/>
                  </IconButton>
                </div>
                <div className={getMenu('inss')?'detailContent activeDetail':'detailContent '}>
                <AiOutlineFieldTime className='iconDetail'/>{calculations[0].value}
                </div>
              </div>
              <div className='listItem'>
                <span className='icon'>
                  <GiPayMoney className='iconItem'/>
                </span>
                <div className='informtaion' >
                   {amountTaxes.irrpf}
                  <span>IRRPF</span>
                </div>
                <div className='details'>
                  <IconButton sx={{color:'#fff',fontSize:'15px'}} onClick={()=>handleMenu( 'ir' )}>
                    <AiFillCaretRight className={'button '.concat(getMenu('ir')?'activeButton':'')}/>
                  </IconButton>
                </div>
                <div className={getMenu('ir')?'detailContent activeDetail':'detailContent '}>
                <AiOutlineFieldTime className='iconDetail'/> {calculations[1].value}
                </div>
               
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className='painel'>
        painel esquerdo
      </div>
    </div>
  )
}

export default Home
