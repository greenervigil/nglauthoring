import React from 'react'
import CSVExport from './export_csv'
import { cleanup, render } from '@testing-library/react'

afterEach(cleanup)

const data = [['1','eee']]

describe('Export CSV Component', () => {
    it('CSV Export component is rendered', () => {
        const csv = render(<CSVExport data={data} />)

        expect(csv).toBeDefined
    })
})