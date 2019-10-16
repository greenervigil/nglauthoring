import React from 'react'

export default function Objective({ row }) {
    return (
        <>
        <code>&lt;objective&gt;</code>
            <br/>
            <code>&lt;id&gt;{row[0]}&lt;/id&gt;</code>
            <br/>
            <code>&lt;name&gt;{row[1]}&lt;/name&gt;</code>
            <br />
        <code>&lt;/objective&gt;</code>
        </>
    )
}