import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { text: '', texts: [] }
  }

  submit = (event) => {
    // this.setState(<li>{this.text}</li>)
    let contents = this.state.text;
    let newTexts = this.state.texts.concat('Aly: ' + contents);
    let random = this.randomResponse();
    setTimeout(() => {
      newTexts = newTexts.concat('God: ' + random);
      this.setState({ texts: newTexts },)
    }, 3000)

    this.state.text = '';
    event.preventDefault();
  }


  randomResponse = () => {
    let possibleResponses = ['Yes my child', 'And so it shall be', 'Blessed are the meek', 'It has been foretold', 'This pleases me'];
    let randomNumber = Math.floor(Math.random() * (possibleResponses.length));
    return possibleResponses[randomNumber];
  }

  handleIt = (event) => {
    this.setState({ text: event.target.value });

  }

  render() {
    let lify = elem => (<li key="chat">{elem}</li>);
    return (
      <div>
        <ul style={{ "list-style-type": "none" }}>

          {this.state.texts.map(lify)}
        </ul>
        <form onSubmit={this.submit}>
          <input value={this.state.text} onChange={this.handleIt} value={this.state.text} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;


//questions - 