import React from 'react'
import ReactDOM from 'react-dom';
import {Card, Button, Icon, Image} from 'semantic-ui-react'
import IntegratedResources from '../integrated_resources/integrated_resources';
import BookConfig from '../book_author/book_config';

const MenuCard = (props) => {
    const handleClick = (e) => {
        const name = e.target.name
        if(name === 'Integrated Resources'){
            ReactDOM.render(<IntegratedResources name="Integrated Resources"/>, document.getElementById('root'));
        } else if(name === 'Book Configuration'){
            ReactDOM.render(<BookConfig name="Book Configuration"/>, document.getElementById('root'));
        }else if (name === 'Objectives'){
            ReactDOM.render(<IntegratedResources name="Objectives"/>, document.getElementById('root'));
        } else if (name === "SRI Grammars") {
            ReactDOM.render(<IntegratedResources name="SRI Grammars"/>, document.getElementById('root'));
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
                <Button primary name={props.name} animated onClick={handleClick}>
                    <Button.Content visible>Select</Button.Content>
                    <Button.Content hidden >
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            </Card.Content>
        </Card>
    )
}

export default MenuCard