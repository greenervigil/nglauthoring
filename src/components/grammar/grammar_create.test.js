import React from 'react'
import GrammarCreate from "./grammar_create"

test('component is rendered', () => {
    const render = <GrammarCreate data={[]} engine="Multiple Choice" productName="World English" productId="WE3E" start={1} />

    expect(render).not.toBeNull()
})