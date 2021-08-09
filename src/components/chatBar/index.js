import React from 'react';
import ReactDOM from 'react-dom';
import './chat.css';
import nature from '../nature.jpeg';

import Profile from '../profile/index.js';
import TeamList from '../teamList/index.js';
import ChatOptions from '../chatoptions/index.js';
import ChatList from '../chatList/index.js';

class ChatBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	searchText: '',
      searchActive :false,
      existingUsers : true ,

    };
  this.searchHandleChange = this.searchHandleChange.bind(this);
  this.seachBarOnfocus= this.seachBarOnfocus.bind(this);
  this.activeUSerList = this.activeUSerList.bind(this);
  }

  searchHandleChange(e) {
    this.setState({searchText : e.target.value,})
  }

  seachBarOnfocus(){
    this.setState({searchActive : true,})
  }
  
  activeUSerList (status){
    this.setState({existingUsers : status})
  }
  render(){
    	return(
    	 <div class = 'message-child-1'>
         <div class = 'profile-main-div'>
            <Profile userName = 'Olivier Goudsmit'  userEmail = '@will_i_am' image = 'https://www.trycamify.com/images/personnel-goudsmit.jpeg'/></div>
            <ChatOptions handleChange = {this.searchHandleChange} onFocus = {this.seachBarOnfocus} activeUSerList = {this.activeUSerList} />
            <ChatList searchText = {this.state.searchText}  searchActive = {this.state.searchActive} existingUsers = {this.state.existingUsers} />
       </div>
    	)
  	}
}

export default ChatBar;