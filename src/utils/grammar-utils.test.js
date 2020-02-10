import { ListeningSpeakingGrammar, MultipleChoiceGrammar, csvOutput } from './grammar-utils'

test('test listening and speaking grammar creation', () => {
    const data = ['WE3eL2_01_02_03.xml', '0','I usually like a tomato with breakfast']
    const returnData = ListeningSpeakingGrammar(data)

    expect(returnData).toBe('i usually like a tomato with breakfast; ')
})

test('test the Multiple Choice grammar creation', () => {
    const testData = ['WE3eL2_01_02_03.xml', '0','What do you eat for beakfast','','I usually like a tomato with breakfast', 'I like cereal']
    const returnData = MultipleChoiceGrammar(testData)

    expect(returnData).toBe('i usually like a tomato with breakfast| i like cereal; ')
})

test('test CSV output to include a grammarID', () => {
    const testMCData = [['fileName','index','questionText','grammarID','answers'],['WE3eL2_01_02_03.xml', '0','What do you eat for beakfast','','I usually like a tomato with breakfast', 'I like cereal']]
    const testLSData = [['fileName','index','questionText','grammarID',],['WE3eL2_01_02_03.xml', '0','I ususally like a tomato with breakfast','']]
    const returnGrammarData = csvOutput(testMCData, 'Multiple Choice')
    const returnLSGrammarData = csvOutput(testLSData, 'Listening and Speaking')

    expect(returnGrammarData[1][3]).toBe(".WE3eL2_01_02_030")
    expect(returnLSGrammarData[1][3]).toBe(".WE3eL2_01_02_030")
})
