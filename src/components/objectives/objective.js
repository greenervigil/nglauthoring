import React from 'react'
import PropTypes from 'prop-types'

export default function Objective({ objectiveId, objectiveName }) {
    return (
        <>
        <code style={{paddingLeft: 20}}>&lt;objective&gt;</code>
            <br/>
            <code style={{paddingLeft: 40}}>&lt;id&gt;{objectiveId}&lt;/id&gt;</code>
            <br/>
            <code style={{paddingLeft: 40}}>&lt;name&gt;{objectiveName}&lt;/name&gt;</code>
            <br />
        <code style={{paddingLeft: 20}}>&lt;/objective&gt;</code>
        <br/>
        </>
    )
}

Objective.propTypes = {
    objectiveId: PropTypes.string.isRequired,
    objectiveName: PropTypes.string.isRequired,
}