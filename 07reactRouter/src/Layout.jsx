import React from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import { Outlet } from 'react-router-dom'

export function Layout(props) {
    

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
