import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Select, Input } from 'react-magma-dom'
import GrammarTable from './grammar_table'
import CSVReader from 'react-csv-reader'
import GrammarCreate from './grammar_create'

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

export default function GrammarForm() {

    const [engine, setEngine] = useState('')
    const [productName, setProductName] = useState('')
    const [productId, setProductId] = useState('')
    const [start, setStart] = useState(1)

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
        }
    }

    function readFile(data) {
        const tableElement = document.getElementById('grammarTable')
        ReactDOM.render(
            <div className="container">
                <GrammarTable data={data} engine={engine}/>
                <GrammarCreate data={data} engine={engine} productName={productName} productId={productId} start={start}/>
            </div>, 
        tableElement)
    }

    return (
        <form className='form-group'>
            <Select 
                id="engine" 
                name="Select Engine Type" 
                labelText="Select engine type" 
                items={options} 
                onChange={(handleChange)}/>
            <Input 
                name="product name" 
                type="text" 
                labelText="Product name" 
                helperMessage="Enter the Product Name like 'My World Link Online 3e'" 
                onChange={handleInputChange}
            />
            <p>Choose a starting activity number:</p>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <Input 
                    name="start" 
                    labelText="Start" 
                    labelVisuallyHidden 
                    type="number" 
                    inputStyle={{width: 200, marginRight: 25}} 
                    placeholder="1" 
                    onChange={handleInputChange}
                /> 
                <Input 
                    name="product ID" 
                    type="text" 
                    labelText="Product ID" 
                    helperMessage="The Product ID is sometimes the Discipline like 'MWLO3e'" 
                    onChange={handleInputChange}
                />
            </div>
            <CSVReader 
                cssInputClass="" 
                label="Select CSV with Grammar Resources" 
                onFileLoaded={readFile} />
        </form>
    )
}