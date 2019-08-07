import React from 'react';
import Header from './header';
import Footer from './footer';
import CSVReader from 'react-csv-reader';
import CommitBox from './commitbox';

const Grammar = (props) => {

    const readGrammarFile = (data) => {

    }
    return (
        <>
            <Header />
            <div className="main">
                <h2>{props.name}</h2>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <CSVReader cssInputClass="" label="Select CSV with Resources" onFileLoaded={readGrammarFile} />
                        </div>
                    </form>
                </div>
                <div className="container">
                    <CommitBox />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Grammar;