import React from 'react'
import { Button, AngleLeftIcon } from 'react-magma-dom'

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