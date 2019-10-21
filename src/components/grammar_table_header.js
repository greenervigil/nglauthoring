import React from 'react'
import { Table } from 'semantic-ui-react'
import PropTypes from 'prop-types'

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

GrammarTableHeader.propTypes = {
    headerRow: PropTypes.array.isRequired
}