import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Footer from './footer'
import CSVReader from 'react-csv-reader'
import { Form } from 'semantic-ui-react'
import Objective from './objective'

export default function Objectives({ name }) {
    const objectiveMap = (data) => {
        return (
            <code>
                <span>
                    {"<"}
                    <span>objectives</span>
                    {">"}
                </span>
                <br/>

                {data.filter((row, index) => index !== 0)
                    .map((row, index) => {
                        return (
                            <Objective key={index} row={row} />
                        )
                    })}
                <span>
                    {"</"}
                    <span>objectives</span>
                    {">"}
                </span>
            </code>
        )
    }
    function readObjectiveFile(data) {
        const tableElement = document.getElementById('objectiveText')
        ReactDOM.render(
            <div>
                <strong><p>Copy & Paste the text below and add to your books info.xml file.</p></strong>
                <pre>{objectiveMap(data)}</pre>
            </div>, 
        tableElement)
    }
    return (
        <>
        <Header />
        <div className="main">
            <h2>{name}</h2>
            <Form>
                <CSVReader cssInputClass="" label="Select CSV with Objective Resources" onFileLoaded={readObjectiveFile} />
                <div id="objectiveText"></div> 
            </Form>
        </div>
        <Footer />
        </>
    )
}