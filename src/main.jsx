import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Lana from './Lana'
import App  from './App'
import Otherpf from './Otherpf'
import  Ol  from './Ol'
import Joji from './Joji'
import Juice from './Juice'
import Bele from './Bele'
import Onclicktest from './Onclicktest.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
    <Routes>
      <Route path='/' element={<Otherpf/>}/>
      <Route path='.Otherpf/' element={<Otherpf/>}/>
      <Route path='/App' element={<App/>}/>
      <Route path='/Lana'element={<Lana/>}/>
     <Route path='/Ol' element={<Ol/>}/>
     <Route path='/Joji' element={<Joji/>}/>
     <Route path='/Juice' element={<Juice/>}/>
     <Route path='/Bele' element={<Bele/>}/>
     <Route path='/Onclicktest' element={<Onclicktest/>}/>
    </Routes>
    </BrowserRouter>
  </StrictMode>
 
)
