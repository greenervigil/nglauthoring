import React from 'react'
import Header from '../header'
import Footer from '../footer'
import PropTypes from 'prop-types'
import ReturnHome from '../main_menu/return_home'
import ObjectiveForm from './objective_form'

export default function Objectives({ name }) {
    return (
        <>
        <Header />
        <ReturnHome />
        <div className="container">
            <h2>{name}</h2>
            <div className="container">
                <ObjectiveForm />
            </div>
        </div>
        <div className="container" id="objectiveText"></div> 
        <Footer />
        </>
    )
}

Objectives.propTypes = {
    name: PropTypes.string.isRequired
}