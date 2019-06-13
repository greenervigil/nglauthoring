import React from 'react';
import {Button, Form, Select, Image} from 'semantic-ui-react'

const getOptions = [{
    key:"TFCC_A",
    text: "TFCC_A"
}]

const CommitBox = () => {
    return <div className="commit">
              <Form>
                <Form.Group>
                  <Select placeholder='Select your book' options={getOptions}></Select>
                  <Button primary content='Commit to SVN'/> 
                  <Button primary >
                    <Image name='download' />
                    Save To File
                  </Button>
                </Form.Group>
              </Form>
        </div>;
}

export default CommitBox;