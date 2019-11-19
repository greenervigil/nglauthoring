import React from 'react'
import ReactDOM from 'react-dom'
import {Card} from 'semantic-ui-react'
import { Button } from 'react-magma-dom'
import IntegratedResources from '../integrated_resources'
import BookConfig from '../book_config'
import SRICongif from '../sri_config'
import Grammar from '../grammar'
import Objectives from '../objectives'
import ProfileSelect from './profile_select'
import PropTypes from 'prop-types'

export default function ProfileCard({ name, description, newItem, onClick, disabled }) {

    return (
        <Card>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>{description}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Button block disabled={disabled} color={ newItem ? "success" : "marketing" } name={name} onClick={onClick}>{newItem ? "Create New" : "Select"}</Button>
            </Card.Content>
        </Card>
    )
}

ProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    newItem: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}