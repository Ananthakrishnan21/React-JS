import React from "react";
import ReactDOM from "react-dom/client"

let root=ReactDOM.createRoot(document.getElementById('root'))
let rootSec=ReactDOM.createRoot(document.getElementById('root-sec'))
//let heading=React.createElement('h1',{id:'heading'},'Welcome to React Tutorial...!')
let jsxHeading=<h1 id="headingJSX" className="head2">This Heading is created by JSX</h1>//this is JSX
//root.render(jsxHeading)
let number=30
//---------------React Components-----------
let Title=()=>(
    <div id="container2">
        <h1 className="head2">Component Composition</h1>
    </div>
)
let sampleJsx=<h1>Hello Guys</h1>
let main=(
    <>
        <h1>How are you....!</h1>
        {sampleJsx}
    </>
    
)
let HeadingComponent=()=>(
    <>
        <div id="container">
            <Title/>
            <Title></Title>
            {Title()}
            {number+" "}
            {50+10}
            {console.log("Amazing....!")}
            <h1 className="head2">This is created by reacted components..!</h1>
        </div>
        <React.Fragment>
            <h2>Just for fun</h2>
        </React.Fragment>
        <>
            <h1>Good Boy...!</h1>
        </>
    </>//Another way of writing React.Fragment
    
)
root.render(<HeadingComponent/>)
rootSec.render(main)