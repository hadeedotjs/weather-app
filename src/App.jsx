import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
import { Card } from './components/Card'
import { Button } from './components/Button'
import { Input } from './components/Input'

function App() {
  return (
    <div>
      <h1>Weather App</h1>
      <Input placeholder="Enter City Name" />
      <br></br>
      <Button value="Search"/>
      <Card />
      <Button value="Refresh" />
    </div>
  )
}
export default App
