import React, { Component } from 'react';
import './App.css';

class CalcButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let column_type = ""
    if (this.props.buttonType=="num") {
      column_type = "col-4 CalcButton tanButton";
    }
    else if (this.props.buttonType=="operand") {
      column_type = "col-12 CalcButton blueButton";
    }
    else {
      column_type="col-3 offset-9 CalcButton redButton";
    }
    return(
      <div className={column_type}>
        {this.props.buttonString}
      </div>
    );
  }
}

class NumPad extends React.Component {  

  makeNumPad() {
    const keyValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "="];
    let keyButtons = [];
    for (let i=0; i < 4; i++) {      
      let row = []
      for (let j=0; j < 3; j++) {
        row.push(<CalcButton key={keyValues[i*3+j]} buttonString={keyValues[i*3+j]} buttonType="num"/>);
      }
      keyButtons.push(<div className="row buttonRow">{row}</div>)
    }
    return keyButtons;
  }

  render() {
    let keyButtons = this.makeNumPad();  
    return (  
      <div className="col-9">
      {keyButtons}  
      </div>
    ); 
  }
}

class Operands extends React.Component {
  makeOperandBar() {
    const keyValues = ["+", "-", "*", "/"];
    let keyButtons = [];
    for (let i=0; i < 4; i++) {
      keyButtons.push(<div className="row buttonRow"><CalcButton key={keyValues[i]} buttonString={keyValues[i]} buttonType="operand"/></div>);
    }    
    return keyButtons
  }

  render() {
    let keyButtons = this.makeOperandBar();
    return (
      <div className="col-3">
        {keyButtons}
      </div>
    )
  }
}

class ClearBar extends React.Component {
  render() {
    return (
    <div className="row">
      <CalcButton buttonString ="C" buttonType="clear"/>
    </div>
    );
  }
}

class Screen extends React.Component {
  render() {
    return (
      <div className="row screen">
      <span className="inputDisplay">0</span>
      </div>
    );
  }
}

class Calculator extends React.Component {
  render() {
    return(
      <div className="Calculator">
        <Screen />
        <ClearBar />
        <div className="row">
          <NumPad />
          <Operands />
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
