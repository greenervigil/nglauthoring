import React from 'react'
import GrammarForm from './grammar_form'
import { cleanup, render } from '@testing-library/react'

afterEach(cleanup)

const handleInputChange = () => {}
const handleChange = () => {}
const fileReadFunction = () => {}

describe('Grammar Form Component', () => {
    test('Grammar Form Component renders', () => {
        const grammarForm = render(<GrammarForm handleChange={handleChange} handleInputChange={handleInputChange} fileReadFunction={fileReadFunction} />)

        expect(grammarForm).toBeDefined
        expect(grammarForm).toHaveFormValues
    })
})