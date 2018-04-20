import React, { Component } from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {firstName: '', lastName: ''};
  }
 
  handleChange = (event) => {
    console.log(event, event.target)
    this.setState({firstName: event.target.value});
  }

  handleChangeTwo = (event) => {
    this.setState({lastName: event.target.value});
  }
 
  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.firstName + ' ' + this.state.lastName);
    event.preventDefault();
  }
 
  render = () => {
    return (
      <form onSubmit={this.handleSubmit}>
          First Name:
          <input type="text" value={this.state.firstName} onChange={this.handleChange} />
          Last Name: 
          <input type="text" value={this.state.lastName} onChange={this.handleChangeTwo}/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
 }


export default App;
