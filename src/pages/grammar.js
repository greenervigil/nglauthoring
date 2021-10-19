import React, { useState } from 'react'
import GrammarForm from '../components/grammar/grammar_form'
import GrammarCreate from '../components/grammar/grammar_create'
import GrammarTable from '../components/grammar/grammar_table'

export default function Grammar() {
    const [engine, setEngine] = useState('')
    const [productName, setProductName] = useState('')
    const [productId, setProductId] = useState('')
    const [start, setStart] = useState(1)
    const [grammarData, setGrammarData] = useState([])

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

    function handleChange(option) {
        setEngine(option.value)
    }

    function readFile(data) {
        setGrammarData(data)
        document.getElementById('grammarTable').removeAttribute('hidden')
    }

    return (
        <div className='container'>
            <h2>SRI Grammar</h2>
            <p>Upload CSV grammar file to evaluate grammar correctness, create SRI grammar files, and test bench configuration files.  <strong>All numbers need to be spelled out in the answer text to guarantee correct grammar is used.</strong></p>
                
            <div className='container'>
                <GrammarForm handleChange={handleChange} handleInputChange={handleInputChange} fileReadFunction={readFile}/>
            </div>
            <div id='grammarTable' hidden>
                <GrammarTable data={grammarData} engine={engine} />
                <GrammarCreate data={grammarData} engine={engine} productName={productName} productId={productId} start={start}/>
            </div>
        </div>
    )
}
