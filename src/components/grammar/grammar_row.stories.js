import React from 'react'
import GrammarRow from './grammar_row'

export default {
    title: 'Grammar Row',
    component: GrammarRow,
}

const Template = (args) => <GrammarRow { ...args} />

export const LSCorrectRow = Template.bind({})

LSCorrectRow.args = {
    engine: 'Listening and Speaking',
    row: ['grammarActivity', 'unit', 'Answer'],
}

export const LSIncorrectRow = Template.bind({})

LSIncorrectRow.args = {
    engine: 'Listening and Speaking',
    row: ['MWLO3e_02_08.xml', '20', '100 people came to the party']
}

export const MCCorrectRow = Template.bind({})

MCCorrectRow.args = {
    engine: 'Multiple Choice',
    row: ['grammarActivity', 'unit', 'Question', '', 'answer', 'answer', 'answer'],
}

export const MCIncorrectRow = Template.bind({})

MCIncorrectRow.args = {
    engine: 'Multiple Choice',
    row: ['MWLO3e_02_08.xml', '20', 'How many people came to the party', '', '100 people came to the party', 'I was all alone', 'What party']
}