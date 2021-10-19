import React from 'react'
import GrammarCreate from './grammar_create'

export default {
    title: 'Grammar Create',
    component: GrammarCreate
}

const Template = (args) => <GrammarCreate { ...args} />

export const Default = Template.bind({})

Default.args = {
    engine: 'Listening and Speaking',
    productName: 'My World Link Online',
    productId: 'MWLO3e',
    data: [],
    start: 1,
}
