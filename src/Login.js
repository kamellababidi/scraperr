import React, { Component } from 'react';
class Login extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
    	
    	<h1>Login</h1>
    		<input name="username" type="text" placeholder="Username"/><br/><br/>
     		<input name="password" type="password" placeholder="Password"/><br/><br/>
   		   	<button onClick={()=>this.props.kamel("Home")}>Register</button>
   
   		</div>
    );
  }
}

export default Login;
