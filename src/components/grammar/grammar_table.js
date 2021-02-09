import React from 'react'
import { 
    Table, 
    TableHead, 
    TableHeaderCell, 
    TableBody, 
    TableRow } from 'react-magma-dom'
import GrammarRow from './grammar_row'
import PropTypes from 'prop-types'

export default function GrammarTable({ data, engine }) {
    return (
        <>
            <p>Review the table and make any corrections to errors.</p>
            <Table hasVerticalBorders hasZebraStripes>
                <TableHead>   
                {data.filter((row, index) => index===0)
                    .map((row, index) => (
                        <TableRow key={index}>
                            {row.map((item, index) => (<TableHeaderCell key={index}>{item}</TableHeaderCell>)
                            )}
                        </TableRow>
                    )
                )}
                </TableHead>
                <TableBody>
                    {data.filter((row, index) => index !== 0)
                        .map((row, index) => (
                            <GrammarRow row={row} key={index} engine={engine}/>
                        )
                    )
                    }
                </TableBody>
            </Table>
        </>
    )
}

GrammarTable.propTypes = {
    data: PropTypes.array.isRequired,
    engine: PropTypes.string.isRequired,
}

