export const createGrammarId = (array) => {
    return "." + array[0].substring(0, array[0].length-4) + array[1]
}

export const ListeningSpeakingGrammar = (array) => {
    //Listening and Speaking only has a single grammar questionText array[2]
    return array[2].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ").trim() + "; "
}

export const MultipleChoiceGrammar = (array) => {
    let multipleChoiceString = ''
        //answer 1
        if(array[4] !== '' && array[5] !== undefined) {
            multipleChoiceString += array[4].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ") + "| "
            //answer 2
            if(array[5] !== '' && array[6] !== undefined) {
                multipleChoiceString += array[5].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ") + "| "
                //answer 3
                if(array[6] !== '') {
                    multipleChoiceString += array[6].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ").trim() + "; "
                } 
            }  else {
                multipleChoiceString += array[5].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ").trim() + "; "
            }
        } else {
            multipleChoiceString += array[4].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ").trim() + "; "
        }
        
        return multipleChoiceString
}

export const buildGrammar = (grammarArray, engine) => {
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

export const csvOutput = (data) => {
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

export const downloadFile = (data, fileName) => {
    const blob = new Blob([data], {type: "text/plain"})
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.download = fileName
    link.href = url
    link.click()
}