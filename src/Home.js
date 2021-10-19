import React from 'react'
import MenuCard from './components/main/menu_card'

export default function Home() {
    const menuItems = [
        {
            name: 'Objectives',
            description: 'Objectives are use in learning path products to allow for adaptability.  Create XML tags for book objectives using this tool.'
        },
        {
            name: 'SRI Grammar',
            description: 'Speech recognition activities require a grammar id which maps the activity for the software to evaluate.  Create the grammar and CSV files using this tool.'
        },
        {
            name: 'Integrated Resources',
            description: 'Integrated resources are additional resources to a book which can be located within the book menu of a super Product.  Create the JSON using this tool.'
        }
    ]
    return (
        <>
            <h1 style={{textAlign: 'center'}}>Authoring Tools</h1>
            <p style={{textAlign: 'center'}}>Review the current Authoring Tools available to assist in integrating with MyELT.</p>
            <div id='main'>
                {menuItems.map((item, key) => <MenuCard key={key} name={item.name} description={item.description} />)}
            </div>
        </>
    )
}