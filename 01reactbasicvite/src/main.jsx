import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
 
   <a href="https://google.com/">cilck</a>
)

const reactElement = React.createElement(
  'a', //element type
  {href :'https://google.com/',target :'blank'},//attributes
  'click this link'//text
)

ReactDOM.createRoot(document.getElementById('root')).render(
 < App/>
)
