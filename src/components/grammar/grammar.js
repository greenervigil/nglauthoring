import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from '../header'
import Footer from '../footer'
import GrammarTable from './grammar_table'
import CSVReader from 'react-csv-reader'
import GrammarCreate from './grammar_create'
import { Alert, Select } from 'react-magma-dom'
import PropTypes from 'prop-types'
import ReturnHome from '../main_menu/return_home'

const options = [
    {
        value: 'Multiple Choice', 
        label: 'Multiple Choice'
    }, 
    {
        value: 'Listening and Speaking', 
        label: 'Listening and Speaking'
    }
]

export default function Grammar({ name }) {

    const [engine, setEngine] = useState('')

    function handleChange(option) {
        setEngine(option.value)
    }

    function readFile(data) {
        const tableElement = document.getElementById('grammarTable')
        ReactDOM.render(
            <div className="container">
                <GrammarTable data={data} engine={engine}/>
                <GrammarCreate data={data} engine={engine}/>
            </div>, 
        tableElement)
    }
    return (
        <>
        <Header />
        <ReturnHome />
        <div className="container">
            <h2>{name}</h2>
            <p>Upload CSV grammar file to evaluate grammar correctness.</p>
            <p><strong>All numbers need to be spelled out in the answer text to guarantee correct grammar is used.</strong></p>
            <div id="alert_error" role="alert" hidden>
                <Alert dismissable="true" closeLabel="Close" variant="danger" onDismiss={() => document.getElementById('alert_error').setAttribute('hidden', true)}>Compile completed with errors.  Review the table and correct any errors.</Alert>
            </div>
            <div id="alert_success" role="alert" hidden>
                <Alert dismissable="true" closeLabel="Close" variant="success" onDismiss={() => {document.getElementById('alert_success').setAttribute('hidden', true)}}>Compile completed with errors.  Review the table and correct any errors.</Alert>
            </div>
            <div className="container">
                <form>
                    <div className="form-group">
                        <Select 
                            id="engine" 
                            name="Select Engine Type" 
                            labelText="Select engine type" 
                            options={options} 
                            onChange={(handleChange)}/>
                        <CSVReader cssInputClass="" label="Select CSV with Grammar Resources" onFileLoaded={readFile} />
                    </div>
                </form>
            </div>
            <div id="grammarTable"></div>
        </div>
        &nbsp;
        <Footer />
        </>
    )
}

Grammar.propTypes = {
    name: PropTypes.string.isRequired
}