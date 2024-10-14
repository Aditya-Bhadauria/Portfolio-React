import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Cursor from './components/Cursor'

import LandingPage from './Pages/Landingpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Cursor/> */}
      <LandingPage/>
    </>
  )
}

export default App
