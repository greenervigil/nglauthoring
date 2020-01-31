import React from 'react'
import PropTypes from 'prop-types'

export default function Objective({ row }) {
    return (
        <>
        <code style={{paddingLeft: 20}}>&lt;objective&gt;</code>
            <br/>
            <code style={{paddingLeft: 40}}>&lt;id&gt;{row[0]}&lt;/id&gt;</code>
            <br/>
            <code style={{paddingLeft: 40}}>&lt;name&gt;{row[1]}&lt;/name&gt;</code>
            <br />
        <code style={{paddingLeft: 20}}>&lt;/objective&gt;</code>
        <br/>
        </>
    )
}

Objective.propTypes = {
    row: PropTypes.array.isRequired
}