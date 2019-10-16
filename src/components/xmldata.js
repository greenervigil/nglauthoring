import React from 'react'
import { Button } from 'semantic-ui-react'

export default function XMLData({ data }) {
    return (
        <>
            <strong><p>Copy & Paste the text below and add to your books info.xml file.</p></strong>
            <Button>Copy</Button>
        </>
    )
}