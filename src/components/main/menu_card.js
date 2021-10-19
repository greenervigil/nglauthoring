import React from 'react'
import {Card, CardBody, CardHeading} from 'react-magma-dom'
import { Button } from 'react-magma-dom'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

export default function MenuCard({ name, description }) {
    let history = useHistory();

    function handleClick(event) {
        const name = event.target.name
        if(name === 'Integrated Resources'){
            history.push('/integrated-resources')
        } else if(name === 'Book Configuration'){
            //history.push('/book-config')
        }else if (name === 'Objectives'){
            history.push('/objectives')
        } else if (name === "SRI") {
            history.push('/grammar')
        } else if (name === "SRI Grammar") {
            history.push('/grammar')
        } else if (name === "SRI Server Stats") {
            history.push('/grammar')
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
                <Button isFullWidth color="marketing" name={name} onClick={handleClick}>Select</Button>
            </CardBody>
        </Card>
    )
}

MenuCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}