/** CSS */
import './page.css'
/*****/
/** icones */
import { FaRegEdit,FaTrashAlt } from "react-icons/fa";
import { GiWallet,GiPayMoney } from "react-icons/gi";
import { HiClock } from "react-icons/hi";
import { MdLibraryAdd } from "react-icons/md";
import { TbRowInsertBottom } from "react-icons/tb";
import { AiFillCaretRight,AiOutlineFieldTime } from "react-icons/ai";
import { Icon, IconButton } from '@mui/material';

function Page(){

  return(
    <div className='areaCards'> 
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
        <IconButton className='icon'><MdLibraryAdd/></IconButton> 
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