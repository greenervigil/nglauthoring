import React from 'react';
import { Form } from 'semantic-ui-react';

const GrammarForm = () => (
    <Form>
        <Form.Group widths='equal'>
            <Form.Input fluid label='Filename' placeholder='File Name' />
            <Form.Input fluid label='Page Index' placeholder='Page Index' />
        </Form.Group>
        <Form.TextArea label='Answer 1' />
        <Form.TextArea label='Answer 2' />
        <Form.TextArea label='Answer 3' />
        <Form.TextArea label='Answer 4' />
    </Form>
);

export default GrammarForm;