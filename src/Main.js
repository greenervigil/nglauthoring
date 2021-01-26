import React from 'react'
import { Route, NavLink, HashRouter } from 'react-router-dom'
import Home from './Home'
import Objectives from './pages/objectives'
import Header from './components/header'
import Footer from './components/footer'
import Grammar from './pages/grammar'
import IntegratedResources from './pages/integrated_resources'

export default function Main() {

    return (
        <HashRouter>
            <div>
                <Header />
                <ul className="navigation">
                    <li><NavLink exact to='/'>Home</NavLink></li>
                    <li><NavLink to='/objectives'>Objectives</NavLink></li>
                    <li><NavLink to='/grammar'>SRI Grammar</NavLink></li>
                    <li><NavLink to='/integrated-resources'>Integrated Resources</NavLink></li>

                </ul>
                <div className='content' id='content'>
                    <Route exact path='/' component={Home} />
                    <Route path='/objectives' component={Objectives} />
                    <Route path='/grammar' component={Grammar} />
                    <Route path='/integrated-resources' component={IntegratedResources} />

                </div>
                
                <Footer />
            </div>
        </HashRouter>
    )
}