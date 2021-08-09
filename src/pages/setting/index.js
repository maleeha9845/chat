import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";

import NavBar from '../../components/navBar/index.js';

class Setting extends Component {

  constructor(props) {
     super(props);
     this.state={
       
     }
   }

  render() {
    return (
      <div class = 'dash-parent-div'>
        <NavBar active = 'setting'/>
        <div class = 'messages-div'>
          <p>setting here</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Setting);