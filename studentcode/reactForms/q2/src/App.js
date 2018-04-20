import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = {firstName : '', lastName: ''}
  }

  handleIt = (event) => {
    this.setState({firstName: event.target.value})
  }

  handleItTwo = (event) => {
    this.setState({lastName: event.target.value})
  }

  submit = (event) => {
    alert('A name was submitted: ' + this.state.firstName + ' ' + this.state.lastName);
    event.preventDefault();
  }

  clearInput = () => {
    this.setState({lastName: '', firstName: ''});
  }

  render() {
    return (
      <div>
      <form onSubmit={this.submit}>
      First Name:
        <input type="text" value={this.state.firstName} onChange={this.handleIt}/>
        Last Name: 
        <input type="text" value={this.state.lastName} onChange={this.handleItTwo}/>
        <input type="submit" value="Submit"/>
      </form>
      <button onClick={this.clearInput}>Click to reload!</button>
      </div>
    );
  }
}

export default App;
