import React from 'react'
import { Table } from 'semantic-ui-react'
import GrammarModal from './grammar_modal'
import GrammarRow from './grammar_row'
import GrammarTableHeader from './grammar_table_header'

export default function GrammarTable({ data, engine }) {
    return (
        <>
        <Table celled fixed definition>
            <Table.Header fullWidth>   
            {data.filter((row, index) => index===0)
                .map((row, index) => (
                    <GrammarTableHeader headerRow={row} key={index} />
                )
            )}
            </Table.Header>
            <Table.Body>
                {data.filter((row, index) => index !== 0)
                    .map((row, index) => (
                        <GrammarRow row={row} key={index} engine={engine}/>
                    )
                )}
            </Table.Body>
        </Table>
        <GrammarModal />
        </>
    )
}

