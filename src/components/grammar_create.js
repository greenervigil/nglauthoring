import React from 'react'
import { Button } from 'react-magma-dom'
import PropTypes from 'prop-types'

export default function GrammarCreate({data, engine}) {

    const buildGrammar = (grammarArray) => {
        //grammarId
        let grammarString = "public <." + grammarArray[0].substring(0, grammarArray[0].length-4) + grammarArray[1] + "> = "
        //public <.GRAMMARID> = <ANSWER> | <ANSWER> | <ANSWER>;
        //public <.GRAMMARID> = <ANSWER> | <ANSWER>;
        //public <.GRAMMARID> = <ANSWER>;
        if (engine === 'Listening and Speaking') {
            grammarString += LSGrammar(grammarArray)
        } else if (engine === 'Multiple Choice'){
            grammarString += MCGrammar(grammarArray)
        } else {
            //do nothing
        }       

        return grammarString
    }

    function LSGrammar(array) {
        //answer 1
        if (array[2] === '') {
            //skip
        } else if(array[2] !== '' && array[3] !== '') {
            return array[2].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ") + "| "
        } else {
            return array[2].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ").trim() + "; "
        }
    }

    function MCGrammar(array) {
        //answer 1
        if (array[4] === '') {
            //skip
        } else if(array[4] !== '' && array[5] !== '') {
            return array[4].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ") + "| "
        } else {
            return array[4].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ").trim() + "; "
        }
        //answer 2
        if (array[5] === ''){
            //skip
        } else if(array[5] !== '' && array[6] !== '') {
            return array[5].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ") + "| " 
        }  else {
            return array[5].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ").trim() + "; "
        }
        //answer 3
        if (array[6] === '') {
            //skip
        } else if(array[6] !== '') {
            return array[6].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ").trim() + "; "
        } 
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
        <>
            <Button color="marketing" onClick={handleClick}>Compile Grammar File</Button>
            <Button color="marketing">Export CSV</Button>
        </>
    )
}

GrammarCreate.propTypes = {
    data: PropTypes.array.isRequired, 
    engine: PropTypes.string.isRequired
}