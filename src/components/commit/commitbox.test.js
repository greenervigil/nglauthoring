import React from 'react'
import CommitBox from './commitbox'
import { cleanup, render } from '@testing-library/react'

afterEach(cleanup)

const bookAbbr = 'MWLO'
    const data = {}

test('CommitBox component is rendered', () => {
    const commit = render(<CommitBox bookAbbr={bookAbbr} data={data} />)

    expect(commit).toBeDefined()
})

test('CommitBox component has form values', () => {
    const commit = render(<CommitBox bookAbbr={bookAbbr} data={data} />)

    expect(commit).toHaveFormValues
})

test('CommitBox has save button', () => {
    const commit = render(<CommitBox bookAbbr={bookAbbr} data={data} />)
    
    expect(commit.getByTestId('save_button')).toBeInTheDocument
})