import React from 'react'
import { Table } from 'semantic-ui-react'

export default function GrammarTableHeader({ headerRow }) {
    return (
        <Table.Row>
            {headerRow
            .map((item, index) => (
                <Table.HeaderCell key={index}>{item}</Table.HeaderCell>
            )
            )}
        </Table.Row>
    )
}

