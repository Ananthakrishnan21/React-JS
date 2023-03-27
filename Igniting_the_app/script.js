import React from 'react'
import ReactDOM from 'react-dom'

let root=ReactDOM.createRoot(document.getElementById('root'))
let name=React.createElement('h1',{id:'name'},'Ananthakrishnan A')
let address=React.createElement('h2',{id:'address'},React.createElement('i',{},'Chandrika Sadanam, Kadakkal'))
let school=React.createElement('h2',{id:'school'},'College Of Engineering Adoor')
let info=React.createElement('div',{id:'container'},[name,address,school])
root.render(info)