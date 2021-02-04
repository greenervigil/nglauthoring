import React from 'react'
import { TableRow, TableHeaderCell } from 'react-magma-dom'
import PropTypes from 'prop-types'

export default function GrammarTableHeader({ headerRow }) {
    return (
        <TableRow>
            {headerRow
            .map((item, index) => (
                <TableHeaderCell key={index}>{item}</TableHeaderCell>
            )
            )}
        </TableRow>
    )
}

GrammarTableHeader.propTypes = {
    headerRow: PropTypes.array.isRequired
}