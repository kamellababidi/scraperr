import React, { Component } from 'react';
import Signup from './Signup.js'
import Login from './Login.js'
import Home from './Home.js'
class App extends Component {
  constructor(props){
  	super(props)
  	this.state={
  		com:'Signup'
  	}
  }
  change_v(com){
  	this.setState({com:com});
  }
  render() {
  	if(this.state.com==="Signup"){
  		return (
      <Signup kamel={this.change_v.bind(this)} />
    );
  	}else if(this.state.com==="Login"){
  		return (
  		<Login kamel={this.change_v.bind(this)}/>
  		);
  	}else if(this.state.com==="Home"){
  		return (
  		<Home kamel={this.change_v.bind(this)}/>
  		);
  	}
    
  }
}

export default App;
