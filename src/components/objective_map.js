import React from 'react'
import Objective from './objective'

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
            <br/>
            <code>&lt;/objectives&gt;</code>
        </pre>
    )
}