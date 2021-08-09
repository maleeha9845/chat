import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";
import {BsChatFill} from 'react-icons/bs';
import {CgShapeRhombus} from 'react-icons/cg';
import {BsGridFill} from 'react-icons/bs';
import {BsFillPersonFill} from 'react-icons/bs';
import {IoIosSettings} from 'react-icons/io';
import {BiAlignLeft} from 'react-icons/bi';
import {RiDirectionFill} from 'react-icons/ri';

import './navBar.css';
class NavBar extends Component {

  constructor(props) {
     super(props);
     this.state={
      active : this.props.active,
       
     }
     this.navBtnFunc=this.navBtnFunc.bind(this);
   }

   navBtnFunc( active ,path){
    this.setState({
      active:active,
    })
    this.props.history.push(path);
   }

  render() {
    return (
      <div class = 'nav-bar'>

        <div  class = 'nav-bar-children' onClick={()=>this.navBtnFunc( 'menu')}>
          <BiAlignLeft size = ' 18px' 
           className ={this.state.active === 'menu' ? 'active-icon' : 'icon'} />
        </div>

        <div class = 'nav-bar-children' onClick ={()=>this.navBtnFunc( 'message','/messages')}>
          <BsChatFill size = ' 18px'  
            className ={this.state.active === 'message' ? 'active-icon' : 'icon'} />
        </div>

        <div class = 'nav-bar-children' onClick ={()=>this.navBtnFunc('rhombus')}>
          <CgShapeRhombus size = ' 23px' 
           className ={this.state.active === 'rhombus' ? 'active-icon' : 'icon'} />
        </div>

        <div class = 'nav-bar-children' onClick ={()=>this.navBtnFunc('squrs')}>
          <BsGridFill size = ' 18px' 
            className ={this.state.active === 'squrs' ? 'active-icon' : 'icon'}  />
        </div>

        <div class = 'nav-bar-children' onClick ={()=>this.navBtnFunc('profile')}>
          <BsFillPersonFill size = ' 18px'
          className ={this.state.active === 'profile' ? 'active-icon' : 'icon'}  />
        </div>

        <div class = 'nav-bar-children' onClick ={()=>this.navBtnFunc('setting' , '/setting')}>
          <IoIosSettings size = ' 20px' 
           className ={this.state.active === 'setting' ? 'active-icon' : 'icon'} />
        </div>

         <div class = 'nav-bar-last-child' >
          <RiDirectionFill size = ' 20px' className ='icon' />
        </div>

      </div>
    );
  }
}

export default withRouter(NavBar);