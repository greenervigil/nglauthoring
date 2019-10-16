import React from 'react';
import ReactDOM from 'react-dom'
import Header from './header';
import Footer from './footer';
import GrammarTable from './grammar_table';
import CSVReader from 'react-csv-reader';
import GrammarCreate from './grammar_create'

export default function Grammar({ name }) {
    function readFile(data) {
        const engine = document.getElementById("engine")//.getElementsByClassName("active")[0].innerText

        const tableElement = document.getElementById('grammarTable')
        ReactDOM.render(
            <div className="container">
                <GrammarTable data={data} engine={engine.options[engine.selectedIndex].text}/>
                <GrammarCreate data={data} engine={engine}/>
            </div>, 
        tableElement)
    }
    return (
        <>
        <Header />
        <div className="main">
            <h2>{name}</h2>
            <p>Upload CSV grammar file to evaluate grammar correctness.</p>
            <p><strong>All numbers need to be spelled out in the answer text to guarantee correct grammar is used.</strong></p>
            <div className="alert alert-warning alert-dismissible" id="alert" role="alert" hidden>
                <button type="button" className="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span className="sr-only">Close</span></button>
                <strong>Completed with Errors!</strong> Review table for errors.
            </div>
            <form>
                <div className="form-group">
                    <label className="sr-only" htmlFor="engine">Select Engine Type</label>
                    <select className="form-control" id="engine">
                        <option value="Multiple Choice">Multiple Choice</option>
                        <option value="Listening and Speaking">Listening and Speaking</option>
                    </select>
                    <CSVReader cssInputClass="" label="Select CSV with Grammar Resources" onFileLoaded={readFile} />
                </div>
            </form>
            <div id="grammarTable"></div>
        </div>
        <Footer />
        </>
    )
}