import React, { Component } from 'react';
class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      init:this.get_data(),
      units:''
    }
  }
  async get_data() {
        try {
            let response = await fetch('http://127.0.0.1:5000/data');
            let responseJson = await response;
            console.log(responseJson)
            this.setState({units:responseJson})
            // this.setState({ logout: responseJson });
            // i.props.screenProps.changeV('Login');
        } catch (error) {
            console.error(error);
        }
    }
  render() {
    return (
      <div>
    	<h1>Welcome to home page</h1>
      <p>{this.state.units}</p>
   		</div>
    );
  }
}

export default Home;
