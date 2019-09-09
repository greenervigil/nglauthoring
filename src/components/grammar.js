import React from 'react';
import ReactDOM from 'react-dom'
import Header from './header';
import Footer from './footer';
import CommitBox from './commitbox';
import GrammarTable from './grammar_table';
import CSVReader from 'react-csv-reader';

/*
    ["filename", "pageindex", "questionText", "answers", "", "", "", "grammarID"]
*/
const Grammar = (props) => {
    const readFile = (d) => {
        const tableElement = document.getElementById('grammarTable')
        ReactDOM.render(<GrammarTable data={d}/>, tableElement)
    }
    return (
        <>
        <Header />
        <div className="main">
            <h2>{props.name}</h2>
            <p>The CSV file should be formatted with the following headers: "filename", "pageindex", "questionText", "answer", "answer", "answer", "answer".  The questionText column will not be evaluated for grammar correctness.</p>
            <div className="container">
                <form>
                    <div className="form-group">
                        <CSVReader cssInputClass="" label="Select CSV with Grammar Resources" onFileLoaded={readFile} />
                    </div>
                </form>
            </div>
            <div className="container" id="grammarTable"></div>
            <div className="container">
                <CommitBox />
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Grammar;