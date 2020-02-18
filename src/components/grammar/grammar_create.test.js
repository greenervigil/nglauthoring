import React from 'react'
import GrammarCreate from "./grammar_create"
import { render } from '@testing-library/react'

const lsData = [['fileName','index','questionText','grammarID',],['WE3eL2_01_02_03.xml', '0','I usually like a tomato with breakfast','']]

describe('Testing Grammar Create Component', () => {
    it('Should render component', () => {
        const component = <GrammarCreate data={lsData} engine="Multiple Choice" productName="World English" productId="WE3E" start={1} />

        expect(component).toHaveFormValues
    })
    it('Should have a compile grammar button', () => {
        const { getByText } = render(<GrammarCreate data={lsData} engine="Listening and Speaking" productName="World English" productId="WE3E" start={1} />)

        expect(getByText('Compile Grammar File')).toBeTruthy()
    })
    it('Should have a compile json button', () => {
        const { getByText } = render(<GrammarCreate data={lsData} engine="Listening and Speaking" productName="World English" productId="WE3E" start={1} />)

        expect(getByText('Compile JSON')).toBeTruthy()
    })
})
