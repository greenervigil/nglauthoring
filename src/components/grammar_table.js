import React from 'react'
import { Table } from 'semantic-ui-react'
import GrammarModal from './grammar_modal'
import GrammarRow from './grammar_row'
import GrammarTableHeader from './grammar_table_header'

const GrammarTable = (props) => (
    <>
        <Table celled fixed definition>
            <Table.Header fullWidth>   
            {props.data
                .filter((row, index) => index===0)
                .map((row, index) => (
                    <GrammarTableHeader headerRow={row} key={index} />
                )
            )}
            </Table.Header>
            <Table.Body>
                {props.data
                    .filter((row, index) => index !== 0)
                    .map((row, index) => (
                        <GrammarRow row={row} key={index} engine={props.engine}/>
                    )
                )}
            </Table.Body>
        </Table>
        <GrammarModal />
    </>
);

export default GrammarTable;

