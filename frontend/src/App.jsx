import { useState } from 'react'
import './App.css'
import StyledEngineProvider from "@mui/material/StyledEngineProvider"
import  LandinggPage from "./pages/landingPage/LandinggPage"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <StyledEngineProvider injectFirst>
     <LandinggPage/>

    </StyledEngineProvider>
    </>  
  )
}

export default App
