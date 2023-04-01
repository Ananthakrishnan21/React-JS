/* Using Js 

let root=document.querySelector('#root')
let heading=document.createElement('h1')
heading.innerHTML="Hello World....!"
root.appendChild(heading)*/

//Using React

// let heading=React.createElement('h1',{id:'heading'},"Hello World..!")//This is an object
// console.log(heading)
// let place=document.getElementById('root')
// let root=ReactDOM.createRoot(place)
// console.log(root)//Also an Object
// root.render(heading)//This function takes an object and convert it into html tg(here <h1 id="heading">Hello World..!</h1>) & push inside root


//Using React make add siblings and nested tags

//----------------------Nested------------------
// let parent=React.createElement('div',{id:'parent'},
//     React.createElement('div',{id:'child'},
//     React.createElement('h1',{id:'heading'},'Hello Namaste')))
// let place=document.getElementById('root')
// let root=ReactDOM.createRoot(place)
// root.render(parent)
//----------------------Siblings----------------

let parent=React.createElement('div',{id:'parent'},[
    React.createElement('div',{id:'child'},
    React.createElement('h1',{id:'heading'},'Hello Namaste')),
    React.createElement('div',{id:'child'},
    React.createElement('h1',{id:'heading'},'Hello Namaste'))])
let place=document.getElementById('root')
let root=ReactDOM.createRoot(place)
root.render(parent)
