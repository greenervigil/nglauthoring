import React from 'react';
import Header from '../header/header'
import CommitBox from '../commit/commitbox';
//import ImportFile from '../importfile/importfile';
import Footer from '../footer/footer';
import {Form, TextArea, Input} from 'semantic-ui-react'
import CSVReader from 'react-csv-reader'
//import {Button} from 'semantic-ui-react'

const JsonReturn = (props) => {
    return <div className="jsonbody">
            <Form>
              <TextArea placeholder="JSON appears here..." >{props.dat}</TextArea>
            </Form>
          </div>;
  }

const handleForce = data => {
  console.log(data);
}

const IntegratedResources = (props) => {
    return (
        <>
          <Header name={props.name}/>
          <div className="container">
            <Input focus placeholder="Book Abbr"/>
            <CSVReader cssClass="react-csv-input" label="Select CSV with Resources" onFileLoaded={handleForce} />
            <JsonReturn />
            <CommitBox />
          </div>
          <Footer />
        </>
      );
}

export default IntegratedResources;