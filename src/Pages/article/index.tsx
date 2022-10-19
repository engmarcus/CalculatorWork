
import { IconButton } from "@mui/material";

/*Icones*/
import { RiMenuAddLine } from "react-icons/ri";
import { FcPaid } from "react-icons/fc";
import { TbEdit } from "react-icons/tb";
import { CgPlayListRemove } from "react-icons/cg";

/*CSS*/
import './article.css'

function Article(){

  return(
    <div className='mainArticle'>
      <div className='dreansList'>
        <div className='dreansHeader'>
          <div className='title'> 
            Seus Objetivos
          </div>
          <IconButton className='iconAdd'>
            <RiMenuAddLine />
          </IconButton>
        </div>
        <ul className="list">
          <li>
            <div className="listContent">
              <div className="listIcon"> <FcPaid /> </div>
              <div> OBJETIVO DETALHADO </div>
            </div>
          </li>
          <li>
            <div className="listContent">
              <div className="listIcon"> <FcPaid /> </div>
              <div> OBJETIVO DETALHADO </div>
            </div>
          </li>
          <li>
            <div className="listContent">
              <div className="listIcon"> <FcPaid /> </div>
              <div> OBJETIVO DETALHADO </div>
            </div>
          </li>
          <li>
            <div className="listContent openList">
              <div className="listIcon"> <FcPaid /> </div>
              <div> OBJETIVO DETALHADO </div>

            </div>
            <div className="itensHide">
                <TbEdit className="icon"/>
                <CgPlayListRemove className="icon"/>
            </div>
          </li>
          

        </ul>
      </div>
    </div>
  )
}

export default Article