import React from 'react';
import {Button, Form, Image} from 'semantic-ui-react'

/*const getOptions = [{
    key:"TFCC_A",
    text: "TFCC_A"
}]*/

const CommitBox = (props) => {
    const handleClick = (e) => {
      const fileData = JSON.stringify(props.data);
      const blob = new Blob([fileData], {type: "text/plain"});
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = document.getElementById('bookAbbr').value + "_Resources.json";
      link.href = url;
      link.click();
    }
    return <div className="commit">
              <Form>
                <Form.Group>
                  {/* hiding option for later release
                  <Select placeholder='Select your book' options={getOptions}></Select>
                  <Button primary content='Commit to SVN'/> */}
                  <Button primary onClick={handleClick}>
                    <Image name='download' />
                    Save To File
                  </Button>
                </Form.Group>
              </Form>
        </div>;
}

export default CommitBox;