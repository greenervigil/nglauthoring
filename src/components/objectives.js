import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Footer from './footer'
import CSVReader from 'react-csv-reader'
import { Form } from 'semantic-ui-react'
import ObjectiveMap from './objective_map'
import XMLData from './xmldata'

export default function Objectives({ name }) {

    function readObjectiveFile(data) {
        const tableElement = document.getElementById('objectiveText')
        ReactDOM.render(
            <>
                <ObjectiveMap data={data} />
                <XMLData data={data}/>
            </>, 
        tableElement)
    }
    return (
        <>
        <Header />
        <div className="main">
            <h2>{name}</h2>
            <div className="container">
                <Form>
                    <label className="sr-only">CSV File Select</label>
                    <CSVReader cssInputClass="" label="Select CSV with Objective Resources" onFileLoaded={readObjectiveFile} />
                </Form>
            </div>
            <div className="container">
                <span id="objectiveText"></span>
            </div> 
        </div>
        <Footer />
        </>
    )
}