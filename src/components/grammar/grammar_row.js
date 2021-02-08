import React from 'react'
import { TableRow, TableCell } from 'react-magma-dom'
import PropTypes from 'prop-types'
import { WarningIcon } from 'react-magma-icons'

export default function GrammarRow({ engine, row }) {
    function checkGrammar(phrase) {
        if(!/\d/.test(phrase) && !/<[a-s][\s\S]*>/i.test(phrase) && !/[;&#]/i.test(phrase)) {
            return false
        } else {
            return true
        }
    }

    if(engine === 'Listening and Speaking'){
        return (
            <TableRow>
                <TableCell >{row[0]}</TableCell>
                <TableCell>{row[1]}</TableCell>
                {checkGrammar(row[2]) ? (
                    <TableCell negative><WarningIcon color='red' size={15} />{row[2]}</TableCell>
                    ) : (
                    <TableCell positive>{row[2]}</TableCell>
                    )
                }
                <TableCell>{'.' + row[0].substring(0, row[0].length -4) + row[1]}</TableCell>
            </TableRow>
        )
    } else {
        return (
            <TableRow>
                <TableCell >{row[0]}</TableCell>
                <TableCell singleLine collapsing>{row[1]}</TableCell>
                <TableCell singleLine>{row[2]}</TableCell>
                <TableCell>{'.' + row[0].substring(0, row[0].length -4) + row[1]}</TableCell>
                {checkGrammar(row[4]) ? (
                    <TableCell negative><WarningIcon color='red' size={15} />{row[4]}</TableCell>
                ) :(
                    <TableCell positive>{row[4]}</TableCell>
                )}
                {checkGrammar(row[5]) ? (
                    <TableCell negative><WarningIcon color='red' size={15} />{row[5]}</TableCell>
                ) : (
                    <TableCell positive>{row[5]}</TableCell>
                )}
                {checkGrammar(row[6]) ? (
                    <TableCell negative>{row[6]}</TableCell>
                ) : (
                    <TableCell positive>{row[6]}</TableCell>
                )}
            </TableRow>
        )
    }
}

GrammarRow.propTypes = {
    engine: PropTypes.string.isRequired,
    row: PropTypes.array.isRequired
}