import React from 'react'
import { Button } from 'react-magma-dom'

export default function SRIData({ data }) {
    console.log(data)
    return (
        <>
            <strong><p>Copy & Paste the text below and add to your books info.xml file.</p></strong>
            <Button color="marketing">Copy</Button>
        </>
    )
}