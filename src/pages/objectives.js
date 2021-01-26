import React from 'react'
import ReactDOM from 'react-dom'
import CSVReader from 'react-csv-reader'
import ObjectiveMap from '../components/objectives/objective_map'

export default function Objectives() {

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
        <div className="container">
            <h2>Objectives</h2>
            <div className="container">
                <form>
                    <div className="form-group">
                        <CSVReader cssInputClass="" label="Select CSV with Objective Resources" onFileLoaded={readObjectiveFile} />
                    </div>
                </form>
            </div>
        </div>
        <div className="container" id="objectiveText"></div> 
        </>
    )
}
