import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from './Layout.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contact/Contact.jsx'
import { User } from './components/user/User.jsx'
import { Git,gitInfoLoader } from './components/git/Git.jsx'


const router = createBrowserRouter([{
  path : '/',
  element : <Layout/>,

  children : [
  {path : "",
   element : <Home />},

  {
     path : "about",
     element :<About/> 
  },
  {
    path : "contact",
    element :<Contact/> 
 },
 {
  path : "user/:userid",
  element :<User/> 
},
{
  loader:  gitInfoLoader ,
  path : "gitHub",
  element :<Git/> 
}
]
}])

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
