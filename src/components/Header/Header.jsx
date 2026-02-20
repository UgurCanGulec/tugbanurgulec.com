import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../constants/services';
import ServiceModal from '../ServiceModal/ServiceModal';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    const handleScroll = () => {
      setStickyMenu(window.pageYOffset > 20);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    setDropdown(false);
    setMobileMenuOpen(false);
  };

  const brandColor = "#a61d4d";
  const iconMargin = { marginRight: '12px' };
  const navItemClass = `xl tc wf yf font-black transition-all duration-300 ${stickyMenu ? 'text-slate-900 hover:text-[#a61d4d]' : 'text-slate-800 hover:text-[#a61d4d]'}`;

  return (
    <>
      <header
        className={`g s r vd ya cj ${stickyMenu ? 'hh sm _k dj bl ll' : ''}`}
        style={{ padding: '8px 0', transition: 'all 0.3s ease', zIndex: 1000 }}
      >
        <div className="bb ze ki xn 2xl:ud-px-0 oo wf yf i">
          {/* LOGO BÖLÜMÜ */}
          <div className="tc wf yf" style={{ flex: '0 1 auto', minWidth: 'max-content' }}>
            <Link to="/" className="tc wf yf group" style={{ gap: '15px', textDecoration: 'none' }}>
              <div style={{
                width: '60px', height: '60px', borderRadius: '50%',
                border: `2px solid ${stickyMenu ? '#fbcfe8' : brandColor}`,
                padding: '2px', backgroundColor: '#fff', display: 'flex',
                alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
                boxShadow: '0 4px 10px -2px rgb(0 0 0 / 0.15)'
              }}>
                <img src="/images/tng-logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div className="hidden sm:block" style={{ lineHeight: '1.2' }}>
                <p className="font-sans font-bold uppercase tracking-tighter" style={{ fontSize: '11px', color: brandColor, margin: 0 }}>Psikolojik Danışman</p>
                <p className="font-sans font-extrabold tracking-tight" style={{ fontSize: '20px', color: '#1a1a1b', margin: 0, whiteSpace: 'nowrap' }}>Tuğba Nur Güleç</p>
              </div>
            </Link>
          </div>

          {/* SAĞ TARAF: NAVİGASYON VE BUTONLAR */}
          <div className="tc wf yf" style={{ flex: '1 0 auto', justifyContent: 'flex-end', display: 'flex', alignItems: 'center' }}>
            
            {/* MASAÜSTÜ NAVİGASYON (Sadece PC'de render olur) */}
            {!isMobile && (
              <nav className="hidden lg:block">
                <ul className="tc _o sf yo cg ep">
                  <li>
                    <Link to="/" className={navItemClass} style={{ textDecoration: 'none' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={iconMargin}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                      <span>Ana Sayfa</span>
                    </Link>
                  </li>

                  <li className="c i relative group">
                    <button className={navItemClass} onClick={() => setDropdown(!dropdown)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={iconMargin}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                      <span style={{ marginRight: '8px' }}>Hizmetler</span>
                      <svg className={`th mm we fd pf transition-transform duration-200 ${dropdown ? 'wh' : ''}`} width="12" height="12" viewBox="0 0 512 512" fill="currentColor"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                    </button>
                    <ul className={`a ${dropdown ? 'tc shadow-2xl border-t-2 border-[#a61d4d]' : ''}`} style={{ right: 0, width: 'max-content', maxWidth: '350px' }}>
                      {servicesData.map((service, index) => (
                        <li key={index}><button onClick={() => handleServiceClick(service)} className="xl hover:text-[#a61d4d] font-bold block py-3 px-6 text-left w-full transition-colors border-b border-slate-100 last:border-0 text-slate-800 bg-transparent">{service.title}</button></li>
                      ))}
                    </ul>
                  </li>

                  <li>
                    <Link to="/about" className={navItemClass} style={{ textDecoration: 'none' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={iconMargin}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                      <span>Hakkımızda</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery" className={navItemClass} style={{ textDecoration: 'none' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={iconMargin}><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                      <span>Galeri</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            )}

            {/* RANDEVU AL (PC) */}
            {!isMobile && (
              <div className="tc wf ig pb no hidden lg:flex">
                <a href="https://wa.me/905364926842" className="transition-all duration-300 shadow-md" 
                   style={{ padding: '12px 28px', marginLeft: '30px', borderRadius: '50px', fontSize: '15px', fontWeight: 'bold', border: `2px solid ${brandColor}`, backgroundColor: brandColor, color: '#fff', textDecoration: 'none' }}
                   onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = brandColor; }}
                   onMouseOut={(e) => { e.currentTarget.style.backgroundColor = brandColor; e.currentTarget.style.color = '#fff'; }}>
                  Randevu Al
                </a>
              </div>
            )}

            {/* MOBİL HAMBURGER (Sadece mobilde görünür) */}
            {isMobile && (
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '10px', zIndex: 1100 }}>
                <div style={{ width: '25px', height: '3px', backgroundColor: brandColor, marginBottom: '5px', transition: '0.3s', transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : '' }}></div>
                <div style={{ width: '25px', height: '3px', backgroundColor: brandColor, marginBottom: '5px', opacity: mobileMenuOpen ? 0 : 1 }}></div>
                <div style={{ width: '25px', height: '3px', backgroundColor: brandColor, transition: '0.3s', transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : '' }}></div>
              </button>
            )}
          </div>
        </div>

        {/* MOBİL PANEL (Sadece lg altı ve isMobile true ise çalışır) */}
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', backgroundColor: '#fff', zIndex: 1050,
          display: (isMobile && mobileMenuOpen) ? 'flex' : 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '30px'
        }}>
          <Link to="/" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1b', textDecoration: 'none' }}>Ana Sayfa</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1b', textDecoration: 'none' }}>Hakkımızda</Link>
          <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1b', textDecoration: 'none' }}>Galeri</Link>
          <div style={{ textAlign: 'center' }}>
            <p style={{ color: brandColor, fontWeight: 'bold', marginBottom: '10px' }}>HİZMETLERİMİZ</p>
            {servicesData.slice(0, 5).map((s, i) => (
              <button key={i} onClick={() => handleServiceClick(s)} style={{ display: 'block', margin: '10px auto', background: 'none', border: 'none', fontWeight: '600', color: '#444' }}>{s.title}</button>
            ))}
          </div>
          <a href="https://wa.me/905364926842" style={{ backgroundColor: brandColor, color: '#fff', padding: '15px 40px', borderRadius: '50px', fontWeight: 'bold', textDecoration: 'none' }}>Randevu Al</a>
        </div>
      </header>

      <ServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={selectedService} />
    </>
  );
};

export default Header;