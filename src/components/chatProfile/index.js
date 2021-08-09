import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './chatProfile.css';

class ChatProfile extends Component {

  constructor(props) {
     super(props);
     this.state={
       
     }
   }

  render() {
    return (
      <div class = 'chat-profile-main-div'>

          <img class = 'chat-profile-image' src = {this.props.pic} alt = 'dp' />
          {this.props.new === true ?  <div class = 'chat-text-new' ></div> : null}
      
      </div>
    );
  }
}

export default ChatProfile;