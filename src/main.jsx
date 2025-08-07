import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Outlet } from 'react-router-dom';
import Nav from './assets/component/Nav';
import Otherpf from './Otherpf';
import Lana from './Lana';
import Ol from './Ol';
import Joji from './Joji';
import Juice from './Juice';
import Bele from './Bele';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyRoutes />
  </StrictMode>
);

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Otherpf />} />
          <Route path="Nav" element={<Nav />} />
          <Route path="Lana" element={<Lana />} />
          <Route path="Ol" element={<Ol />} />
          <Route path="Joji" element={<Joji />} />
          <Route path="Juice" element={<Juice />} />
          <Route path="Bele" element={<Bele />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
