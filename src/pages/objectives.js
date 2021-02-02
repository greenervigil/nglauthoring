import React, { useState } from 'react'
import CSVReader from 'react-csv-reader'
import ObjectiveMap from '../components/objectives/objective_map'

export default function Objectives() {
    const [objectiveData, setObjectiveData] = useState([])
    function readObjectiveFile(data) {
        setObjectiveData(data)
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
        <div className="container" id="objectiveText">
            <ObjectiveMap data={objectiveData} />
            <strong><p>Copy & Paste the text above and add to your books info.xml file.</p></strong>
        </div> 
        </>
    )
}
