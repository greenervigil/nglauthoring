import React from 'react'
import MenuCard from './menu_card'
import { Grid } from 'semantic-ui-react'

export default function MainMenu() {
    return (
        <>
            <Grid stackable columns={2} >
                <Grid.Column>
                    <MenuCard name="Book Configuration" description="Configure info.xml for a book."/>
                </Grid.Column>
                <Grid.Column>
                    <MenuCard name="Objectives" description="Create XML tags for objectives."/>
                </Grid.Column>
                <Grid.Column>
                    <MenuCard name="SRI" description="Create grammar and CSV files."/>
                </Grid.Column>
                <Grid.Column>
                    <MenuCard name="Integrated Resources" description="Create Integrated Resources JSON."/>
                </Grid.Column>
            </Grid>
        </>
    )
}