import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component{
  render() {
    return (
      <button onClick={() => this.props.onClickFunction(this.props.incrementValue)}>
        +{this.props.incrementValue}
      </button>
    );
  }
}

class Result extends React.Component{
  render(){
    return(
      <div>
        {this.props.counter}
      </div>
    );
  }
}

class App extends Component {
  state={counter: 0};

  incrementCounter = (incrementValue) => {
    this.setState(
      (prevState) => ({
        counter: prevState.counter + incrementValue
      })
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button incrementValue={1} onClickFunction={this.incrementCounter} />
          <Button incrementValue={5} onClickFunction={this.incrementCounter} />
          <Button incrementValue={10} onClickFunction={this.incrementCounter} />
          <Button incrementValue={100} onClickFunction={this.incrementCounter} />
          <Result counter={this.state.counter}/>
        </header>
      </div>
    );
  }
}

export default App;
