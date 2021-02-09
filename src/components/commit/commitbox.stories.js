import React from 'react'
import CommitBox from './commitbox'

export default {
    title: 'Commit Component',
    component: CommitBox
}

const Template = (args) => <CommitBox { ...args} />

export const Default = Template.bind({})