import React from 'react';
import { Link } from 'react-router-dom';


function Switchingpages () {

    return (
        <nav className="switchingpages">
            <ul className="nav-links">
                <Link to="/firstpage" style={{textDecoration: 'none', color: 'white'}}>
                  Home
                </Link>
                <Link to="/secondpage" style={{textDecoration: 'none', color: 'white'}}>
                  Entry Details
                </Link>
                <Link to="/thirdpage" style={{textDecoration: 'none', color: 'white'}}>
                   Exit
                </Link>
            </ul>
        </nav>
    );
}   

export default Switchingpages;