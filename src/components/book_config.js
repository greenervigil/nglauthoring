import React from 'react'
import Header from './header';
import Footer from './footer';
import MenuCard from './menu_card';
import {Grid} from 'semantic-ui-react'

const BookConfig = (props) => (
    <>
    <Header name={props.name}/>
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
);

export default BookConfig