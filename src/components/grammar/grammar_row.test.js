import React from 'react'
import GrammarRow from './grammar_row'
import { cleanup, render } from '@testing-library/react'

afterEach(cleanup)

const LSengine  = 'Listening and Speaking'
const MCengine = 'Multiple Choice'
const row = ['WE3e_4.xml','0']

describe('Grammar Row Component', () => {
    it('GrammarRow component renders for Listening and speaking', () => {
        const grammarRow = render(<table><tbody><GrammarRow engine={LSengine} row={row}/></tbody></table>)

        expect(grammarRow).toBeDefined
    })
  
    it('GrammarRow component renders for Multiple Choice', () => {
        const grammarRow = render(<table><tbody><GrammarRow engine={MCengine} row={row}/></tbody></table>)

        expect(grammarRow).toBeDefined
    })
})