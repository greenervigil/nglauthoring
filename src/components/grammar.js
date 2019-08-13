import React from 'react';
import Header from './header';
import Footer from './footer';
import CommitBox from './commitbox';
import XLSX from 'xlsx';
import GrammarTable from './grammar_table';

const Grammar = (props) => {
    
    const handleFiles = (e) => {
        const files = e.target.files, f = files[0];
        //const workbook = XLSX.readFile(f.name);
        console.log(f);
        const reader = new FileReader();
        reader.onLoad = (e) => {
            //const data = new Uint8Array(e.target.result);
            //const workbook = XLSX.read(data, {type: 'array'});
            //const workbook = XLSX.readFile(f);
            //console.log(workbook);
        };
        reader.readAsArrayBuffer(f);
    }
    return (
        <>
            <Header />
            <div className="main">
                <h2>{props.name}</h2>
                <div className="container">
                    {/*<form>
                        <div className="form-group">
                            <CSVReader cssInputClass="" label="Select CSV with Resources" onFileLoaded={readGrammarFile} />
                        </div>
                        <label>Select a File</label>
                        <input type="file" id="input" accept=".xlsx, .xls" onChange={handleFiles}></input>
                    </form>
                    <button className="btn btn-primary">
                        Create
                    </button>*/}
                    <GrammarTable />
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