import React from 'react'
import { Alert } from 'react-magma-dom'
import GrammarForm from '../components/grammar/grammar_form'

export default function Grammar() {
    return (
        <>
        <div className="container">
            <h2>SRI Grammar</h2>
            <p>Upload CSV grammar file to evaluate grammar correctness, create SRI grammar files, and test bench configuration files.  <strong>All numbers need to be spelled out in the answer text to guarantee correct grammar is used.</strong></p>
            <div id="alert_error" role="alert" hidden>
                <Alert dismissable="true" closeLabel="Close" variant="danger" onDismiss={() => document.getElementById('alert_error').setAttribute('hidden', true)}>Compile completed with errors.  Review the table and correct any errors.</Alert>
            </div>
            <div id="alert_success" role="alert" hidden>
                <Alert dismissable="true" closeLabel="Close" variant="success" onDismiss={() => {document.getElementById('alert_success').setAttribute('hidden', true)}}>Success!</Alert>
            </div>
            <div className="container">
                <GrammarForm />
            </div>
            <div id="grammarTable"></div>
        </div>
        &nbsp;
        </>
    )
}
