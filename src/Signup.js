import React, { Component } from 'react';
class Signup extends Component {
  render() {
    return (
      <div>
    	<form action="http://localhost:5000/signup" method="post">
    	<h1>Sign up</h1>
    		<input name="username" type="text" placeholder="Username"/><br/><br/>
     		<input name="password" type="password" placeholder="Password"/><br/><br/>
      		<input name="email" type="email" placeholder="Email Address"/><br/><br/>
   		   	<button>Register</button>
   		</form>
   		</div>
    );
  }
}

export default Signup;
