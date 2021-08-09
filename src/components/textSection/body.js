import React from 'react';
import ReactDOM from 'react-dom';
import './text.css';
import  {connect} from 'react-redux';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { getUTCtime } from '../../getUTCtime.js';

class TextSectionBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	chatObj:{},
      once : false,
    };
  this.getChat = this.getChat.bind(this);
  this.mesRef = React.createRef();
  }
componentDidMount(){
      const id = this.props.activeId.data && this.props.activeId.data.id? this.props.activeId.data.id : null;
      if(id !== null){
        this.getChat();
      }
  }


 componentDidUpdate(nextProps){
 console.log(this.props.activeId.data)
    const id = this.props.activeId.data && this.props.activeId.data.id? this.props.activeId.data.id : null;
    
    if(id && nextProps.activeId.data && nextProps.activeId.data.id && id !== nextProps.activeId.data.id){
      this.getChat();
      this.setState({text : ''});
    }else if (id && this.state.once === false){
      this.getChat();
      {this.setState({once : true})}
    }
  }

 getChat(exception){
  console.log('me')
    const id = this.props.activeId.data.id ? this.props.activeId.data.id: null; 
    console.log(id);
      if(id !== null){
        firebase.database().ref
          ('/camify-support-chatroom/' + id).on
          ('value', data =>
          this.setState({
            chatObj: data.val()
          })
        )
        let inbox = firebase.database().ref('/camify-support-inbox/' + id);
                inbox.update({isnew: false});
      }
    }


    render(){
      const id = this.props.activeId.data && this.props.activeId.data.id ? this.props.activeId.data.id : null; 
      const chatData = this.state.chatObj &&
          Object.values(this.state.chatObj).length ?
          Object.values(this.state.chatObj) : null;

        console.log(chatData);

       if(!id && chatData === null){
          return(<div  class = 'text-body-chatBox-container'>please select a user</div>)
      }

   const searchList = this.props.searchActive === true ? chatData.filter(
        (inboxUsers)=>{
          return inboxUsers.messgae.toLowerCase().indexOf(
            this.props.searchText.toLowerCase())!== -1;
            }
          ) : null
        

      
      
       const  messages = this.props.searchActive === false ? chatData :searchList;
      
    	return(
    	 <div class = 'text-body'>

        

        <div class = 'text-body-chatBox-container'>

        {messages ?
          messages.map((i)=>{
            if(i.time){
                  var timeObj = getUTCtime(i.time)}
            return(
          <div class = {id === i.id ?'text-body-chatBox-send' : 'text-body-chatBox'}>
      
            <div class = {id === i.id ? 'text-body-chat-send side-arrow-send' : "text-body-chat side-arrow"} dangerouslySetInnerHTML={{__html: i.messgae }}></div>
             {
                              timeObj && !isNaN(timeObj.y) ?
                               <div class =   'text-body-chat-time'> 
                              {timeObj.h}:{timeObj.mi} {timeObj.d}-{timeObj.m}-{timeObj.y}</div>
                            :
                              null
                            } 
          </div>
       ) }) : <p class = 'text-body-header-userName'> loading.....</p>}
        </div>

     </div>
       
    	)
  	}
}

const mapDispathToProps = dispatch => ({

  
  }
);

const mapStateToProps = (state, props) => {
      return {
        activeId:state.activeId,
      }
    };

export default withRouter(connect(mapStateToProps ,mapDispathToProps)(TextSectionBody)); 
