import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Footer from './footer'
import CSVReader from 'react-csv-reader'
import ObjectiveMap from './objective_map'
import SRIData from './sridata'

export default function Objectives({ name }) {

    function readObjectiveFile(data) {
        const tableElement = document.getElementById('objectiveText')
        ReactDOM.render(
            <>
                <ObjectiveMap data={data} />
                <SRIData data={data}/>
            </>, 
        tableElement)
    }
    return (
        <>
        <Header />
        <div className="main">
            <h2>{name}</h2>
            <div className="container">
                <form>
                    <div className="form-group">
                        <CSVReader cssInputClass="" label="Select CSV with Objective Resources" onFileLoaded={readObjectiveFile} />
                        </div>
                </form>
            </div>
            <div className="container">
                <span id="objectiveText"></span>
            </div> 
        </div>
        <Footer />
        </>
    )
}