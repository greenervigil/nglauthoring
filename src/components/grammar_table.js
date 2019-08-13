import React from 'react';
import { Table } from 'semantic-ui-react';
import GrammarModal from './grammar_modal';

const GrammarTable = () => (
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

            </Table.Body>
            {/*<Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell colSpan='7'>
                        <Button floated='right' primary>Add Line</Button>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>*/}
        </Table>
    </div>
    <GrammarModal />
    </>
);

export default GrammarTable;

