import React from 'react';
import { createRoot } from 'react-dom/client'
import CSVReader from 'react-csv-reader'
import ObjectiveMap from './objective_map'

let objectiveTextRoot = null

export default function ObjectiveForm () {

    function readObjectiveFile(data) {
        if (!objectiveTextRoot) {
            const tableElement = document.getElementById('objectiveText')
            objectiveTextRoot = createRoot(tableElement)
        }
        objectiveTextRoot.render(
            <>
                <ObjectiveMap data={data} />
                <strong><p>Copy & Paste the text above and add to your books info.xml file.</p></strong>
            </>
        )
    }
    return (
        <form>
            <div className="form-group">
                <CSVReader cssInputClass="" label="Select CSV with Objective Resources" onFileLoaded={readObjectiveFile} />
            </div>
        </form>
    )
}
