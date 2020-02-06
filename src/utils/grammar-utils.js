export const createGrammarId = (array) => {
    return "." + array[0].substring(0, array[0].length-4) + array[1]
}

export const ListeningSpeakingGrammar = (array) => {
    let listeningSpeakingString = ''
        //answer 1
        if(array[2] !== '' && array[3] !== '') {
            listeningSpeakingString += array[2].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ") + "| "
        } else {
            listeningSpeakingString += array[2].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ").trim() + "; "
        }
        return listeningSpeakingString
}

export const MultipleChoiceGrammar = (array) => {
    let multipleChoiceString = ''
        //answer 1
        if(array[4] !== '' && array[5] !== '') {
            multipleChoiceString += array[4].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ") + "| "
        } else {
            multipleChoiceString += array[4].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ").trim() + "; "
        }
        //answer 2
        if(array[5] !== '' && array[6] !== '') {
            multipleChoiceString += array[5].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ") + "| " 
        }  else {
            multipleChoiceString += array[5].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ").trim() + "; "
        }
        //answer 3
        if(array[6] !== '') {
            multipleChoiceString += array[6].toLowerCase().replace(/[!?:,]/g, "").replace(/\./g, " ").trim() + "; "
        } 
        return multipleChoiceString
}

export const downloadFile = (data, fileName) => {
    const blob = new Blob([data], {type: "text/plain"})
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.download = fileName
    link.href = url
    link.click()
}