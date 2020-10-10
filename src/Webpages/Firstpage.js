import React from 'react';
import { useHistory } from 'react-router-dom';
import ModalBackDrop from './Modal';

function Firstpage () {
    const history=useHistory();
   return(
       <div className="first-page">
           <ModalBackDrop />
           <br />
           <h1 style={{fontFamily: 'Kaushan Script'}}>Welcome To Our Page!</h1>
           <br />
           <button onClick={()=>history.push("/Secondpage")} className="btn-1">Go further</button>
       </div>
   );
}

export default Firstpage;