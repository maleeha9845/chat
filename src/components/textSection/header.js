import React from 'react';
import ReactDOM from 'react-dom';
import './text.css';

import {ImSearch} from 'react-icons/im';
import {IoMdNotifications} from 'react-icons/io';
import {BsThreeDots} from 'react-icons/bs';

class TextSectionHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	
    };
  
  }

  render(){
    	return(
    	 <div class = 'text-header'>
        <div class = 'text-header-search-bar'>
          <div class ='text-header-search-icon'>
            <ImSearch size = '11px' color ='#CFD3D9'/>
          </div>
          <input class = "text-header-iputfield" placeholder = 'Search here.......' onChange= {this.props.searchHandleChangeChat}
           onFocus={this.props.seachBarOnfocusChat}/>
        </div>

        <div class = 'text-header-icon'>
           <BsThreeDots size = ' 18px' color='#497174' />
        </div>

        <div class = 'text-header-icon'>
          <IoMdNotifications size = ' 18px'  color='#497174'/>
          </div>
       </div>
       
    	)
  	}
}

export default TextSectionHeader;