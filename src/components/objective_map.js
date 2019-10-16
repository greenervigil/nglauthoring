import React from 'react'
import Objective from './objective'

export default function ObjectiveMap({ data }) {
    return (
        <pre>
            <code>
                <span>
                    {"<"}
                    <span>objectives</span>
                    {">"}
                </span>
                <br/>

                {data.filter((row, index) => index !== 0)
                    .map((row, index) => {
                        return (
                            <Objective key={index} row={row} />
                        )
                    })}
                <span>
                    {"</"}
                    <span>objectives</span>
                    {">"}
                </span>
            </code>
        </pre>
    )
}