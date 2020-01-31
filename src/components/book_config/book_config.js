import React from 'react'
import Header from '../header'
import Footer from '../footer'
import MenuCard from '../main_menu/menu_card'
import {Grid} from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default function BookConfig({name}) {
    return (
        <>
            <Header name={name}/>
                <div className="container">
                    <Grid stackable columns={2}>
                        <Grid.Column>
                            <MenuCard name="OWB" description="Online Work Book.  Single standalone book." />
                        </Grid.Column>
                        <Grid.Column>
                            <MenuCard name="Superproduct" description="Multiple single books linked together to form a single standalone book."/>
                        </Grid.Column>
                    </Grid>
                </div>
            <Footer />
        </>
    )
}

BookConfig.propTypes = {
    name: PropTypes.string.isRequired
}