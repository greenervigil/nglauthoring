import React from 'react'
import Objective from './objective'
import { cleanup, render } from '@testing-library/react'

afterEach(cleanup)

it('verifies the row prop is required', () => {
    const objectiveRow = ['Speaking', 'SPK1']

    const obj = render(<Objective row={objectiveRow}/>)
    
    expect(obj.row).toBeRequired
})

