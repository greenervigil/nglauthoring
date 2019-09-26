import React from 'react'
import { Table } from 'semantic-ui-react'

const GrammarTableHeader = (props) => (
    <Table.Row>
        {props.headerRow
        .map((item, index) => (
            <Table.HeaderCell key={index}>{item}</Table.HeaderCell>
        )
        )}
    </Table.Row>
)

export default GrammarTableHeader