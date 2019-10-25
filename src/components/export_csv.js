import React from 'react'
import { CSVLink } from 'react-csv'
import PropTypes from 'prop-types'

export default function CSVExport({ data }) {
    return (
        <CSVLink data={data} filename={"grammar.csv"} target="_blank">Download to CSV
            {/*<Button color="marketing">Download to CSV</Button>*/}
        </CSVLink>
    )
}

CSVExport.propTypes = {
    data: PropTypes.array.isRequired, 
}