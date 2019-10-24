import React from 'react'
import { Button } from 'react-magma-dom'
import PropTypes from 'prop-types'
import { CSVLink } from 'react-csv'
import { createGrammarId, ListeningSpeakingGrammar, MultipleChoiceGrammar } from '../utils/grammar-utils'

export default function GrammarCreate({data, engine}) {
    const buildGrammar = (grammarArray) => {
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

    const handleClick = () => {
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

    return (
        <form onSubmit={handleClick} >
            <Button color="marketing" type="submit">Compile Grammar File</Button>
            <CSVLink data={data}><Button color="marketing">Download to CSV</Button></CSVLink>
        </form>
    )
}

GrammarCreate.propTypes = {
    data: PropTypes.array.isRequired, 
    engine: PropTypes.string.isRequired
}