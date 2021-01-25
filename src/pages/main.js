import React from 'react'
import MenuCard from '../components/main/menu_card'
import Header from '../components/header'
import Footer from '../components/footer'
import Navigation from '../components/Navigation'

export default function Main() {
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
            <Navigation />
            <h1 style={{textAlign: 'center'}}>Authoring Tools</h1>
            <div id="main" >
                {menuItems.map((item, key) => <MenuCard key={key} name={item.name} description={item.description} />)}
            </div>
            <Footer />
        </>
    )
}