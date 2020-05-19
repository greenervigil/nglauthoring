import React from 'react';
import Header from './header';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup)

it('renders header', () => {
    const head = render(
        <Header />
    )

    expect(head).toBeDefined()
})

it('renders header with the logo', () => {
    const {getByAltText} = render(<Header/>)

    expect(getByAltText('myelt logo')).toBeDefined()
})