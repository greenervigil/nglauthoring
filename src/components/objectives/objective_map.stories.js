import React from 'react'
import ObjectiveMap from './objective_map'

export default { 
    title: 'Objective Mapping',
    component: ObjectiveMap
}

const Template = (args) => <ObjectiveMap { ...args} />

export const Default = Template.bind({})

Default.args = {
    data: [['id', 'objective'], ['1', 'test objective']]
}