import React,{Component} from "react" ;
import "./App.css" ;
import { Question,Answer } from "./questions" ;
import Intro from "./intro" ;
import Qtemplate from "./qtemplate" ;
const { Timer } = require('timer-node');
const timer = new Timer({ label: 'test-timer' });
var minutes = 2 , seconds = 0 ;
 class Quizbody extends Component {
    constructor(){
        super() ;
        this.state = {
          index:0 ,
          answer:['','','','','','','','','',''] ,
          score:0,
          isanswer:0,
          seconds : 120
        } ;
      }
    onIndexchange = ()=>{
     this.setState({index:this.state.index+1}) ;
    }
    onIndexprev = ()=>{
        this.setState({index:this.state.index -1}) ;
    }
    onInput = (event)=>{
        const index = this.state.index ;
       this.state.answer[index-1] = event.target.value ;
       console.log( this.state.answer[index-1]) ;
    }
    answer = ()=>{
        this.setState({isanswer:1}) ;
    }
    reverse = ()=>{
        this.setState({isanswer:0}) ;
        this.setState({index : 11 }) ;
    }
    checkans = ()=>{
        const index = this.state.index ;
        if(this.state.answer[index-1] !=="" && Answer[index-1].includes(this.state.answer[index-1]))
        {
            this.setState({score:this.state.score+2}) ;
            console.log(this.state.answer[index-1]) ;
        }
    }
    starttimer = ()=>{
        timer.start() ;
        setTimeout(()=>{
            this.setState({index:11}) ;
            alert("Time UP !!") ;
        },(this.state.seconds+2) *1000)
        const interval = setInterval(() =>{
         console.log(timer.ms());
         var sec = 1 ;
           this.setState({seconds: this.state.seconds-sec }) ;
         console.log(this.state) ;
          seconds = this.state.seconds%60 ;
          minutes = ( this.state.seconds - seconds)/60 ;
          if(this.state.seconds == -1)
          {
            clearInterval(interval) ;
          }
        } , 1000
        ) ;
        }
    render(){
     return(
         <div className="box">
         <div className="container">
             {this.state.index == 0 ? <Intro index={this.state.index} func={this.onIndexchange} fu={this.starttimer}/>
             :(this.state.index<=10 ?
             <div>
             < Qtemplate index={this.state.index} func={this.onIndexchange} func2={this.onIndexprev} func3={this.onInput}
             func4={this.checkans} ans={this.state.isanswer} answer={this.state.answer} rev={this.reverse} />
             {
              seconds>=10 ?
             <span> {minutes}:{seconds} </span>
             : <span> {minutes}:0{seconds} </span>
             }
             </div>
             :<div className="box">
             {  this.state.isanswer == 0 ?
             <div className="container">
               Your Score is : {this.state.score} 
               <br />
               <br />
               <button onClick={this.answer}>View Answers</button>
             </div> : < Qtemplate index={this.state.index-10} func={this.onIndexchange} func2={this.onIndexprev} func3={this.onInput}
                  func4={this.checkans} ans={this.state.isanswer} answer={this.state.answer} rev={this.reverse} />
              }
             </div> 
             )
             }       
         </div>
         </div>
     ) ;
    }
 }
 export default Quizbody ;
