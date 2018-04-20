import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = { firstName: '', lastName: '', shown: true }
  }

  submit = (event) => {
    alert('A name was submitted: ' + this.state.firstName + ' ' + this.state.lastName);
    event.preventDefault();
    this.setState({ shown: !this.state.shown })
  }

  handleIt = (event) => {
    this.setState({ firstName: event.target.value })
  }

  handleItTwo = (event) => {
    this.setState({ lastName: event.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          First Name
          <input type="text" value={this.state.firstName} onChange={this.handleIt} />
          Last Name
          <input type="text" value={this.state.lastName} onChange={this.handleItTwo} />
          <input type="submit" value="Submit"/>
        </form>
      </div>

    );
  }
}

// {/* <button onClick={() => this.setState({ shown: !this.state.shown })}> click </button>
//       <CustomButton show={this.state.shown} /> */}

export default App;
