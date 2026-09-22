import React from 'react'
import { Route, Routes, NavLink, HashRouter } from 'react-router-dom'
import Home from './Home'
import Objectives from './pages/objectives'
import Header from './components/header'
import Footer from './components/footer'
import Grammar from './pages/grammar'
import IntegratedResources from './pages/integrated_resources'

export default function Main() {

    return (
        <HashRouter>
            <Header />
            <ul className="navigation">
                <li><NavLink end to='/'>Home</NavLink></li>
                <li><NavLink to='/objectives'>Objectives</NavLink></li>
                <li><NavLink to='/grammar'>SRI Grammar</NavLink></li>
                <li><NavLink to='/integrated-resources'>Integrated Resources</NavLink></li>

            </ul>
            <div className='content' id='content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/objectives' element={<Objectives />} />
                    <Route path='/grammar' element={<Grammar />} />
                    <Route path='/integrated-resources' element={<IntegratedResources />} />
                </Routes>
            </div>
            <Footer />
        </HashRouter>
    )
}