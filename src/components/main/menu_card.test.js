import React from 'react'
import MenuCard from './menu_card'
import { cleanup, render } from '@testing-library/react'

afterEach(cleanup)

const name = 'Test Card'
const description = 'unit testing menu card component'

describe('Menu Card component', () => {
    it('MenuCard component renders', () => {
        const menuCard = render(<MenuCard name={name} description={description} />)

        expect(menuCard).toBeDefined
    })
})