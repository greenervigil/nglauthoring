import React from 'react'
import Objective from './objective'

export default { 
    title: 'XML - Objective',
    component: Objective
}

const Template = (args) => <Objective { ...args} />

export const Default = Template.bind({})

Default.args = {
    objectiveId: 'grammar_06',
    objectiveName: 'Speaking Level 6',
}