import React from 'react'
import MenuCard from './components/main/menu_card'

export default function Home() {
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
            <h1 style={{textAlign: 'center'}}>Authoring Tools</h1>
            <div id="main" >
                {menuItems.map((item, key) => <MenuCard key={key} name={item.name} description={item.description} />)}
            </div>
        </>
    )
}