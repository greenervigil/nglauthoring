import React from 'react'
import { Table } from 'semantic-ui-react'
import GrammarModal from './grammar_modal'
import GrammarRow from './grammar_row'

const GrammarTable = (props) => (
    <>
    <div className="container">
        <Table celled compact definition>
            <Table.Header fullWidth>
                <Table.Row>
                    <Table.HeaderCell>Filename</Table.HeaderCell>
                    <Table.HeaderCell>Page Index</Table.HeaderCell>
                    <Table.HeaderCell>Answer 1</Table.HeaderCell>
                    <Table.HeaderCell>Answer 2</Table.HeaderCell>
                    <Table.HeaderCell>Answer 3</Table.HeaderCell>
                    <Table.HeaderCell>Answer 4</Table.HeaderCell>
                    <Table.HeaderCell>Grammar ID</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {props.data
                    .filter((row, index) => index !== 0)
                    .map((row, index) => (
                        <GrammarRow row={row} key={index}/>
                    )
                )}
            </Table.Body>
        </Table>
    </div>
    <GrammarModal />
    </>
);

export default GrammarTable;

