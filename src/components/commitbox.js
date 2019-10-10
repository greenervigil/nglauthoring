import React from 'react';
import {Button, Form, Image} from 'semantic-ui-react'

export default function CommitBox({ data }) {
  function handleClick(event) {
    const fileData = JSON.stringify(data);
    const blob = new Blob([fileData], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = document.getElementById('bookAbbr').value + "_Resources.json";
    link.href = url;
    link.click();
  }
  return (
    <Form>
      <Form.Group>
        <Button primary onClick={handleClick}>
          <Image name='download' />
          Save To File
        </Button>
      </Form.Group>
    </Form>
  )
}