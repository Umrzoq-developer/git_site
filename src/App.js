import React from "react";
import {Switch, Route} from 'react-router-dom';
//pages
import LogoutPage from "./pages/Logout/Logout";

//styling
import './App.css';

const App = () => {
  return(
      <div className='App'>
        <Switch>
          <Route exact path='/' component={LogoutPage} />
        </Switch>
      </div>
  )
};

export default App
