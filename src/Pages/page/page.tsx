/** CSS */
import './page.css'
/*****/
/** icones */
import { FaRegEdit,FaTrashAlt,FaIcons } from "react-icons/fa";
import { GiWallet,GiPayMoney } from "react-icons/gi";
import { HiClock } from "react-icons/hi";
import { MdLibraryAdd } from "react-icons/md";
import {AiOutlineBgColors} from "react-icons/ai"
import { TbRowInsertBottom } from "react-icons/tb";
import { AiFillCaretRight,AiOutlineFieldTime } from "react-icons/ai";


/** Bibliotecas */
import { Button, Icon, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import Modal from '@mui/material/Modal';

/** Tipagens */
type objetive ={
  description:string,
  value:string,
  icon:string,
  color_icon:string,
  color_icon_border:string,
  color_card:string,
}

function Page(){
  const [objetive,setObjetive] = useState<objetive[]>(getObjetives())
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  function addObjetive(){
    console.log('entrei')
    handleOpen()
  }

  function getObjetives(){
    let temp = localStorage.getItem("objetive");
    if(temp==null){
      return [
        {
          description:'Exemplo',
          value:'R$ 350,00',
          icon:'GiPayMoney',
          color_icon_border:'rgba(255, 133, 10, 1)',
          color_icon:'#fff',
          color_card:'#fff',
        }
      ]
    
    }else{
      return JSON.parse(temp)
    }

  }
 useEffect(()=>{
  console.log(objetive)
 })


  return(
    <div className='areaCards'> 
      <Modal
        open={open}
        onClose={handleClose}
        
      >
        <div className='modalCadastro'>
          <div className='cards'>
            Informe as informações dos Seus Objetivos
            <div className='formCard'>
              <TextField  
                variant='outlined'
                className='inputsCards'
                label='Descrição'
                placeholder='Exemplo de Objetivo'
                
              />
              <TextField  
                variant='outlined'
                className='inputsCards'
                label='Valor'
                placeholder='R$ 3.500,00'
              />
              <div className='options'>
                <Button className='btnInput'
                 startIcon={<FaIcons />}
                 variant='text'  
                >Icones</Button>
 
                <Button className='btnInput'
                startIcon={<AiOutlineBgColors />}
                variant='text'  
                >Cores</Button>
              </div>


            </div>
            <div className='option optActive'>
              teste
            </div>
          </div>
        </div>
      </Modal>
      <div className='content'>
        <h1>Cálculo de salário líquido</h1>
        <div className='cardsSession'>
          <div className='grid'>
            <div className='card'>
              <span className='iconCard'> 
                <GiWallet /> 
              </span>
              <div className='inforCard'>
                <div> R$4.200,00</div>
                <div> Salario Bruto</div>
              </div>

            </div>
            <div className='card'>
              <span className='iconCard'> 
                <HiClock /> 
              </span>
              <div className='inforCard'>
                <div> 220H</div>
                <div> Horas Trabalhadas</div>
              </div>

            </div>
            <div className='card negative'>
              <span className='iconCard iconInvert'> 
                <GiPayMoney /> 
              </span>
              <div className='inforCard'>
                <div> R$ -400,00</div>
                <div> Valor INSS</div>
              </div>

            </div>
            <div className='card negative'>
              <span className='iconCard iconInvert '> 
                <GiPayMoney /> 
              </span>
              <div className='inforCard'>
                <div> R$ -350,00</div>
                <div> Valor IRPF</div>
              </div>

            </div>
          </div> 
        </div>
      </div>
      <div className='lineH' />
        <h1 className='alingTitle'>
          Cáculo de horas para seus objetivos 
          <IconButton className='icon' onClick={()=>addObjetive()} ><MdLibraryAdd/></IconButton> 
        </h1>
        <div className='objetive'> 
          <div className='grid'>
            <div className='cardObj' style={{}}>
              <span className='iconCard' style={{backgroundColor:'red',color:'#000'}}> 
                <GiWallet /> 
              </span>
              <div className='inforCard'>
                <div> R$4.200,00</div>
                <div> descritivodoObjetivo28caracteres</div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )

}

export default Page