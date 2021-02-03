import React from 'react'
import { Table, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'

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
            <Table.Row>
                <Table.Cell >{row[0]}</Table.Cell>
                <Table.Cell>{row[1]}</Table.Cell>
                {checkGrammar(row[2]) ? (
                    <Table.Cell negative><Icon name='attention' />{row[2]}</Table.Cell>
                    ) : (
                    <Table.Cell positive>{row[2]}</Table.Cell>
                    )
                }
                <Table.Cell>{'.' + row[0].substring(0, row[0].length -4) + row[1]}</Table.Cell>
            </Table.Row>
        )
    } else {
        return (
            <Table.Row>
                <Table.Cell >{row[0]}</Table.Cell>
                <Table.Cell singleLine collapsing>{row[1]}</Table.Cell>
                <Table.Cell singleLine>{row[2]}</Table.Cell>
                <Table.Cell>{'.' + row[0].substring(0, row[0].length -4) + row[1]}</Table.Cell>
                {checkGrammar(row[4]) ? (
                    <Table.Cell negative><Icon name='attention' />{row[4]}</Table.Cell>
                ) :(
                    <Table.Cell positive>{row[4]}</Table.Cell>
                )}
                {checkGrammar(row[5]) ? (
                    <Table.Cell negative><Icon name='attention' />{row[5]}</Table.Cell>
                ) : (
                    <Table.Cell positive>{row[5]}</Table.Cell>
                )}
                {checkGrammar(row[6]) ? (
                    <Table.Cell negative>{row[6]}</Table.Cell>
                ) : (
                    <Table.Cell positive>{row[6]}</Table.Cell>
                )}
            </Table.Row>
        )
    }
}

GrammarRow.propTypes = {
    engine: PropTypes.string.isRequired,
    row: PropTypes.array.isRequired
}