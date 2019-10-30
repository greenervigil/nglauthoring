import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Footer from './footer'
import CSVReader from 'react-csv-reader'
import ObjectiveMap from './objective_map'
import PropTypes from 'prop-types'
import ReturnHome from './return_home'

export default function Objectives({ name }) {

    function readObjectiveFile(data) {
        const tableElement = document.getElementById('objectiveText')
        ReactDOM.render(
            <>
                <ObjectiveMap data={data} />
                <strong><p>Copy & Paste the text above and add to your books info.xml file.</p></strong>
            </>, 
        tableElement)
    }
    return (
        <>
        <Header />
        <ReturnHome />
        <div className="container">
            <h2>{name}</h2>
            <div className="container">
                <form>
                    <div className="form-group">
                        <CSVReader cssInputClass="" label="Select CSV with Objective Resources" onFileLoaded={readObjectiveFile} />
                    </div>
                </form>
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