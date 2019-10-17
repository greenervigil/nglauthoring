import React from 'react';
import {Button, Download2Icon } from 'react-magma-dom'

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
    <form>
      <div className="form-group">
        <Button color="marketing" icon={<Download2Icon />} onClick={handleClick}>
          Save To File
        </Button>
      </div>
    </form>
  )
}