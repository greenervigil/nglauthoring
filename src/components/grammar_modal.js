import React from 'react';
import { Modal, Button, Icon, Header } from 'semantic-ui-react';
import GrammarForm from './grammar_form';

const GrammarModal = () => (
    <Modal trigger={<Button floated='right'>Add Line</Button>} centered={false}>
        <Modal.Header>Grammar Entry</Modal.Header>
        <Modal.Content>
            <Modal.Description>
                <Header>Enter in the grammar information.</Header>
            </Modal.Description>
            <GrammarForm />
        </Modal.Content>
        <Modal.Actions>
            <Button primary>
                Insert <Icon name='right chevron' />
            </Button>
        </Modal.Actions>
    </Modal>
);

export default GrammarModal;
