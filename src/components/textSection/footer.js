import React from 'react';
import ReactDOM from 'react-dom';
import './text.css';

import {MdSend} from 'react-icons/md';
import {FaRegGrinAlt} from 'react-icons/fa';
import {IoIosAttach} from 'react-icons/io';
import 'firebase/auth';
import firebase from 'firebase/app';
import 'firebase/database';
import { getUTCtime } from '../../getUTCtime.js';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const senders = [
  {
    name: 'Olivier Goudsmit',
    imageurl: 'https://www.trycamify.com/images/personnel-goudsmit.jpeg'
  }
];

class TextSectionFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	currentSender: senders[0],
      text : '',
      editorPlaceholder :'send message to camify team.....',
      openEditor : false
    };
  this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(event ){
    const id = this.props.activeId  ? this.props.activeId: null ; 

        let appStatus = firebase.database().ref('camify-app-status/' + id)
          appStatus.child('support').set({new: true,})
        let chatroom = firebase.database().ref('/camify-support-chatroom/' + id);
        let time = new Date();
        let inbox = firebase.database().ref('/camify-support-inbox/' + id);

        chatroom.push().set({
          messgae: this.props.text,
          time: time.toString(),
          name: this.state.currentSender.name,
          imageurl: this.state.currentSender.imageurl,
        });

        inbox.set({
          name: 'model one',
          time: time.toString(),
          isnew: false,
          id: id,
        });
        console.log({messgae: this.state.text,
          time: time.toString(),
          name: this.state.currentSender.name,
          imageurl: this.state.currentSender.imageurl,});
        this.setState({
          text:'',
          openEditor : false
        })
        //setTimeout(() => this.getChat(true), 100)
    console.log(this.props.text);
      this.props.closeEditor();
      this.clearInput();
    }

   

    

editorfuct(){
  this.setState({
    openEditor:true,
  })
}

  render(){ 

    const id = this.props.activeId ? this.props.activeId : null ; 
    console.log(id);
    	return(
        <div class = 'textSection-footer'>

          <div class = 'textSection-footer-inputField'>
            <div class = 'textSection-footer-icon' onClick = {this.props.editorfuct}>
              <IoIosAttach size = '18px'color = "#497174"/>
            </div>
           
            {
              this.props.editor === false ?  
              <input class = 'textSection-text-textField' placeholder = 'text here.....'  onChange= {this.props.handleChange} />:null}
               
            
            {
              this.props.editor === false ?  
              <div class = 'textSection-footer-icon'>
               <FaRegGrinAlt size = '14px'color = "#497174"/>
              </div>:null}
          </div> 

          <div class ='textSection-sendBtn' onClick = {this.sendMessage}>
            <p class = 'textSection-sendBtn-text'>send</p>
            <MdSend size = '14px' color = 'white'/>
          </div>

       </div>
       
    	)
  	}
  }


export default TextSectionFooter;