import React from 'react'
import { Table, Icon } from 'semantic-ui-react'

const checkGrammar = (phrase) => {
    if(!/\d/.test(phrase) && !/<[a-s][\s\S]*>/i.test(phrase) && !/[;&#]/i.test(phrase)) {
        document.getElementById('alert').removeAttribute('hidden')
        return false
    } else {
        return true
    }
}

const GrammarRow = (props) => {
    if(props.engine === 'Listening and Speaking'){
        return (
            <Table.Row>
                <Table.Cell >{props.row[0]}</Table.Cell>
                <Table.Cell>{props.row[1]}</Table.Cell>
                {checkGrammar(props.row[2]) ? (
                    <Table.Cell negative><Icon name='attention' />{props.row[2]}</Table.Cell>
                    ) : (
                    <Table.Cell positive>{props.row[2]}</Table.Cell>
                    )
                }
                <Table.Cell>{'.' + props.row[0].substring(0, props.row[0].length -4) + props.row[1]}</Table.Cell>
            </Table.Row>
        )
    } else {
        return (
            <Table.Row>
                <Table.Cell >{props.row[0]}</Table.Cell>
                <Table.Cell singleLine collapsing>{props.row[1]}</Table.Cell>
                <Table.Cell singleLine>{props.row[2]}</Table.Cell>
                <Table.Cell>{'.' + props.row[0].substring(0, props.row[0].length -4) + props.row[1]}</Table.Cell>
                {checkGrammar(props.row[4]) ? (
                    <Table.Cell negative><Icon name='attention' />{props.row[4]}</Table.Cell>
                ) :(
                    <Table.Cell positive>{props.row[4]}</Table.Cell>
                )}
                {checkGrammar(props.row[5]) ? (
                    <Table.Cell negative><Icon name='attention' />{props.row[5]}</Table.Cell>
                ) : (
                    <Table.Cell positive>{props.row[5]}</Table.Cell>
                )}
                {checkGrammar(props.row[6]) ? (
                    <Table.Cell negative>{props.row[6]}</Table.Cell>
                ) : (
                    <Table.Cell positive>{props.row[6]}</Table.Cell>
                )}
            </Table.Row>
        )
    }
}

export default GrammarRow