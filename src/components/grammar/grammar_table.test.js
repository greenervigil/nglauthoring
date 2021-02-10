import React from 'react'
import GrammarTable from './grammar_table'
import { cleanup, render } from '@testing-library/react'

afterEach(cleanup)

const LSengine  = 'Listening and Speaking'
const MCengine = 'Multiple Choice'
const data = [['',''],['WE3e_4.xml','0']]

describe('Grammar Table Component', () => {
    it('Grammar Table renders for Listening and Speaking', () => {
        const table = render(<GrammarTable data={data} engine={LSengine} />)

        expect(table).toBeDefined
    })

    it('Grammar Table renders for Multiple Choice ', () => {
        const table = render(<GrammarTable data={data} engine={MCengine} />)

        expect(table).toBeDefined
    })
})