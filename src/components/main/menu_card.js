import React from 'react'
import ReactDOM from 'react-dom'
import {Card, CardBody, CardHeading} from 'react-magma-dom'
import { Button } from 'react-magma-dom'
import IntegratedResources from '../../pages/integrated_resources'
//import BookConfig from '../book_config/book_config'
import SRICongif from '../sri_config'
import Grammar from '../../pages/grammar'
import Objectives from '../../pages/objectives'
import PropTypes from 'prop-types'

export default function MenuCard({ name, description }) {
    function handleClick(event) {
        const name = event.target.name
        if(name === 'Integrated Resources'){
            ReactDOM.render(<IntegratedResources />, document.getElementById('content'))
        } else if(name === 'Book Configuration'){
            //ReactDOM.render(<BookConfig name="Book Configuration"/>, document.getElementById('root'))
        }else if (name === 'Objectives'){
            ReactDOM.render(<Objectives />, document.getElementById('content'))
        } else if (name === "SRI") {
            ReactDOM.render(<SRICongif name="SRI Grammars"/>, document.getElementById('content'))
        } else if (name === "SRI Grammar") {
            ReactDOM.render(<Grammar name="SRI Grammars"/>, document.getElementById('content'))
        } else if (name === "SRI Server Stats") {
            ReactDOM.render(<SRICongif name="SRI Grammars"/>, document.getElementById('content'))
        }
    }
    return (
        <Card 
            hasDropShadow
            align='center'
            calloutType='warning'
            width='400px'
        >
            <CardBody>
                <CardHeading headingLevel={3}>{name}</CardHeading>
                {description}
                {/*<Button isFullWidth color="marketing" name={name} onClick={handleClick}>Select</Button>*/}
            </CardBody>
        </Card>
    )
}

MenuCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}