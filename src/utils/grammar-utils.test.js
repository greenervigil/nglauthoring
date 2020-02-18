import { ListeningSpeakingGrammar, MultipleChoiceGrammar, csvOutput, createGrammarId, buildGrammar } from './grammar-utils'

const testMCData = [['fileName','index','questionText','grammarID','answers'],['WE3eL2_01_02_03.xml', '0','What do you eat for beakfast','','I usually like a tomato with breakfast', 'I like cereal']]
    
const testLSData = [['fileName','index','questionText','grammarID',],['WE3eL2_01_02_03.xml', '0','I usually like a tomato with breakfast','']]

describe('Testing Grammar-utils', () => {
    it('Should create a grammar id', () => {
        const returnData = createGrammarId(testMCData[1])
    
        expect(returnData).toEqual('.WE3eL2_01_02_030')
    })
    
    it('Should output listening and speaking grammar', () => {
        const returnData = ListeningSpeakingGrammar(testLSData[1])
    
        expect(returnData).toEqual('i usually like a tomato with breakfast; ')
    })
    
    it('Should output Multiple Choice grammar', () => {
        const returnData = MultipleChoiceGrammar(testMCData[1])
    
        expect(returnData).toEqual('i usually like a tomato with breakfast| i like cereal; ')
    })
    
    it('Should output CSV data for MC to include a grammarID', () => {
        
        const returnGrammarData = csvOutput(testMCData, 'Multiple Choice')
    
        expect(returnGrammarData[1][3]).toEqual(".WE3eL2_01_02_030")
    })
    
    it('Should output CSV data for LS to include a grammarID', () => {
        const returnLSGrammarData = csvOutput(testLSData, 'Listening and Speaking')
    
        expect(returnLSGrammarData[1][3]).toEqual(".WE3eL2_01_02_030")
    })
    
    it('Should build MC grammar', () => {
        expect(buildGrammar(testMCData[1], 'Multiple Choice')).toEqual('public <.WE3eL2_01_02_030> = i usually like a tomato with breakfast| i like cereal; ')
    })
    
    it('Should build LS grammar', () => {
        expect(buildGrammar(testLSData[1], 'Listening and Speaking')).toEqual('public <.WE3eL2_01_02_030> = i usually like a tomato with breakfast; ')
    })
})

