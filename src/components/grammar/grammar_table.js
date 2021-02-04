import React from 'react'
import { Table, TableHead, TableBody } from 'react-magma-dom'
import GrammarRow from './grammar_row'
import GrammarTableHeader from './grammar_table_header'
import PropTypes from 'prop-types'

export default function GrammarTable({ data, engine }) {
    return (
        <>
            <p>Review the table and make any corrections to errors.</p>
            <Table hasVerticalBorders hasZebraStripes>
                <TableHead>   
                {data.filter((row, index) => index===0)
                    .map((row, index) => (
                        <GrammarTableHeader headerRow={row} key={index} />
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

