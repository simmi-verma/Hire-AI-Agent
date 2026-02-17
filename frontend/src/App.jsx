import LandingPage from './page/Landingpage'
import Home from './page/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Details from './page/Details'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
