import React from 'react'
import Header from './header'
import Footer from './footer'
import { Grid } from 'semantic-ui-react'
import MenuCard from './menu_card'
import ReturnHome from './return_home'

export default function SRIConfig() {
    return (
        <>
            <Header />
            <div className='container'>
                <ReturnHome />
                <Grid stackable >
                    <Grid.Column>
                        <MenuCard name="SRI Grammar" description="Create grammars from product file, compile, and debug for errors."/>
                    </Grid.Column>
                    {/*<Grid.Column>
                        <MenuCard name="SRI Server Stats" description="Check status of a server and debug audios."/>
                    </Grid.Column>*/}
                </Grid>
            </div>
            &nbsp;
            <Footer />
        </>
    )
}