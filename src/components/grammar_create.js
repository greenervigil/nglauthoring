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
            //answer 1
            console.log(grammarArray[2])
            if (grammarArray[2] === '') {
                //skip
            } else if(grammarArray[2] !== '' && grammarArray[3] !== '') {
                grammarString += grammarArray[2].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ") + "| "
            } else {
                grammarString += grammarArray[2].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ").trim() + "; "
            }
        } else if (engine === 'Multiple Choice'){
            //answer 1
            if (grammarArray[4] === '') {
                //skip
            } else if(grammarArray[4] !== '' && grammarArray[5] !== '') {
                grammarString += grammarArray[4].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ") + "| "
            } else {
                grammarString += grammarArray[4].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ").trim() + "; "
            }
            //answer 2
            if (grammarArray[5] === ''){
                //skip
            } else if(grammarArray[5] !== '' && grammarArray[6] !== '') {
                grammarString += grammarArray[5].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ") + "| " 
            }  else {
                grammarString += grammarArray[5].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ").trim() + "; "
            }
            //answer 3
            if (grammarArray[6] === '') {
                //skip
            } else if(grammarArray[6] !== '') {
                grammarString += grammarArray[6].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ").trim() + "; "
            } 
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