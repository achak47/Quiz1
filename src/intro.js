import React from "react" ;
import "./App.css" ;
function Intro ({index , func,fu})
{
    return(
        <div>
        <p class="font">
        How well do you remember the India tour of England 2018 ?
        </p>
        <p className="ff" >Cri Tick brings a Quiz for You to test your knowledge about the India tour of England 2018 . Remember this is just for fun , so please
           play honestly , don't use google and enjoy .
        </p>
        <div className="ff"><u>Rules and Regulations : </u>
        <ul>
            <li>There are 10 questions each carrying 2 marks</li>
            <li>You may skip questions and jump in between questions</li>
            <li>The total time alloted for this Quiz is 2 minutes</li>
            <li>There is no negative marking</li>
            <li>For Each Answer , write just the Surnames of the Cricketers , Eg: kohli for Virat Kohli , dhoni for M S Dhoni</li>
            <li>Write Everything in <u>Small letters</u></li>
            <li>Press the button to start</li>
       </ul></div>
                <button className="b3" onClick={()=>{
                    func() ;
                    fu() ; }}>Start Quiz</button>
       </div>
    );
}
export default Intro ;