import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import  {connect} from 'react-redux';
import './contact.css';

import Profile from '../profile/index.js';
import kristason from '../kristason.jpeg';

import {IoIosCall}from 'react-icons/io';
import {BsChatFill} from 'react-icons/bs';
import {FaVideo} from 'react-icons/fa';
import {BsThreeDots} from 'react-icons/bs';
import {AiOutlineFile} from 'react-icons/ai';
import userData from '../../actions/userData.js';
import deleteRequest from '../../actions/delete.js';
import changeMediaServerRequest from '../../actions/changeMediaServer.js';
import userDataRequest from '../../actions/userData.js';
import {MdSend} from 'react-icons/md';

class ActiveContactDetail extends Component {

  constructor(props) {
     super(props);
     this.state={
       delete : true,
       updateList : false,
     }
     this.deleteUSer= this.deleteUSer.bind(this);
     this.enterId= this.enterId.bind(this);
     this.openList= this.openList.bind(this);
  }

componentDidMount(){
  this.props.userData({id :'5f281240d57a512992511fda'})
}

deleteUSer(id){
//this.props.deleteRequest(id)
this.setState ({delete:true})
}

enterId(){
  this.setState ({delete:false})
}
openList(){
  this.setState({
    updateList:true,
  })
}

  render() {
    const serverList = this.props.serverList
      && this.props.serverList.data
      && this.props.serverList.data.data
      ? this.props.serverList.data.data
      : null;
      console.log(serverList);

    const myArrayOptions = [
      {
        name : 'call',
        icon : IoIosCall
      },
      {
        name : 'Message',
        icon :BsChatFill      },
      {
        name : 'Vidio',
        icon : FaVideo
      },
      {
        name : 'more',
        icon : BsThreeDots
      },
    ];

    const myArrayDetails=[
      {
        tittle : 'Phone',
        detail : "+7(800)55-33-35"
      },
      {
        tittle : 'Date Of Birth',
        detail : "17 march 1990"
      },
      {
        tittle : 'Gernder',
        detail : "Female"
      },
      ]
      const myArrayMedia=[
      {
        tittle : 'Current server ID',
        detail : ": msusad1"
      },
      {
        tittle : 'IP address',
        detail : " api.px.trycamify.com/msusad1"
      },
      {
        tittle : 'RTMP link',
        detail : " rtmp://3.21.40.142/us5ee4466080a7eb049913aa8a"
      },
      ]
    const name = this.props.activeId.data && this.props.activeId.data.userName? this.props.activeId.data.userName : null;
    const id = this.props.activeId.data && this.props.activeId.data.id? this.props.activeId.data.id : null;
    console.log(name);

    return (
          <div class = 'ActiveContactDetail-container'>

            <div class = 'profile-container'>
              <Profile userName = {name}  userEmail = '@i_am_kris' image = {kristason} active = "true"/> 
        
            </div>

            <div class = 'contact-options'>
            {myArrayOptions.map((i)=>{
              return(
                <div class = ' contact-option-container'>
                  <div class = ' contact-option-icon'>
                    <i.icon  size = ' 18px' color='#497174'/>
                  </div>

                  <p class= 'contact-option-name'>{i.name} </p>
                </div>
              )
            }
          )
        }
      </div>

      <div class = 'contact-details'>
        {myArrayDetails.map((i)=>{
          return(
            <div class = 'contact-detail-container'>
              <p class = 'contact-detail-tittle'> {i.tittle}</p>
              <p class = 'contact-detail-info'>{i.detail}</p>
            </div>
          )
        })}

       </div>
      
      <div class = 'contact-shared-files-tittle'>
        <p class = 'shared-files-tittle'>Media Server</p>
        
        <div class = 'dropdown'>
        <div class= 'shared-files-view-all' onClick = {()=> {this.openList()}}>Update</div>
          <div class="dropdown-content">
              <a href="#">Link 1...................</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
      </div>
</div>
      <div class = 'contact-media-files-container'>
        {myArrayMedia.map((i)=>{
          return(
            <div class = 'contact-media-files'>

        

              <div class = 'contact-media-file-info'>
                <p class = 'contact-detail-tittle'> {i.tittle}</p>
                <p class = 'contact-detail-info'>{i.detail}</p>
              </div>

          </div>

            )
        })}
    
      </div>
        {this.state.delete === true ?
          <div class ='detele-btn' onClick = {()=> {this.enterId()}}> Delete User </div>:
          <div class = 'delete-div'>
            <input  class ='delete-input'  placeholder = 'Enter id'  onChange= {this.props.handleChange}/>
            <div class = 'delete-user' onClick = {()=> {this.deleteUSer(id)}}><MdSend size = '14px' color = 'white'/></div>
          </div>

        }
    </div>
   );
  }
}


const mapDispathToProps = dispatch => ({
  userData: (params) => {dispatch(userData(params))},
  deleteRequest: (params) => {dispatch(deleteRequest(params))},
  changeMediaServerRequest: (params) => {dispatch(changeMediaServerRequest(params))},
  userDataRequest: (params) => {dispatch(userDataRequest(params))},
  }
);

const mapStateToProps = (state, props) => {
      return {
      users : state.users,
      activeId:state.activeId,
      login : state.login,
        serverList : state.serverList,
        userData : state.userData,
      }
    };

export default connect(mapStateToProps ,mapDispathToProps)(ActiveContactDetail); 