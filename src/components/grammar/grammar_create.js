import React from 'react'
import { Button } from 'react-magma-dom'
import PropTypes from 'prop-types'
import { createGrammarId, buildGrammar, csvOutput, downloadFile } from '../../utils/grammar-utils'
import ExportCSV from '../export_csv'

export default function GrammarCreate({data, engine, productName, productId, start}) {
    let count = start

    function handleGrammarSubmit(event) {
        event.preventDefault();
        let fileData = ''
        data.filter((row, index) => index !== 0)
            .map((row) => (
                fileData += buildGrammar(row, engine)
            )
        )
        downloadFile(fileData, "grammar.grm")
    }

    function getActivityId() {
        let activityId = count
        count++
        return activityId
    }

    function createGrammarObject(dataArray) {
        /*JSON object should contain grammarId, scenario, activity-type, activity, prompt, productId, grammar, activityId, resultMode
        */
       const grammar = createGrammarId(dataArray)
        let grammarObj = {
            "grammarId": grammar,
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
            grammarObj.prompt = (dataArray[2] !== "") ? dataArray[2] : grammar
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
        downloadFile(JSON.stringify(jsonData), "config.json")
    }

    return (
        <form onSubmit={handleGrammarSubmit} >
            <Button color="marketing" type="submit">Compile Grammar File</Button>
            <Button color="marketing" onClick={createJsonObject} >Compile JSON</Button>
            <ExportCSV data={csvOutput(data)} />
        </form>
    )
}

GrammarCreate.propTypes = {
    data: PropTypes.array.isRequired, 
    engine: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productId: PropTypes.string.isRequired,
    start: PropTypes.number.isRequired
}