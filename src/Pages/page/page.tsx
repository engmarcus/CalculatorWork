/** CSS */
import './page.css'
/*****/
/** icones */
import { FaRegEdit,FaTrashAlt,FaIcons } from "react-icons/fa";
import { GiWallet,GiPayMoney } from "react-icons/gi";
import { HiClock } from "react-icons/hi";
import { MdLibraryAdd } from "react-icons/md";
import {AiOutlineBgColors} from "react-icons/ai"
import { RiCloseCircleFill } from "react-icons/ri";
import { TbRowInsertBottom } from "react-icons/tb";
import { 
  IoCarOutline,
  IoCar,
  IoAirplaneOutline,
  IoAirplane,
  IoBagHandleOutline,
  IoBagHandle,
  IoBeer,
  IoBeerOutline,
  IoBookOutline,
  IoBook,
  IoCart,
  IoCartOutline,
  IoDiamondOutline,
  IoDiamond,
  IoDesktop,
  IoDesktopOutline,
  IoGameControllerOutline,
  IoGameController,
  IoGiftOutline,
  IoGift,
  IoHeadset,
  IoHeadsetOutline,
  IoHammer,
  IoHammerOutline,
  IoHomeOutline,
  IoHome,
  IoLaptop,
  IoLaptopOutline,
  IoPawOutline,
  IoPaw,
  IoShirt,
  IoShirtOutline,
  IoStorefrontOutline,
  IoStorefront,
  IoWallet,
  IoWalletOutline
} from "react-icons/io5";


/** Bibliotecas */
import { Button, Checkbox, Icon, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
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
  const [menuChek,setCheck] = useState('IoCar')
  const [options,setOption] = useState('')
  const [optionActive,SetActiveOption] = useState(false)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  function menuObjetiveSelect(selection :string,inOpen:boolean){
    if(selection == 'icons'){
      setOption(selection)
    }else{
      setOption(selection)
    }
    SetActiveOption(inOpen)
  }
  function handleIcon(icon : string){
    setCheck(icon)
  }

  function isCheckIcon(icon:string){
      if(menuChek == icon){
        return true
      }
      return false
  }

  function addObjetive(){
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


  return(
    <div className='areaCards'> 
      <Modal
        open={open}
        onClose={handleClose}
        disableEnforceFocus={false}
        
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
                 onClick={()=>menuObjetiveSelect('icons',true)}
                >Icones</Button>
 
                <Button className='btnInput'
                startIcon={<AiOutlineBgColors />}
                variant='text'  
                onClick={()=>menuObjetiveSelect('colors',true)}
                >Cores</Button>
              </div>


            </div>
            <div className={'option '.concat(optionActive?'optActive':'')}>
              <div className='area'>
                {options=='icons'?
                (<>
                 <div className='title'>
                  Escolha seu Icone
                 </div>
                 <div className='gridIcons'>
                  <Checkbox
                    icon={<IoCarOutline className='selectIcon' />}
                    checkedIcon={<IoCar className='selectIcon select' />} 
                    checked={isCheckIcon('IoCar')}
                    onChange={(e)=>handleIcon('IoCar')}              
                  />
                  <Checkbox
                    icon={<IoAirplaneOutline className='selectIcon' />}
                    checkedIcon={<IoAirplane className='selectIcon select' />} 
                    checked={isCheckIcon('IoAirplane')}
                    onChange={(e)=>handleIcon('IoAirplane')}              
                  />
                  <Checkbox
                    icon={<IoBagHandleOutline className='selectIcon' />}
                    checkedIcon={<IoBagHandle className='selectIcon select' />} 
                    checked={isCheckIcon('IoBagHandle')}
                    onChange={(e)=>handleIcon('IoBagHandle')}              
                  />
                  <Checkbox
                    icon={<IoBeerOutline className='selectIcon' />}
                    checkedIcon={<IoBeer className='selectIcon select' />} 
                    checked={isCheckIcon('IoBeer')}
                    onChange={(e)=>handleIcon('IoBeer')}              
                  />
                  <Checkbox
                    icon={<IoBookOutline className='selectIcon' />}
                    checkedIcon={<IoBook className='selectIcon select' />} 
                    checked={isCheckIcon('IoBook')}
                    onChange={(e)=>handleIcon('IoBook')}              
                  />
                  <Checkbox
                    icon={<IoCartOutline className='selectIcon' />}
                    checkedIcon={<IoCart className='selectIcon select' />} 
                    checked={isCheckIcon('IoCart')}
                    onChange={(e)=>handleIcon('IoCart')}              
                  />
                  <Checkbox
                    icon={<IoDiamondOutline className='selectIcon' />}
                    checkedIcon={<IoDiamond className='selectIcon select' />} 
                    checked={isCheckIcon('IoDiamond')}
                    onChange={(e)=>handleIcon('IoDiamond')}              
                  />
                  <Checkbox
                    icon={<IoDesktopOutline className='selectIcon' />}
                    checkedIcon={<IoDesktop className='selectIcon select' />} 
                    checked={isCheckIcon('IoDesktop')}
                    onChange={(e)=>handleIcon('IoDesktop')}              
                  />
                  <Checkbox
                    icon={<IoLaptopOutline className='selectIcon' />}
                    checkedIcon={<IoLaptop className='selectIcon select' />} 
                    checked={isCheckIcon('IoLaptop')}
                    onChange={(e)=>handleIcon('IoLaptop')}              
                  />
                  <Checkbox
                    icon={<IoGameControllerOutline className='selectIcon' />}
                    checkedIcon={<IoGameController className='selectIcon select' />} 
                    checked={isCheckIcon('IoGameController')}
                    onChange={(e)=>handleIcon('IoGameController')}              
                  />
                  <Checkbox
                    icon={<IoGiftOutline className='selectIcon' />}
                    checkedIcon={<IoGift className='selectIcon select' />} 
                    checked={isCheckIcon('IoGift')}
                    onChange={(e)=>handleIcon('IoGift')}              
                  />
                  <Checkbox
                    icon={<IoHammerOutline className='selectIcon' />}
                    checkedIcon={<IoHammer className='selectIcon select' />} 
                    checked={isCheckIcon('IoHammer')}
                    onChange={(e)=>handleIcon('IoHammer')}              
                  />
                  <Checkbox
                    icon={<IoHeadsetOutline className='selectIcon' />}
                    checkedIcon={<IoHeadset className='selectIcon select' />} 
                    checked={isCheckIcon('IoHeadset')}
                    onChange={(e)=>handleIcon('IoHeadset')}              
                  />
                  <Checkbox
                    icon={<IoHomeOutline className='selectIcon' />}
                    checkedIcon={<IoHome className='selectIcon select' />} 
                    checked={isCheckIcon('IoHome')}
                    onChange={(e)=>handleIcon('IoHome')}              
                  />
                  <Checkbox
                    icon={<IoPawOutline className='selectIcon' />}
                    checkedIcon={<IoPaw className='selectIcon select' />} 
                    checked={isCheckIcon('IoPaw')}
                    onChange={(e)=>handleIcon('IoPaw')}              
                  />
                   <Checkbox
                    icon={<IoShirtOutline className='selectIcon' />}
                    checkedIcon={<IoShirt className='selectIcon select' />} 
                    checked={isCheckIcon('IoShield')}
                    onChange={(e)=>handleIcon('IoShield')}              
                  />
                  <Checkbox
                    icon={<IoStorefrontOutline className='selectIcon' />}
                    checkedIcon={<IoStorefront className='selectIcon select' />} 
                    checked={isCheckIcon('IoStorefront')}
                    onChange={(e)=>handleIcon('IoStorefront')}              
                  />
                  <Checkbox
                    icon={<IoWalletOutline className='selectIcon' />}
                    checkedIcon={<IoWallet className='selectIcon select' />} 
                    checked={isCheckIcon('IoWallet')}
                    onChange={(e)=>handleIcon('IoWallet')}              
                  />

                 </div>
                </>)
                :
                (<>
                  <div className='title'>
                  Personalize suas Cores
                 </div>
                </>)
                }
                </div>
              <div className='close'>
                <IconButton className='icon' onClick={()=>SetActiveOption(false)}>
                  <RiCloseCircleFill/>
                </IconButton>
              </div>
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