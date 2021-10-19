import React from 'react'
import MenuCard from './menu_card'

export default {
    title: "Menu Card",
    component: MenuCard,
}

const Template = (args) => <MenuCard { ...args} />

export const Default = Template.bind({})

Default.args = {
    name: 'This is a card',
    description: 'Tell me about what this card is'
}