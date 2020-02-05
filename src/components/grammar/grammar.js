import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Header from '../header'
import Footer from '../footer'
import GrammarTable from './grammar_table'
import CSVReader from 'react-csv-reader'
import GrammarCreate from './grammar_create'
import { Alert, Select, Input } from 'react-magma-dom'
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
    const [productName, setProductName] = useState('')
    const [productId, setProductId] = useState('')
    const [start, setStart] = useState(1)
    const [end, setEnd] = useState(1)

    function handleChange(option) {
        setEngine(option.value)
    }

    function handleInputChange(event) {
        const name = event.target.name
        if(name === 'product name') {
            setProductName(event.target.value)
        } else if (name === 'product ID') {
            setProductId(event.target.value)
        } else if (name === 'start') {
            setStart(Number(event.target.value))
        } else if (name === 'end'){
            setEnd(Number(event.target.value))
        }
    }

    function readFile(data) {
        const tableElement = document.getElementById('grammarTable')
        ReactDOM.render(
            <div className="container">
                <GrammarTable data={data} engine={engine}/>
                <GrammarCreate data={data} engine={engine} productName={productName} productId={productId} start={start} end={end}/>
            </div>, 
        tableElement)
    }
    return (
        <>
        <Header />
        <ReturnHome />
        <div className="container">
            <h2>{name}</h2>
            <p>Upload CSV grammar file to evaluate grammar correctness, create SRI grammar files, and test bench configuration files.  <strong>All numbers need to be spelled out in the answer text to guarantee correct grammar is used.</strong></p>
            <div id="alert_error" role="alert" hidden>
                <Alert dismissable="true" closeLabel="Close" variant="danger" onDismiss={() => document.getElementById('alert_error').setAttribute('hidden', true)}>Compile completed with errors.  Review the table and correct any errors.</Alert>
            </div>
            <div id="alert_success" role="alert" hidden>
                <Alert dismissable="true" closeLabel="Close" variant="success" onDismiss={() => {document.getElementById('alert_success').setAttribute('hidden', true)}}>Success!</Alert>
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
                        <Input name="product name" type="text" labelText="Product name" helperMessage="Enter the Product Name like 'My World Link Online 3e'" onChange={handleInputChange}/>
                        <Input name="product ID" type="text" labelText="Product ID" helperMessage="The Product ID is sometimes the Discipline like 'MWLO3e'" onChange={handleInputChange}/>
                        <p>Choose an activity number range:</p>
                        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                            <Input name="start" labelText="Start" labelVisuallyHidden type="number" inputStyle={{width: 200, marginRight: 25}} placeholder="1" onChange={handleInputChange}/> 
                            <Input name="end" labelText="End" labelVisuallyHidden type="number" inputStyle={{width: 200}} placeholder="100" onChange={handleInputChange}/>
                        </div>
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