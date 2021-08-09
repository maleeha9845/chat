import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import './team.css';

import one from '../one.jpeg';
import two from '../two.jpeg';
import th from '../th.jpeg';
import fr from '../fr.jpeg';
import fi from '../fi.jpeg';


class TeamList extends Component {

  constructor(props) {
     super(props);
     this.state={
       
     }
   }

  render() {
    const myArray= [
      {name:'apple' ,image : one ,new : true},
      {name:'cago',image:two},
      {name:'calvin',image:th},
      {name:'Kea',image:fr,new : true}, 
      {name:'Dr.piper',image:fi , new : true},
      {name:'Dr.piper',image:fi , new : true},
      {name:'Dr.piper',image:fi , new : true},
      {name:'Dr.piper',image:fi , new : true},
      {name:'apple' ,image : one ,new : true},
      {name:'cago',image:two},
      {name:'calvin',image:th},
      {name:'Kea',image:fr,new : true}, 
      {name:'piper',image:fi , new : true},
      {name:'piper',image:fi , new : true},
      {name:'piper',image:fi , new : true},
      {name:'Dr',image:fi , new : true},

    ];
    return (
      <div class = 'Team-main-div'>
        
  
      </div>
    );
  }
}

export default TeamList;