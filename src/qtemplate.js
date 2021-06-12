import React,{Component} from "react" ;
import "./App.css" ;
import { Question,Answer } from "./questions.js" ;
class Qtemplate extends Component {
    constructor(){
        super() ;
        this.state={
        }
    }
    render(){
    const {index,func,func2,func3,func4,ans,answer,rev} = this.props ;
    return(
         <div>
             <span><b>Question {index} </b></span>
             <br />
             <br />
            { Question[index] } 
             <br />
             <div id="c1">
            { ans == 0 ?
            <form onSubmit={e=>{e.preventDefault() ;}}>
             <input type="text" onChange={func3} />
             <button type="reset" onClick={()=>{
                 func4();
                 if(index<10)
                 {
                    func() ;
                 }
                 }}>Enter</button>
                 </form> : <div>
                 <b>Your Answer</b> : {answer[index-1].length == 0 ? "Not Answered" : answer[index-1] }
                 <br />
                 <b>Correct Answer</b> : {Answer[index-1]}
             </div>
            }
             </div>
             <br />
             <br />
             { index<10 ?
             <button className="b1" onClick={func}>Next</button>
             :<span></span>
             }
             {
              index>1 ?
             <button className="b2" onClick={func2}>Previous</button>
              :<span></span>
              } 
              <br />
              <br />
             { (ans == 0)?
              <button onClick={
                  rev } className="b" >Give Up</button>
                  :<span></span>
              }
         </div>
    );
  }
} 
export default Qtemplate ;