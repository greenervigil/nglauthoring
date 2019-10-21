import React from 'react'
import Objective from './objective'
import propTypes from 'prop-types'

export default function ObjectiveMap({ data }) {
    return (
        <pre>
            <code>&lt;objectives&gt;</code>
            <br/>
                {data.filter((row, index) => index !== 0)
                    .map((row, index) => {
                        return (
                            <Objective key={index} row={row} />   
                        )
                    })}
            <code>&lt;/objectives&gt;</code>
        </pre>
    )
}

ObjectiveMap.propTypes = {
    data: propTypes.array.isRequired
}