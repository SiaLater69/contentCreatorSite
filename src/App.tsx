import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Videos from './pages/Videos';
import ContactForm from './pages/Contact';
import DailyOutfitShowcase from './pages/ShopPage/Shop';
import October25 from './pages/ShopPage/dates/October25';
import October24 from './pages/ShopPage/dates/October24';




function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/contact" element={<ContactForm/>}/>
            <Route path="/shop" element={<DailyOutfitShowcase/>}/>
            <Route path='/october25' element={<October25/>}/>
            <Route path='/october24' element={<October24/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;