import React from 'react'
import ReturnHome from './return_home'
import { cleanup, render } from '@testing-library/react'

afterEach(cleanup)

it('renders the return home', () => {
    const home = render(<ReturnHome />)

    expect(home).toBeDefined
})