import React from 'react'
import { Table, Icon } from 'semantic-ui-react'

const checkGrammar = (phrase) => {
    if(!/\d/.test(phrase) && !/<[a-s][\s\S]*>/i.test(phrase)) {
        document.getElementById('alert').removeAttribute('hidden')
        return false
    } else {
        return true
    }
}

const GrammarRow = (props) => (
    <Table.Row>
        <Table.Cell >{props.row[0]}</Table.Cell>
        <Table.Cell>{props.row[1]}</Table.Cell>
        {checkGrammar(props.row[3]) ? (
            <Table.Cell error><Icon name='attention' />{props.row[3]}</Table.Cell>
        ) : (
            <Table.Cell>{props.row[3]}</Table.Cell>
        )}
        {checkGrammar(props.row[4]) ? (
            <Table.Cell error><Icon name='attention' />{props.row[4]}</Table.Cell>
        ) :(
            <Table.Cell >{props.row[4]}</Table.Cell>
        )}
        {checkGrammar(props.row[5]) ? (
            <Table.Cell error><Icon name='attention' />{props.row[5]}</Table.Cell>
        ) : (
            <Table.Cell>{props.row[5]}</Table.Cell>
        )}
        {checkGrammar(props.row[6]) ? (
            <Table.Cell error>{props.row[6]}</Table.Cell>
        ) : (
            <Table.Cell>{props.row[6]}</Table.Cell>
        )}
        <Table.Cell>{props.row[0].substring(0, props.row[0].length -4) + props.row[1]}</Table.Cell>
    </Table.Row>
)

export default GrammarRow