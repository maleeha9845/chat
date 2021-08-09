import React from 'react';
import ReactDOM from 'react-dom';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";

import './dash.css';
import NavBar from '../../components/navBar/index.js';
import Messages from '../messages/index.js';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	activePage : 'messages',
    };
  
  }

  render(){
    	return(
    		<div class = 'dash-parent-div'>
    			<NavBar/>
          
	    	</div>
    	)
  	}
}

export default withRouter(DashBoard);