import React from 'react'
import { Button } from 'react-magma-dom'
import { AngleLeftIcon } from 'react-magma-icons'

export default function ReturnHome() {
    return (
        <a href="/">
        <Button 
          color="secondary" 
          aria-label="Icon" 
          variant="link"
          icon={<AngleLeftIcon 
            id="noColor" 
            title="No Color" 
          />}>Home</Button>
      </a>
    )
}