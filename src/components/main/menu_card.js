import React from 'react'
import {Card, CardBody, CardHeading} from 'react-magma-dom'
import { Button } from 'react-magma-dom'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

export default function MenuCard({ name, description }) {
    const navigate = useNavigate();

    function handleClick(event) {
        const name = event.currentTarget.name
        if(name === 'Integrated Resources'){
            navigate('/integrated-resources')
        }else if (name === 'Objectives'){
            navigate('/objectives')
        } else if (name === "SRI") {
            navigate('/grammar')
        } else if (name === "SRI Grammar") {
            navigate('/grammar')
        } else if (name === "SRI Server Stats") {
            navigate('/grammar')
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