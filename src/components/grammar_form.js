import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const insertData = (e) => {
    console.log(e.target)
}

const GrammarForm = () => (
    <Form onSubmit={insertData}>
        <Form.Group widths='equal'>
            <Form.Input fluid label='Filename' placeholder='File Name' />
            <Form.Input fluid label='Page Index' placeholder='Page Index' />
        </Form.Group>
        <Form.TextArea label='Answer 1' />
        <Form.TextArea label='Answer 2' />
        <Form.TextArea label='Answer 3' />
        <Form.TextArea label='Answer 4' />
        <Button primary >Insert</Button>
    </Form>
);

export default GrammarForm;