import React from 'react'
import Objective from './objective'
import { cleanup, render } from '@testing-library/react'

afterEach(cleanup)

it('verifies the row prop is required', () => {
    const objectiveRow = ['Speaking', 'SPK1']

    const object = render(<Objective objectiveId={objectiveRow[0]} objectiveName={objectiveRow[1]}/>)

    expect(object.getByText(/Speaking/)).toBeInTheDocument
    expect(object.getByText(/SPK1/)).toBeInTheDocument
})

