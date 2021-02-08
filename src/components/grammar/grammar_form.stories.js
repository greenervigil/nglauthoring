import React from 'react'
import GrammarForm from './grammar_form'

export default {
    title: 'Forms - Grammar Form',
    component: GrammarForm,
}

const Template = (args) => <GrammarForm { ...args} />

export const Default = Template.bind({})

Default.args = {
    handleInputChange: () => {},
    handleChange: () => {},
    fileReadFunction: () => {}
}