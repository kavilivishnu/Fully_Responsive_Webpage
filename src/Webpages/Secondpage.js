import React from 'react';
import { useHistory } from 'react-router-dom';


function Secondpage () {
const history = useHistory();
  return (
    <div className="second-page">
      <br />
      <br />
      <i><form align="center">
        <b>Username:</b> <input type="text" 
        className="text"
        placeholder="type it you piece of shit" 
        size="25"
        maxLength="10" />
        <br />
        <br />
        <b>Password:</b> <input type="password"
        className="password" 
        placeholder="type it dumbass" 
        size="25" 
        maxLength="10"/>
        <br />
      </form></i>
      <br />
      <button 
       onClick={() => history.push("/Thirdpage")} 
       className="btn-2">
       Click me!
      </button>
    </div>
  );
}

export default Secondpage;