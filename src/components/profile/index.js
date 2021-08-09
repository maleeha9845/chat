import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './profile.css';


class Profile extends Component {

  constructor(props) {
     super(props);
     this.state={
       
     }
   }

  render() {
    return (
      <div class = 'profile'>
        <div class = 'profile-child-1'>
             <div class = 'profile-image-container'>
              <img src = {this.props.image} alt= 'nature' class = 'profile-image'/>
              
              {this.props.active === 'true' ? <div class = 'profile-active-icon' ></div> : null}
              </div>
          </div>

        <div class = 'profile-child-2'>
          <p class = 'profile-user-name'>{this.props.userName}</p>
        </div>

        <div class = 'profile-child-3'>
          <p class = 'profile-email'>{this.props.userEmail}</p>
        </div>
      </div>
    );
  }
}

export default Profile;