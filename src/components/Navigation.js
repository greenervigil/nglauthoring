import React from 'react'
import { NavTabs, NavTab } from 'react-magma-dom'

export default function Navigation() {
    return (
        <NavTabs aria-label="Sample Custom Component Navigation Tabs" alignment='center' backgroundColor='#000' isInverse>
            <NavTab isActive to="/">Home</NavTab>
            <NavTab to="/pages/objectives">Objectives</NavTab>
            <NavTab to="/sri">SRI Grammar</NavTab>
            <NavTab to="/integrated_resources">Integrated Resources</NavTab>
        </NavTabs>
    )
}