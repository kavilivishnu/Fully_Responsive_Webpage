import React from 'react';
import './App.css';
import Secondpage from './Webpages/Secondpage';
import Thirdpage from './Webpages/Thirdpage';
import Firstpage from './Webpages/Firstpage';
import Switchpages from './Webpages/Switchingpages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Webpages/Navbar';

function App () {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switchpages />
        <Switch>
          <Route path="/" exact component={Mainpage} />
          <Route path="/firstpage" component={Firstpage} />
          <Route path="/secondpage" component={Secondpage} />
          <Route path="/thirdpage" component={Thirdpage} />
        </Switch>
      </div>
    </Router>
  ); 
}

const Mainpage = () => (
  <div>
    <br/>
    <br/>
    <h1 style={{fontFamily: 'Architects Daughter'}}>Hello! Beautiful face.</h1>
  </div>
);

export default App;