import React from 'react';
import {Button} from 'semantic-ui-react'

export default function ImportFile() {
    let fileReader
  
    const handleFileRead = (e) => {
      console.log(e.target.result)
      //return fileReader.result;
    };
  
    const handlefile = (file) => {
      fileReader = new FileReader()
      fileReader.onloadend = handleFileRead
      fileReader.readAsBinaryString(file)
    };
  
    return (
      <div className='fileCompile'>
        <input type='file' className='inputFile' accept='.csv' onChange={e => handlefile(e.target.files[0])}></input>
        <Button primary type="submit">Compile</Button>
      </div>
      )
  }