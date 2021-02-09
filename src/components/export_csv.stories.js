import React from 'react'
import CSVExport from './export_csv'

export default { 
    title: 'CSV Export',
    component: CSVExport
}

const Template = (args) => <CSVExport { ...args} />

export const Default = Template.bind({})

Default.args = {
    data: []
}