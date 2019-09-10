import React from 'react'
import ReactDOM from 'react-dom';
import {Card, Button, Image} from 'semantic-ui-react'
import IntegratedResources from './integrated_resources';
import BookConfig from './book_config';
import SRICongif from './sri_config';
import Grammar from './grammar';

const MenuCard = (props) => {
    const handleClick = (e) => {
        const name = e.target.name
        if(name === 'Integrated Resources'){
            ReactDOM.render(<IntegratedResources name="Integrated Resources"/>, document.getElementById('root'));
        } else if(name === 'Book Configuration'){
            ReactDOM.render(<BookConfig name="Book Configuration"/>, document.getElementById('root'));
        }else if (name === 'Objectives'){
            ReactDOM.render(<IntegratedResources name="Objectives"/>, document.getElementById('root'));
        } else if (name === "SRI") {
            ReactDOM.render(<SRICongif name="SRI Grammars"/>, document.getElementById('root'));
        } else if (name === "SRI Grammar") {
            ReactDOM.render(<Grammar name="SRI Grammars"/>, document.getElementById('root'));
        } else if (name === "SRI Server Stats") {
            ReactDOM.render(<SRICongif name="SRI Grammars"/>, document.getElementById('root'));
        }
        
    }
    return (
        <Card>
        <Image src='https://picsum.photos/300'/>
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Meta>{props.description}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Button primary name={props.name} onClick={handleClick}>Select</Button>
            </Card.Content>
        </Card>
    )
}

export default MenuCard