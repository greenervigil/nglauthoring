import React from 'react'
import MenuCard from './menu_card'
import Header from '../header'
import Footer from '../footer'

export default function MainMenu() {
    const menuItems = [
        {
            name: 'Objectives',
            description: 'Create XML tags for objectives.'
        },
        {
            name: 'SRI Grammar',
            description: 'Create grammar and CSV files.'
        },
        {
            name: 'Integrated Resources',
            description: 'Create Integrated Resources JSON.'
        }
    ]

    return (
        <>
            <Header />
            <h1 style={{textAlign: 'center'}}>Authoring Tools</h1>
            <div id="main" >
                {menuItems.map((item, key) => <MenuCard key={key} name={item.name} description={item.description} />)}
            </div>
            <Footer />
        </>
    )
}