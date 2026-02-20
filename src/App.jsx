import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';
import ApproveComment from './pages/ApproveComment';

const inlineStyles = `
  @keyframes floatAround {
    0% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(40px, 60px) rotate(120deg); }
    66% { transform: translate(-40px, 30px) rotate(240deg); }
    100% { transform: translate(0, 0) rotate(360deg); }
  }
  @keyframes twinkle {
    0%, 100% { opacity: 0.1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.5); }
  }
  @keyframes cloudFloat {
    0% { transform: translateX(0) translateY(0); }
    50% { transform: translateX(50px) translateY(20px); }
    100% { transform: translateX(0) translateY(0); }
  }
`;

const FunBackground = () => {
const elements = ['🎨', '⭐️', '🎈', '🍭', '🛸', '🐳', '🐻', '🐱', '🐶', '🦆', '🍦', '🧁', '🚗'];  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      overflow: 'hidden',
      pointerEvents: 'none',
      background: 'linear-gradient(180deg, #e0f2ff 0%, #ffffff 100%)'
    }}>
      <style dangerouslySetInnerHTML={{ __html: inlineStyles }} />

      {[...Array(5)].map((_, i) => (
        <div
          key={`cloud-${i}`}
          style={{
            position: 'absolute',
            width: '450px',
            height: '450px',
            backgroundColor: '#fff',
            borderRadius: '50%',
            filter: 'blur(90px)',
            opacity: 0.5,
            left: ((i * 25) % 110) - 10 + '%',
            top: ((i * 35) % 90) + '%',
            animation: `cloudFloat ${25 + i * 5}s ease-in-out infinite`,
          }}
        />
      ))}

      {[...Array(20)].map((_, i) => (
        <div
          key={`star-${i}`}
          style={{
            position: 'absolute',
            width: '6px',
            height: '6px',
            backgroundColor: '#FFD700',
            borderRadius: '50%',
            left: ((i * 11) % 98) + '%',
            top: ((i * 17) % 98) + '%',
            animation: `twinkle ${2 + (i % 3)}s infinite ease-in-out`,
            boxShadow: '0 0 10px #FFD700',
          }}
        />
      ))}

      {/* 3. KATMAN: Ana Emojiler (Büyük ve Hareketli) */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`emoji-${i}`}
          style={{
            position: 'absolute',
            left: ((i * 7) % 95) + '%', 
            top: ((i * 13) % 90) + '%',
            fontSize: `${40 + (i % 3) * 29}px`, 
            opacity: 0.2,
            animation: `floatAround ${18 + (i % 12)}s linear infinite`,
            animationDelay: `-${i}s`,
            userSelect: 'none'
          }}
        >
          {elements[i % elements.length]}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <>
    <Router>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <FunBackground />
        <Header />
        <main style={{ position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/approve" element={<ApproveComment />} />
          </Routes>
        </main>
      </div>
    </Router>
    <Footer />
    </>
  
  );
}

export default App;