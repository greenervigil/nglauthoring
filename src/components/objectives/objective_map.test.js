import React from 'react'
import ObjectiveMap from './objective_map'
import { cleanup, render } from '@testing-library/react'

afterEach(cleanup)

const data = [['id', 'name'], ['TestOBJ', 'Test Objective']]

describe('Objective Map Component', () => {
    it('Objective map component renders', () => {
        const objMap = render(<ObjectiveMap data={data} />)

        expect(objMap).toBeDefined
    }
    )
})