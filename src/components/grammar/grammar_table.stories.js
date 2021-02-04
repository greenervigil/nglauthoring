import React from 'react'
import GrammarTable from './grammar_table'

export default {
    title: 'Grammar Table',
    component: GrammarTable,
}

const Template = (args) => <GrammarTable { ...args} />

export const LSGrammarTable = Template.bind({})

LSGrammarTable.args = {
    engine: 'Listening and Speaking',
    data: [['activity', 'unit', 'Answer', 'grammarID'],['MWLO3e_02_U15_0.xml', '08', 'one hundred and fifty people came to the party'],['MWLO3e_02_U16_1.xml', '09', '100 people came to the party'],['MWLO3e_02_U2_6.xml', '20', '100 people came to the party']]
}

export const MCGrammarTable = Template.bind({})

MCGrammarTable.args = {
    engine: 'Listening and Speaking',
    data: [['activity', 'unit', 'Question','grammarId','answer', 'answer','answer'],['MWLO3e_02_08.xml', '20', 'How many people came to the party', '', '100 people came to the party', 'I was all alone', 'What party'], ['MWLO3e_02_08.xml', '20', 'How many people came to the party', '', '100 people came to the party', 'I was all alone', 'What party'], ['MWLO3e_02_08.xml', '20', 'How many people came to the party', '', '100 people came to the party', 'I was all alone', 'What party']]
}
