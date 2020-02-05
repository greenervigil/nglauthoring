import React, { useState } from 'react'
import { Button } from 'react-magma-dom'
import PropTypes from 'prop-types'
import { createGrammarId, ListeningSpeakingGrammar, MultipleChoiceGrammar } from '../../utils/grammar-utils'
import ExportCSV from '../export_csv'

export default function GrammarCreate({data, engine, productName, productId, start, end}) {
    const [activityCount, setActivityCount] = useState(start)
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

    function getActivityId() {
        //const count = activityCount
        if (activityCount < end) {
            console.log('here')
            setActivityCount(c => c + 1)
        } else {
            alert('max number count of ' + end + ' has been reached')
        }
        return activityCount
    }

    function createGrammarObject(dataArray) {
        /*JSON object should contain grammarId, scenario, activity-type, activity, prompt, productId, grammar, activityId, resultMode
        */
        let grammarObj = {
            "grammarId": createGrammarId(dataArray),
            "activity-type": "",
            "productId": productId,
            "activityId": getActivityId()
        }

        //scenario, activity-type, activity, prompt, grammar, resultMode, activityId
        if(engine === 'Listening and Speaking'){
            grammarObj.scenario = "Speak/Pronounce Sentences " + productName
            grammarObj['activity-type'] = "sentence"
            grammarObj.activity = dataArray[2]
            grammarObj.grammar = dataArray[2]
            grammarObj.resultMode = "word_interpretation"
        } else if (engine === "Multiple Choice") {
            grammarObj.scenario = "Answer the Question " + productName;
            grammarObj['activity-type'] = "question";
            grammarObj.activity = [dataArray[4], dataArray[5], dataArray[6]]
            grammarObj.prompt = dataArray[2]
            grammarObj.resultMode = "result_interpretation"
        }

        return grammarObj
    }

    function createJsonObject(event) {
        event.preventDefault()
        let jsonData = []
        
        data.filter((row, index) => index !== 0).forEach((row) => {
            jsonData.push(createGrammarObject(row))
        })
        console.log(jsonData)
    }

    return (
        <>
            <form onSubmit={handleGrammarSubmit} >
                <Button color="marketing" type="submit">Compile Grammar File</Button>
                <Button color="marketing" onClick={createJsonObject} >Compile JSON</Button>
            </form>
            <ExportCSV data={csvOutput()} />
        </>
    )
}

GrammarCreate.propTypes = {
    data: PropTypes.array.isRequired, 
    engine: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productId: PropTypes.string.isRequired,
    start: PropTypes.number.isRequired,
    end: PropTypes.number.isRequired
}