import React from 'react';
import ReactDOM from 'react-dom';
import './text.css';
import  {connect} from 'react-redux';
import TextSectionHeader from './header.js';
import TextSectionFooter from './footer.js';
import TextSectionBody from './body.js';
 import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {MdSend} from 'react-icons/md';


class TextSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	searchText: '',
      searchActive :false,
      editor: false,
      text : ''
    };
    this.searchHandleChangeChat = this.searchHandleChangeChat.bind(this);
    this.seachBarOnfocusChat= this.seachBarOnfocusChat.bind(this);
    this.editorfuct=this.editorfuct.bind(this);
    this.onChange=this.onChange.bind(this);
    this.closeEditor = this.closeEditor.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.clearInput = this.clearInput.bind(this);
  
  }
  searchHandleChangeChat(e) {
    this.setState({searchText : e.target.value,})
  }

  seachBarOnfocusChat(){
    this.setState({searchActive : true,})
  }

  editorfuct(){
    const status = this.state.editor === false ? true : false;
  this.setState({
    editor:status,
  })
}

onChange(event, editor){
     const data = editor.getData();
     this.setState({
        text : data,
        editorPlaceholder : ''
        })
     }

closeEditor(){
  
    this.setState({editor : false});
  }
  

 handleChange(e){
    this.setState({text : e.target.value,})
  }

clearInput(){
  this.setState({text : ''})
}
  render(){
    const id = this.props.activeId.data &&  this.props.activeId.data.id ? this.props.activeId.data.id : null; 
    	
      return(
      
        <div class = 'section-container'>

          <TextSectionHeader  searchHandleChangeChat ={this.searchHandleChangeChat} seachBarOnfocusChat={this.seachBarOnfocusChat}/>
          <TextSectionBody searchText = {this.state.searchText} searchActive = {this.state.searchActive} /> 
          <TextSectionFooter activeId = {id} editorfuct = {()=>this.editorfuct(true)} editor ={this.state.editor} closeEditor={this.closeEditor} text = {this.state.text} handleChange={this.handleChange} clearInput = {this.clearInput}/>
          { this.state.editor === true ?
            <div class = 'editor-container ' >
              <CKEditor
                editor={ ClassicEditor}
                data ={this.state.editorPlaceholder}
                onReady={ editor => {
                   console.log( 'Editor is ready to use!', editor );
                  } 
                }
                onChange={ this.onChange}/>
           </div>:null
          }
        </div>
    	)
  	}
 
}


const mapStateToProps = (state, props) => {
      return {
        activeId:state.activeId,
      }
    };

export default connect(mapStateToProps)(TextSection) ;