import React from 'react'
import GrammarForm from './grammar_form'

export default {
    title: 'Forms - Grammar Form',
    component: GrammarForm,
    parameters: { actions: { argTypesRegex: '^on.*' } },
}

const Template = (args) => <GrammarForm { ...args} />

export const Default = Template.bind({})

/*Default.parameters = {
    handleInputChange: () => {},
    handleChange: () => {},
    fileReadFunction: () => {}
}*/