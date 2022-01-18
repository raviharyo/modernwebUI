import React from 'react'
import {Blog,Features,Footer,Header,Possibility,Whatisit} from './containers'
import {CTA, Brand, Navbar} from './components'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
            <Navbar/>
            <Header/>
            </div>
            <Brand/>
            <Whatisit/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default App
