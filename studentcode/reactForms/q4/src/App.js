import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = { firstName: '', lastName: '' }
  }

  submit = (event) => { 
    alert(`A name was submitted: ${this.state.firstName} ${this.state.lastName}`)
    event.preventDefault();
  }

  handleIt = (event) => { 
    this.setState({firstName: event.target.value})
  }

  handleItTwo = (event) => {
    this.setState({lastName: event.target.value})
   }

  swap = () => {
  this.setState({firstName: this.state.lastName});
  this.setState({lastName: this.state.firstName});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          First Name:
          <input type="text" value={this.state.firstName} onChange={this.handleIt}/>
          Last Name:
          <input type="text"  value={this.state.lastName} onChange={this.handleItTwo}/>
          <input type="Submit" value="submit"/>
        </form>
        <button onClick={this.swap}>Click to swap!</button>
      </div>
    );
  }
}

export default App;
