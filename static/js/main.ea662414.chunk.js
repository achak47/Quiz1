(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{14:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var n=s(1),i=s.n(n),r=s(9),c=s.n(r),a=(s(14),s(2)),o=s(3),h=s(5),j=s(4),l=(s(6),s(0));var d=function(){return Object(l.jsx)("img",{src:"https://images.cooltext.com/5531169.png",width:"371",height:"90",alt:"Cri Tick"})},u=["","Which English Cricketer was the joint MAN OF THE SERIES for the Test ?","Who was Highest run scorer for India ?","Which Indian Batting prodigy debuted in this series ?","Who scored the maximum runs in the ODI series ?","Which bowler achieved the best bowling figure of 5/28 for India in the test series ? ","Which Indian bowler took a fifer in the T20 series ?","In this series Virat Kohli scored his first ever ton in England , What was the venue ?","Which legendary player played his last test match in this series (he retired after the series) ?","Who was the highest wicket taker for India in the Test ?","Who scored centuries for India in T20 ?(There are two names answer any one)"],b=["curran","kohli","risabh pant","joe root","hardik pandya","kuldeep yadav","edgebaston","alastair cook","ishan sharma","rohit sharma,kl rahul"];var x=function(e){e.index;var t=e.func,s=e.fu;return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{class:"font",children:"How well do you remember the India tour of England 2018 ?"}),Object(l.jsx)("p",{className:"ff",children:"Cri Tick brings a Quiz for You to test your knowledge about the India tour of England 2018 . Remember this is just for fun , so please play honestly , don't use google and enjoy ."}),Object(l.jsxs)("div",{className:"ff",children:[Object(l.jsx)("u",{children:"Rules and Regulations : "}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"There are 10 questions each carrying 2 marks"}),Object(l.jsx)("li",{children:"You may skip questions and jump in between questions"}),Object(l.jsx)("li",{children:"The total time alloted for this Quiz is 2 minutes"}),Object(l.jsx)("li",{children:"There is no negative marking"}),Object(l.jsx)("li",{children:"For Each Answer , write just the Surnames of the Cricketers , Eg: kohli for Virat Kohli , dhoni for M S Dhoni"}),Object(l.jsxs)("li",{children:["Write Everything in ",Object(l.jsx)("u",{children:"Small letters"})]}),Object(l.jsx)("li",{children:"Press the button to start"})]})]}),Object(l.jsx)("button",{className:"b3",onClick:function(){t(),s()},children:"Start Quiz"})]})},O=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(a.a)(this,s),(e=t.call(this)).state={},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this.props,t=e.index,s=e.func,n=e.func2,i=e.func3,r=e.func4,c=e.ans,a=e.answer,o=e.rev;return Object(l.jsxs)("div",{children:[Object(l.jsx)("span",{children:Object(l.jsxs)("b",{children:["Question ",t," "]})}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),u[t],Object(l.jsx)("br",{}),Object(l.jsx)("div",{id:"c1",children:0==c?Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"text",onChange:i}),Object(l.jsx)("button",{type:"reset",onClick:function(){r(),t<10&&s()},children:"Enter"})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"Your Answer"})," : ",0==a[t-1].length?"Not Answered":a[t-1],Object(l.jsx)("br",{}),Object(l.jsx)("b",{children:"Correct Answer"})," : ",b[t-1]]})}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),t<10?Object(l.jsx)("button",{className:"b1",onClick:s,children:"Next"}):Object(l.jsx)("span",{}),t>1?Object(l.jsx)("button",{className:"b2",onClick:n,children:"Previous"}):Object(l.jsx)("span",{}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),0==c?Object(l.jsx)("button",{onClick:o,className:"b",children:"Give Up"}):Object(l.jsx)("span",{})]})}}]),s}(n.Component),f=new(0,s(8).Timer)({label:"test-timer"}),m=2,v=0,w=function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(a.a)(this,s),(e=t.call(this)).onIndexchange=function(){e.setState({index:e.state.index+1})},e.onIndexprev=function(){e.setState({index:e.state.index-1})},e.onInput=function(t){var s=e.state.index;e.state.answer[s-1]=t.target.value,console.log(e.state.answer[s-1])},e.answer=function(){e.setState({isanswer:1})},e.reverse=function(){e.setState({isanswer:0}),e.setState({index:11})},e.checkans=function(){var t=e.state.index;""!==e.state.answer[t-1]&&b[t-1].includes(e.state.answer[t-1])&&(e.setState({score:e.state.score+2}),console.log(e.state.answer[t-1]))},e.starttimer=function(){f.start(),setTimeout((function(){e.setState({index:11}),alert("Time UP !!")}),1e3*(e.state.seconds+2));var t=setInterval((function(){console.log(f.ms());e.setState({seconds:e.state.seconds-1}),console.log(e.state),v=e.state.seconds%60,m=(e.state.seconds-v)/60,-1==e.state.seconds&&clearInterval(t)}),1e3)},e.state={index:0,answer:["","","","","","","","","",""],score:0,isanswer:0,seconds:120},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"box",children:Object(l.jsx)("div",{className:"container",children:0==this.state.index?Object(l.jsx)(x,{index:this.state.index,func:this.onIndexchange,fu:this.starttimer}):this.state.index<=10?Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{index:this.state.index,func:this.onIndexchange,func2:this.onIndexprev,func3:this.onInput,func4:this.checkans,ans:this.state.isanswer,answer:this.state.answer,rev:this.reverse}),v>=10?Object(l.jsxs)("span",{children:[" ",m,":",v," "]}):Object(l.jsxs)("span",{children:[" ",m,":0",v," "]})]}):Object(l.jsx)("div",{className:"box",children:0==this.state.isanswer?Object(l.jsxs)("div",{className:"container",children:["Your Score is : ",this.state.score,Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{onClick:this.answer,children:"View Answers"})]}):Object(l.jsx)(O,{index:this.state.index-10,func:this.onIndexchange,func2:this.onIndexprev,func3:this.onInput,func4:this.checkans,ans:this.state.isanswer,answer:this.state.answer,rev:this.reverse})})})})}}]),s}(n.Component),g=(new(0,s(8).Timer)({label:"test-timer"}),function(e){Object(h.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(a.a)(this,s),(e=t.call(this)).state={seconds:120},e}return Object(o.a)(s,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{children:[Object(l.jsx)(d,{}),Object(l.jsx)(w,{starttimer:this.starttimer})]})})}}]),s}(n.Component)),p=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(t){var s=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;s(e),n(e),i(e),r(e),c(e)}))};c.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),p()},6:function(e,t,s){}},[[19,1,2]]]);
//# sourceMappingURL=main.ea662414.chunk.js.map