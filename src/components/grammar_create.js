import React from 'react'
import { Button } from 'semantic-ui-react'

const GrammarCreate = (props) => {

    const buildGrammar = (grammarArray) => {
        //public <.GRAMMARID> = <ANSWER> | <ANSWER> | <ANSWER> | <ANSWER>;
        //public <.GRAMMARID> = <ANSWER> | <ANSWER> | <ANSWER>;
        //public <.GRAMMARID> = <ANSWER> | <ANSWER>;
        //public <.GRAMMARID> = <ANSWER>;
        let grammarString = "public <." + grammarArray[0].substring(0, grammarArray[0].length-4) + grammarArray[1] + "> = "
        //answer 1
        if (grammarArray[3] === '') {
            //skip
        }else if(grammarArray[3] !== '' || (grammarArray[3] === '' && grammarArray[4] !== '')) {
            grammarString += grammarArray[3].toLowerCase().replace(/[!?,]/g, "").replace(/\./g, " ") + "| "
        } else {
            grammarString += grammarArray[3].toLowerCase().replace(/[!?,]/g, "").replace(/\./g, " ").trim() + "; "
        }
        //answer 2
        if (grammarArray[4] === '') {
            //skip
        } else if(grammarArray[4] !== '' && grammarArray[5] !== '') {
            grammarString += grammarArray[4].toLowerCase().replace(/[!?,]/g, "").replace(/\./g, " ") + "| "
        } else {
            grammarString += grammarArray[4].toLowerCase().replace(/[!?,]/g, "").replace(/\./g, " ").trim() + "; "
        }
        //answer 3
        if (grammarArray[5] === ''){
            //skip
        } else if(grammarArray[5] !== '' && grammarArray[6] !== '') {
            grammarString += grammarArray[5].toLowerCase().replace(/[!?,]/g, "").replace(/\./g, " ") + "| " 
        }  else {
            grammarString += grammarArray[5].toLowerCase().replace(/[!?,]/g, "").replace(/\./g, " ").trim() + "; "
        }
        //answer 4
        if (grammarArray[6] === '') {
            //skip
        } else if(grammarArray[6] !== '') {
            grammarString += grammarArray[6].toLowerCase().replace(/[!?,]/g, "").replace(/\./g, " ").trim() + "; "
        }        

        return grammarString
    }

    const handleClick = () => {
        let fileData = ''
        props.data
            .filter((row, index) => index !== 0)
            .map((row, index) => (
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
            <Button primary onClick={handleClick}>Compile Grammar File</Button>
            <Button primary>Export CSV</Button>
        </>
    )
}

export default GrammarCreate