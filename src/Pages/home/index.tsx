import React ,{ useEffect, useState } from 'react';
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
import { AiOutlineCaretDown } from "react-icons/ai";
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

function Home() {
  const [editAmount,setAmount] = useState(false)
  const [editHours,setHoursEdit] = useState(false)
  const [valueAmount,setValueAmount] = useState('R$ 0,00')
  const [valueHours,setHours] = useState ('')
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
        let calIrrf=calculateIRRF((temp-parseFloat(calInss?calInss:'0')-(189.59 * dependent)))
        let amountLiquid = temp - parseFloat(calInss?calInss:'0') - parseFloat(calIrrf?calIrrf:'0')
        CalculateAmount({
          inss:calInss?'R$ -'+calInss.replace('.',','):'R$ 0,00',
          irrpf:calIrrf?'R$ -'+calIrrf.replace('.',','):'R$ 0,00',
          net_salary:amountLiquid?'R$ '+amountLiquid.toFixed(2).replace('.',','):'R$ 0,00'

        })
        function calculateInss(amount : number){
          if(amount <=first.value)
          {
            var cal = amount * first.rate
            return cal.toFixed(2)
          }
       
          if(first.value < amount && amount <= second.value)
          { 
            var cal = first.accumulated
            const rest = amount - first.value
            cal = cal + (rest * second.rate)
            return cal.toFixed(2)
          }
          
          if(second.value < amount && amount <= third.value)
          { 
            console.log(second.value) 
            var cal = second.accumulated
            const rest = amount - second.value
            cal = cal + (rest * third.rate)
            return cal.toFixed(2)
          }   
          if(third.value < amount && amount <= fourth.value){
            var cal = third.accumulated
            const rest = amount - third.value
            cal = cal + (rest * fourth.rate)
            return cal.toFixed(2)
          }
     
          if(fourth.value < amount ){ 
           
            return fourth.accumulated.toFixed(2)
          } 
          
          
        }
        function calculateIRRF(amount:number){
          if(amount <first.valueIR)
          {
            return 'R$ 0,00'.toString()
            //ok
          }
          if(first.valueIR <= amount && amount <= second.valueIR)
          { 
            var cal = amount - first.valueIR-0.01
            cal =(cal * first.rateIR)
            return cal.toFixed(2) //ok
          }
          if(second.valueIR < amount && amount <= third.valueIR)
          { 
            var cal = second.accumuladeIR
            const rest = amount - second.valueIR
            cal = cal + (rest * second.rateIR)
            return cal.toFixed(2) //ok
          }    
          if(third.valueIR < amount && amount <= fourth.valueIR){
            var cal = third.accumuladeIR
            const rest = amount - third.valueIR
            cal = cal + (rest * third.rateIR)
            return cal.toFixed(2) 
          }
          if(fourth.valueIR < amount ){ 
            var cal = fourth.accumuladeIR
            const rest = amount - fourth.valueIR+0.01
            cal = cal + (rest * fourth.rateIR)
            return cal.toFixed(2)
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
                    <AiOutlineCaretDown />
                  </IconButton>
                </div>
                <div className={getMenu('inss')?'detailContent activeDetail':'detailContent '}>
                  conteudo
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
                    <AiOutlineCaretDown />
                  </IconButton>
                </div>
                <div className={getMenu('ir')?'detailContent activeDetail':'detailContent '}>
                  conteudo
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
