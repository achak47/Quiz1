import './App.css';
import React,{Component} from 'react';
import Headimage from "./image" ;
import Quizbody from "./qbody" ;
const { Timer } = require('timer-node');
const timer = new Timer({ label: 'test-timer' });
var minutes = 2 , seconds = 0 ;
class App extends Component{
  constructor(){
    super() ;
    this.state = {
      seconds : 120
    }
  }
  render(){
  return (
    <div className="App">
      <div>
      <Headimage />
      <Quizbody starttimer={this.starttimer} />
      </div>
        </div>
  );
  } 
}

export default App;
