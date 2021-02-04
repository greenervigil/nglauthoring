import React from 'react'
import GrammarTableHeader from './grammar_table_header'

export default {
    title: 'Grammar Table Header',
    component: GrammarTableHeader,
}

const Template = (args) => <GrammarTableHeader { ...args} />

export const HeaderRow = Template.bind({})

HeaderRow.args = {
    headerRow: ['question', 'unit', 'Answer', 'grammarID']
}