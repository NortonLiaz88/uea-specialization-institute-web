import React, { ReactElement, useState } from 'react'
import logo from './logo.svg'
import viteLogo from './vite.svg'
import tailwindLogo from './tailwind.svg'
import Example from './components/navbar'

function App(): ReactElement {
  return (
    <div className="flex-auto flex-column">
      <Example />
    </div>
  )
}

export default App
