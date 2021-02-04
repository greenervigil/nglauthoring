import React, { useState } from 'react'
import CommitBox from '../components/commit/commitbox'
import CSVReader from 'react-csv-reader'
import { Alert, Input } from 'react-magma-dom'
import {parseToJson } from '../utils/integrated-resources-utils'

export default function IntegratedResources() {
  const [bookAbbr, setBookAbbr] = useState('')
  const [json, setJson] = useState({})

  function handleChange(event) {
    setBookAbbr(event.target.value)
  }
  function handleFileLoad(data) {
    setJson(parseToJson(bookAbbr, data))
  }

  return (
    <>
      <div className="container">
      <h2>Integrated Resources</h2>
        <form className="form-group">
          <Input
            id='bookAbbr'
            labelText='Book Abbreviation'
            placeholder='Book Abbreviation'
            helperMessage='Enter the book Abbreviation for an OWB book or base book for Super Product'
            inputSize='small'
            onChange={handleChange}
          />
          <CSVReader cssInputClass="" label="Select CSV with Resources" onFileLoaded={handleFileLoad} />
        </form>
      </div>
      <div className="alert-success" id="alert" role="alert" hidden>
        <Alert dismissable="true" variant="success" onDismiss={() => {document.getElementById('alert').setAttribute('hidden', true)}}>JSON creation complete.</Alert>
      </div>
      <CommitBox data={json} bookAbbr={bookAbbr}/>
    </>
  )
}
