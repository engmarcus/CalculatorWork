


/** CSS IMPORT */

import Page from '../page/page'
import './home.css'

/** imagem */
const logo = '../../../public/logo.png'

/** */



function NewHome(){

  return(
   <div className='container'> 
      <header>
        <img src={logo} />
      </header>
      <div className='contend'>
        <Page />
        
      </div>
   </div>
  )
}

export default NewHome