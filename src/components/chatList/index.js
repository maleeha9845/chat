import React from 'react';
import ReactDOM from 'react-dom';
import  {connect} from 'react-redux';
import {withRouter ,BrowserRouter as Router ,Route} from "react-router-dom";
import './chatList.css';
import donald from '../donald.jpeg';
import kristason from '../kristason.jpeg';
import daina from '../daina.jpeg';
import coco from '../coco.jpeg';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import ChatProfile from '../chatProfile/index.js';
import alt from '../alt.png';
import ActiveIdRequest from '../../actions/activeId.js';

class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	active : 'null',
      inboxObj: [], 
      activeId:'' ,
      userName:'',
      userEmail:'',

    };
    this.getInboxdata = this.getInboxdata.bind(this);
    this.sendActiveID = this.sendActiveID.bind(this);
  }

  componentWillMount(){
    
    console.log('me');
    this.getInboxdata();

  }

componentDidUpdate(){
      const id = this.state.activeId;
      if(id !== ''){
      const data= {id : id , userName : this.state.userName}
      this.props.ActiveIdRequest(data);
   }
  }
  


  getInboxdata(){
    firebase.database().ref('/camify-support-inbox/').on('value', data => {
      let dataArrar = Object.values(data.val())
      let id = '';
      let userName ='';
      let userEmail='';
     
        
      this.setState({
        inboxObj: data.val(), 
        })
      } 
    )
  }

// to filter new users from all users .
  filterNewUser(inboxUsers){
     const newUsers = this.props.users && this.props.users.data && this.props.users.data.data ?this.props.users.data.data :null;
     const ids = inboxUsers.map( i => i.id)
     const filteredUsers = newUsers.filter((newUser) => !ids.includes(newUser._id));

     return filteredUsers;
  }
  //sending active to local store
  sendActiveID(id , name , email){
    this.setState({
      activeId  :id,
      userName : name,
      active : name
  
    })
  }


  render(){
    console.log(this.state.firstId);
     const inboxUsers = Object.values(this.state.inboxObj).length ? Object.values(this.state.inboxObj) : null;
    
     if(!inboxUsers){
        return(<div> loading...</div>)
       }
console.log(this.state)
// console.log(this.props.searchText ,this.props.searchActive ,this.props.existingUsers );
//     const searchList = inboxUsers.filter(
//         (i)=>{
//           return i.name.toLowerCase().indexOf(
//             this.props.searchText.toLowerCase())!== -1;
//             }
//           )
          
     const usersList = this.props.searchActive === false ? inboxUsers :inboxUsers;

     console.log(usersList);

     // const searchListNewUsers = this.filterNewUser(inboxUsers).filter(
     //  (i)=>{
     //    return i.name.toLowerCase().indexOf(
     //      this.props.searchText.toLowerCase())!== -1;
     //      }
     //    );
     // const updatedUserList = this.props.searchActive === false ? this.filterNewUser(inboxUsers) : searchListNewUsers;


    	return(
        <div class = 'chatList'>
        {this.props.existingUsers === true ? 
          usersList.map((i)=>{
          return(
            <div class = {this.state.active === i.name ? 'chatList-main-div-active' : 'chatList-main-div' } onClick = {() => this.sendActiveID(i.id, i.name ,i.email)} >

          <div class = 'chatList-child-1'>
           <ChatProfile pic = {alt} new= {i.isnew}/> 
          </div>

          <div class= 'chatList-child-2'>

            <div class = 'chatList-data-div-1'>
              <p class = 'chatList-user'>{i.name}</p>
              <p class = 'chatList-time'>9:00 am</p>
            </div>

            <div class = 'chatList-data-div-2'>
              <p class = 'chatList-text'>no text exit yet !</p>
              {!i.count ? <div class = 'chatList-count'>2</div> : null }
              
            </div>

          </div>
       </div>
            )
        }):null

        // updatedUserList.map((i)=>{
       //    return(
       //      <div class = {this.state.active === i.name ? 'chatList-main-div-active' : 'chatList-main-div'}>

       //    <div class = 'chatList-child-1'>
       //     <ChatProfile pic = {alt} new= {i.isnew}/> 
       //    </div>

       //    <div class= 'chatList-child-2'>

       //      <div class = 'chatList-data-div-1'>
       //        <p class = 'chatList-user'>{i.name}</p>
       //        <p class = 'chatList-time'>9:00 am</p>
       //      </div>

       //      <div class = 'chatList-data-div-2'>
       //        <p class = 'chatList-text'>no text exit yet !</p>
       //        {!i.count ? <div class = 'chatList-count'>2</div> : null }
              
       //      </div>

       //    </div>
       // </div>
       //      )
       //  }) 
      }


    	 </div>
    	)
  	}

}

const mapDispathToProps = dispatch => ({
  ActiveIdRequest: (params) => {dispatch(ActiveIdRequest(params))},
  });

const mapStateToProps = (state, props) => {
      return {
        users:state.users,
      }
    };

export default withRouter(connect(mapStateToProps ,mapDispathToProps)(ChatList)); ;