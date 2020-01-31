import React from 'react';
import { Modal, Button, Header } from 'semantic-ui-react';
import GrammarForm from './grammar_form';
/*<Modal trigger={<Button hidden disabled floated='right'>Add Line</Button>} centered={false} ></Modal>*/
const GrammarModal = () => (
    <Modal>
        <Modal.Header>Grammar Entry</Modal.Header>
        <Modal.Content>
            <Modal.Description>
                <Header>Enter in the grammar information.</Header>
                {/*eslint-disable-next-line react/no-unescaped-entities*/}
                <p>All numbers need to be spelled out in the answer text and illegal characters consisting of ".", ",", "?", "!", "-", "--", ";", "&#60;p&#62;", "&#60;/p&#62;", "’" and will be removed when the grammar file is created.</p>
            </Modal.Description>
            <GrammarForm />
        </Modal.Content>
        <Modal.Actions>
            <Button floated='right' content="Finished"/>
        </Modal.Actions>
</Modal>
);

export default GrammarModal;
