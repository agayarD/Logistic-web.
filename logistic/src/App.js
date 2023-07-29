import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './logistic/navbar/Navbar';
import Homes from './logistic/home/Homes';
import About from './logistic/about/About';
import Contact from './logistic/contact/Contact';
import Footer from './logistic/footer/Footer';
import Service from './logistic/services/Service';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/homes" element={<Homes />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

