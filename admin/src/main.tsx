import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route } from "react-router";
import './index.css'
import App from './App.tsx'
import Contact from './Components/Contact.tsx';
import About from './Components/About.tsx';
import Home from './Components/Home.tsx';
/* import Navbar from './Components/Navbar.tsx';
import Footer from './Components/Footer.tsx'; */
import Layout from './Layout/Layout.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    {/* <App /> */}
    <Routes>
    <Route  element={<Layout/>}>
    <Route path="/" element={<App />} />
      {/* <Route path="/navbar" element={<Navbar />} /> */}
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/footer" element={<Footer />} /> */}
    </Route>
    </Routes>
  </BrowserRouter>
  </StrictMode>,

)
