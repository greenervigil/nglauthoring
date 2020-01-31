import React from 'react'
import { Button } from 'react-magma-dom'
import PropTypes from 'prop-types'
import { createGrammarId, ListeningSpeakingGrammar, MultipleChoiceGrammar } from '../../utils/grammar-utils'
import ExportCSV from '../export_csv'

export default function GrammarCreate({data, engine}) {
    function buildGrammar(grammarArray) {
        //grammarId
        let grammarString = "public <" + createGrammarId(grammarArray) + "> = "
        //public <.GRAMMARID> = <ANSWER> | <ANSWER> | <ANSWER>;
        //public <.GRAMMARID> = <ANSWER> | <ANSWER>;
        //public <.GRAMMARID> = <ANSWER>;
        if (engine === 'Listening and Speaking') {
            grammarString += ListeningSpeakingGrammar(grammarArray)
        } else if (engine === 'Multiple Choice'){
            grammarString += MultipleChoiceGrammar(grammarArray)
        } else {
            //do nothing
        }       

        return grammarString
    }

    function handleGrammarSubmit(event) {
        event.preventDefault();
        let fileData = ''
        data.filter((row, index) => index !== 0)
            .map((row) => (
                fileData += buildGrammar(row)
            )
        )
        const blob = new Blob([fileData], {type: "text/plain"})
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.download = "grammar.grm"
        link.href = url
        link.click()
    }

    function csvOutput() {
        //we need to add the grammar id to the output data so vendor can import csv into their system with the ids
        let configuredData = []
        data.forEach((row, index) => {
            if (index !== 0) {
                row[3] = createGrammarId(row)
            }
            configuredData.push(row)
        })
        return configuredData
    }

    return (
        <form onSubmit={handleGrammarSubmit} >
            <Button color="marketing" type="submit">Compile Grammar File</Button>
            <ExportCSV data={csvOutput()} />
        </form>
    )
}

GrammarCreate.propTypes = {
    data: PropTypes.array.isRequired, 
    engine: PropTypes.string.isRequired
}