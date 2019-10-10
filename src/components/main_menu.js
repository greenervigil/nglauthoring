import React from 'react';
import MenuCard from './menu_card';
import { Grid } from 'semantic-ui-react';

export default function MainMenu() {
    return (
        <div className='main'>
            <Grid stackable columns={2} >
                {/*<Grid.Column>
                    <MenuCard name="Book Configuration" description="Configure info.xml for a book."/>
                </Grid.Column>*/}
                <Grid.Column>
                    <MenuCard name="Objectives" description="Create XML tags for objectives. "/>
                </Grid.Column>
                <Grid.Column>
                    <MenuCard name="SRI" description="Create grammars from product file, compile, and debug for errors."/>
                </Grid.Column>
                <Grid.Column>
                    <MenuCard name="Integrated Resources" description="Create a JSON for the additional Resources."/>
                </Grid.Column>
            </Grid>
        </div>
    )
}