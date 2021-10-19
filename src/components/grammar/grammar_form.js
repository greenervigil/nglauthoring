import React from 'react'
import { Select, Input } from 'react-magma-dom'
import CSVReader from 'react-csv-reader'
import PropTypes from 'prop-types'

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

export default function GrammarForm({ handleChange, handleInputChange, fileReadFunction }) {

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
                onFileLoaded={fileReadFunction} />
        </form>
    )
}

GrammarForm.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    fileReadFunction: PropTypes.func.isRequired,
}