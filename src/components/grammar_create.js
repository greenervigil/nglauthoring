import React from 'react'
import { Button } from 'semantic-ui-react'

const GrammarCreate = (props) => {

    const buildGrammar = (grammarArray) => {
        let grammarString = "public <." + grammarArray[0].substring(0, grammarArray[0].length-4) + grammarArray[1] + "> = "

        if(grammarArray[3] !== '') {
            grammarString += grammarArray[3].toLowerCase().replace(/!?,\./g, " ") + "| "
        }
        if(grammarArray[4] !== '') {
            grammarString += grammarArray[4].toLowerCase().replace(/!\?,\./g, " ") + "| "
        }
        if(grammarArray[5] !== '') {
            grammarString += grammarArray[5].toLowerCase().replace(/!\?,\./g, " ") + "| " 
        } 
        if(grammarArray[6] !== '') {
            grammarString += grammarArray[6].toLowerCase().replace(/!\?,\./g, " ") + ";"
        }        

        return grammarString
    }

    const handleClick = () => {
        //public <.GRAMMARID> = <ANSWER> | <ANSWER> | <ANSWER> | <ANSWER>;
        //public <.GRAMMARID> = <ANSWER> | <ANSWER> | <ANSWER>;
        //public <.GRAMMARID> = <ANSWER> | <ANSWER>;
        //public <.GRAMMARID> = <ANSWER>;
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
        <Button primary onClick={handleClick}>Compile Grammar</Button>
    )
}

export default GrammarCreate