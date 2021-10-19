import React, { useState } from 'react';
import CSVReader from 'react-csv-reader'

export default function IntegratedResourcesForm () {
    const [bookAbbr, setBookAbbr] = useState('')
    function handleChange() {
        setBookAbbr(book => book + document.getElementById('bookAbbr').value)
    }
    function handleFileLoad(data) {
        parseToJson(bookAbbr, data)
    }
    return (
        <form>
            <div className="form-group">
            <label htmlFor="bookAbbr">Book Abbreviation</label>
            <input type="text" className="form-control" id="bookAbbr" placeholder="Book Abbreviation" onChange={handleChange}/>
            </div>
            <CSVReader cssInputClass="" label="Select CSV with Resources" onFileLoaded={handleFileLoad} />
      </form>
    )
}