import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme'; // Assurez-vous que ce fichier existe et est correctement configuré
import Home from './pages/Home'; // Assurez-vous que ces fichiers existent
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'; // Assurez-vous que ce fichier existe
import Footer from './components/Footer'; // Assurez-vous que ce fichier existe
import PerformanceDetail from './components/PerformanceDetail';
import LoadTimeDetail from './components/LoadTimeDetail';
import Seo from './components/Seo';
import Accessibility from './components/Accessibility';
import BestPractices from './components/BestPractices';
import Pwa from './components/Pwa';
import Security from './components/Security';
import Usability from './components/Usability';
import ServerResponseTime from './components/ServerResponseTime';
import ImageOptimization from './components/ImageOptimization';
import CssOptimization from './components/CssOptimization';
import JsOptimization from './components/JsOptimization';


const indices = [
  'performance',
  'loadTime',
  'seo',
  'accessibility',
  'bestPractices',
  'pwa',
  'security',
  'usability',
  'serverResponseTime',
  'imageOptimization',
  'cssOptimization',
  'jsOptimization'
];
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/performance" element={<PerformanceDetail />} />
            <Route path="/loadTime" element={<LoadTimeDetail />} />
            <Route path="/seo" element={<Seo />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/bestPractices" element={<BestPractices />} />
            <Route path="/pwa" element={<Pwa />} />
            <Route path="/security" element={<Security />} />
            <Route path="/usability" element={<Usability />} />
            <Route path="/serverResponseTime" element={<ServerResponseTime />} />
            <Route path="/imageOptimization" element={<ImageOptimization />} />
            <Route path="/cssOptimization" element={<CssOptimization />} />
            <Route path="/jsOptimization" element={<JsOptimization />} />

            
            
          </Routes>
        </main>   
        <Footer/>
      </Router>
    </ThemeProvider>
  );
}

export default App;
