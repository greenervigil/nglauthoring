import React from 'react'
import {Button, Download2Icon } from 'react-magma-dom'
import PropTypes from 'prop-types'

export default function CommitBox({ data, bookAbbr }) {
  function handleClick() {
    const fileData = JSON.stringify(data);
    const blob = new Blob([fileData], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = bookAbbr+ "_Resources.json";
    link.href = url;
    link.click();
  }
  return (
    <div className="container">
      <form onSubmit={handleClick}>
        <div className="form-group">
          <Button type="submit" color="marketing" icon={<Download2Icon />}>
            Save to file
          </Button>
        </div>
      </form>
    </div>
  )
}

CommitBox.propTypes = {
  bookAbbr: PropTypes.string.isRequired, 
  data: PropTypes.object.isRequired
}