import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../constants/services';
import ServiceModal from '../ServiceModal/ServiceModal';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
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
    setMobileServicesOpen(false);
  };

  const scrollToDestination = (destination) => {
    const contactSection = document.getElementById(destination);
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const brandColor = "#a61d4d";
  const iconMargin = { marginRight: '12px' };
  const navItemClass = `xl tc wf yf font-black transition-all duration-300 ${stickyMenu ? 'text-slate-900 hover:text-[#a61d4d]' : 'text-slate-800 hover:text-[#a61d4d]'}`;

  const mobileLinkStyle = {
    fontSize: '22px', fontWeight: '800', color: '#1a1a1b', textDecoration: 'none',
    display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', padding: '10px 0'
  };

  return (
    <>
      <header
        className={`g s r vd ya cj ${stickyMenu ? 'hh sm _k dj bl ll' : ''}`}
        style={{ padding: '8px 0', transition: 'all 0.3s ease', zIndex: 1000 }}
      >
        <div className="bb ze ki xn 2xl:ud-px-0 oo wf yf i" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          <div onClick={() => scrollToDestination('hero')} style={{ flex: '0 0 auto', minWidth: 'max-content' }}>
            <Link to="/" className="tc wf yf group" style={{ gap: '15px', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
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

          {/* SAĞ TARAF: NAVİGASYON */}
          <div className="tc wf yf" style={{ flex: '0 1 auto', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>

            {!isMobile && (
              <nav className="hidden lg:block">
                <ul className="tc _o sf yo cg ep" style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                  <li>
                    <Link onClick={() => scrollToDestination('hero')} to="/" className={navItemClass} style={{ textDecoration: 'none' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={iconMargin}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                      <span>Ana Sayfa</span>
                    </Link>
                  </li>

                  <li className="c i relative group">
                    <button className={navItemClass} onClick={() => setDropdown(!dropdown)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={iconMargin}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                      <span style={{ marginRight: '8px' }}>Hizmetler</span>
                      <svg className={`transition-transform duration-200 ${dropdown ? 'rotate-180' : ''}`} width="14" height="14" viewBox="0 0 512 512" fill="currentColor"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" /></svg>
                    </button>
                    <ul className={`a ${dropdown ? 'tc shadow-2xl border-t-2 border-[#a61d4d]' : ''}`} style={{ right: 0, width: 'max-content', maxWidth: '350px' }}>
                      {servicesData.map((service, index) => (
                        <li key={index}><button onClick={() => handleServiceClick(service)} className="xl hover:text-[#a61d4d] font-bold block py-3 px-6 text-left w-full transition-colors border-b border-slate-100 last:border-0 text-slate-800 bg-transparent">{service.title}</button></li>
                      ))}
                    </ul>
                  </li>

                  <li>
                    <Link onClick={() => scrollToDestination('about')} to="/about" className={navItemClass} style={{ textDecoration: 'none' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={iconMargin}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                      <span>Hakkımızda</span>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => scrollToDestination('gallery')} to="/gallery" className={navItemClass} style={{ textDecoration: 'none' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={iconMargin}><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
                      <span>Galeri</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            )}

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

            {/* MOBİL HAMBURGER */}
            {isMobile && (
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '10px', zIndex: 1100, display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '25px', height: '3px', backgroundColor: brandColor, marginBottom: '5px', transition: '0.3s', transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : '' }}></div>
                <div style={{ width: '25px', height: '3px', backgroundColor: brandColor, marginBottom: '5px', opacity: mobileMenuOpen ? 0 : 1 }}></div>
                <div style={{ width: '25px', height: '3px', backgroundColor: brandColor, transition: '0.3s', transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : '' }}></div>
              </button>
            )}
          </div>
        </div>

        {/* MOBİL PANEL */}
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', backgroundColor: '#fff', zIndex: 1050,
          display: (isMobile && mobileMenuOpen) ? 'flex' : 'none', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px',
          padding: '20px', overflowY: 'auto'
        }}>
          <Link to="/" onClick={() => {
            scrollToDestination('hero')
            setMobileMenuOpen(false)
          }} style={mobileLinkStyle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={iconMargin}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
            Ana Sayfa
          </Link>
          <div style={{ width: '100%', textAlign: 'center' }}>
            <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} style={{ ...mobileLinkStyle, background: 'none', border: 'none' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={iconMargin}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
              Hizmetler
              <svg style={{ marginLeft: '10px', transition: '0.3s', transform: mobileServicesOpen ? 'rotate(180deg)' : '' }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            <div style={{ maxHeight: mobileServicesOpen ? '400px' : '0', overflowY: 'auto', transition: 'all 0.4s ease-in-out', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
              {servicesData.map((s, i) => (
                <button key={i} onClick={() => handleServiceClick(s)} style={{ display: 'block', width: '100%', padding: '15px', background: 'none', border: 'none', fontWeight: '600', color: '#444', fontSize: '16px', borderBottom: '1px solid #eee' }}>{s.title}</button>
              ))}
            </div>
          </div>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={iconMargin}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            Hakkımızda
          </Link>
          <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} style={mobileLinkStyle}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={iconMargin}><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
            Galeri
          </Link>

          {/* MOBİL RANDEVU AL BUTONU - Hover efekti eklendi */}
          <a href="https://wa.me/905364926842"
            style={{
              backgroundColor: brandColor, color: '#fff', padding: '15px 40px',
              borderRadius: '50px', fontWeight: 'bold', textDecoration: 'none',
              marginTop: '10px', transition: 'all 0.3s ease', border: `2px solid ${brandColor}`
            }}
            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = brandColor; }}
            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = brandColor; e.currentTarget.style.color = '#fff'; }}
          >
            Randevu Al
          </a>
        </div>
      </header>

      <ServiceModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={selectedService} />
    </>
  );
};

export default Header;