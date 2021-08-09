import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import  {connect} from 'react-redux';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";
import './message.css';

import NavBar from '../../components/navBar/index.js';
import ChatBar from '../../components/chatBar/index.js';
import TextSection from '../../components/textSection/index.js';
import ActiveContactDetail from '../../components/activeContactDetail/index.js';
import userRequest from '../../actions/users.js';

class Messages extends Component {

  constructor(props) {
     super(props);
     this.state={
       
     }
     this.navBtnFunc=this.navBtnFunc.bind(this);
   }
componentDidMount(){
  this.props.userRequest();
}
  navBtnFunc(path){
    //this.props.history.push(path);
  }

  render() {
    return (
      <div class = 'dash-parent-div'>
        <NavBar active = 'message'/>
        <div class = 'messages-div'>

         <ChatBar/>
         <TextSection/>
         <ActiveContactDetail/>
      

        </div>
      </div>
    );
  }
}
const mapDispathToProps = dispatch => ({
  userRequest: (params) => {dispatch(userRequest(params))},
  }
);

const mapStateToProps = (state, props) => {
      return {
      }
    };

export default withRouter(connect(mapStateToProps ,mapDispathToProps)(Messages));
