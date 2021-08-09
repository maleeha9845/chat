import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './chatopt.css';

class ChatOptions extends Component {

  constructor(props) {
     super(props);
     this.state={
      active : 'Existing'
       
     }
     this.onClick=this.onClick.bind(this);
   }

   onClick(active , ExistingUser){
    this.setState({
      active:active,
    });
    this.props.activeUSerList(ExistingUser);
   }

  render() {
    const myArray = [
      {
        lable:'Existing',
         ExistingUser : true 
       } ,
      {
        lable:'New' , 
        ExistingUser:false
      }
   ];
    return (
      <div class = 'chat-opt'>

          <div class = "chat-opt-search-bar">
            <input class = "text-header-iputfield" placeholder = 'Search here.......'  
              type="text"
           value = {this.props.value}
           placeholder = 'search here'
           onChange= {this.props.handleChange}
           onFocus={this.props.onFocus}/>
          </div>

          <div class = 'chat-opt-footer'>
          {
            myArray.map((i)=>{
             return (
               <button class ={this.state.active === i.lable ?'active-chat-opt-btn': 'chat-opt-btn'} 
                onClick = {()=>this.onClick(i.lable , i.ExistingUser)}> {i.lable}</button>
               )
             }
           )
          }
        </div>
      </div>
    );
  }
}

export default ChatOptions;