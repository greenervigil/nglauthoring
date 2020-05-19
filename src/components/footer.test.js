import React from 'react';
import Footer from './footer';
import { cleanup, render } from '@testing-library/react';

afterEach(cleanup)

it('renders the footer with an image', () => {
    const foot = render(
        <Footer />
    )
    expect(foot).toBeDefined()
    expect(foot.findByAltText('myelt logo')).toBeDefined()
})

it('renders the footer with a proper year', () => {
    const foot = render(
        <Footer />
    )
    const year = new Date().getUTCFullYear()
    expect(foot.getByTestId('copy').textContent).toContain(`${year} Cengage Learning`)
})