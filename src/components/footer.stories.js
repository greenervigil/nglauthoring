import React from 'react'
import Footer from './footer'

import '../index.css'

export default {
    title: 'Footer',
    component: Footer
}

const Template = (args) => <Footer { ...args} />

export const Default = Template.bind({})

Default.parameters = {
    controls: { hideNoControlsWarning: true },
}