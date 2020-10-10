import React from 'react';
import { useHistory } from 'react-router-dom';

function Thirdpage () {
    const history = useHistory();

    return(
        <div className="third-page">
            <br />
            <h1 style={{fontFamily: "Merienda"}}>Thankyou for visiting our page!</h1>
            <br />
            <h2 style={{fontFamily: "Joti One"}}>winner winner chicken dinner!</h2>
            <br />
            <button onClick={()=> history.push("/Firstpage")} className="btn" type="submit">
                <b>Get Out!</b>
            </button>
            <br />
            <br />
            <h2 style={{fontFamily: "Delius"}}>Click the below link to rate us!</h2>
            <h2 style={{fontFamily: "Averia Serif Libre"}}>Your feeback is valuable for us.</h2>
            <br />
            <h3><a href="https://enigmaias.com/3-stars-2/" style={{fontFamily: "Averia Serif Libre", textDecoration: 'none'}}>click Here</a></h3>
        </div>
    );
}

export default Thirdpage;   