import React, { Component } from 'react';
class Signup extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      password:"",
      email:""
    }
  }
   async Signup() {

        try {
            let response = await fetch('http://127.0.0.1:5000/signup', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username: document.getElementById('name').value,
                        password: document.getElementById('password').value,
                        email: document.getElementById('email').value                    }
                })

            });
            return this.props.kamel("Login")

        } catch (errors) {
            console.log('catch errors' + errors);
        }
    }
  render() {
    return (
      <div>
    	<h1>Sign up</h1>
    		<input id='name' name="username" type="text" placeholder="Username"/><br/><br/>
     		<input id='password' name="password" type="password" placeholder="Password"/><br/><br/>
      		<input id='email' name="email" type="email" placeholder="Email Address"/><br/><br/>
   		   	<button onClick={()=>this.Signup()}>Register</button>
   		</div>
    );
  }
}

export default Signup;
