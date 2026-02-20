import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../constants/services';
import ServiceModal from '../ServiceModal/ServiceModal';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  // MODAL STATE'LERİ
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.pageYOffset > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    setDropdown(false);
  };

  // YAZI RENKLERİ: text-slate-900 (koyu ve tok) ve hover'da vişne çürüğü (#a61d4d)
  const navItemClass = `xl tc wf yf font-black transition-all duration-300 ${stickyMenu ? 'text-slate-900 hover:text-[#a61d4d]' : 'text-slate-800 hover:text-[#a61d4d]'
    }`;

  // İKON VE MARKA RENGİ: Vişne çürüğü
  const brandColor = "#a61d4d";
  const iconMargin = { marginRight: '12px' };

  return (
    <>
      <header
        className={`g s r vd ya cj ${stickyMenu ? 'hh sm _k dj bl ll' : ''}`}
        style={{ padding: '8px 0', transition: 'all 0.3s ease', zIndex: 50 }}
      >
        <div className="bb ze ki xn 2xl:ud-px-0 oo wf yf i">
          {/* Sol Taraf: Logo */}
          <div className="tc wf yf" style={{ flex: '0 1 auto', minWidth: 'max-content' }} onClick={(e) => {
            e.preventDefault();
            const contactSection = document.getElementById('hero');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
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
                <p className="font-sans font-bold uppercase tracking-tighter" style={{ fontSize: '11px', color: brandColor, margin: 0 }}>
                  Psikolojik Danışman
                </p>
                <p className="font-sans font-extrabold tracking-tight" style={{
                  fontSize: '20px', color: '#1a1a1b', margin: 0, whiteSpace: 'nowrap'
                }}>
                  Tuğba Nur Güleç
                </p>
              </div>
            </Link>
          </div>

          {/* Sağ Taraf: Navigasyon */}
          <div className="tc wf yf" style={{ flex: '1 0 auto', justifyContent: 'flex-end' }}>
            <nav className="hidden lg:block">
              <ul className="tc _o sf yo cg ep">
                <li onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById('hero');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}>
                  <Link to="/" className={navItemClass} style={{ textDecoration: 'none' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={iconMargin}>
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <span>Ana Sayfa</span>
                  </Link>
                </li>

                {/* HİZMETLER DROPDOWN */}
                <li className="c i">
                  <button
                    className={navItemClass}
                    onClick={(e) => { e.preventDefault(); setDropdown(!dropdown); }}
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={iconMargin}>
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    <span style={{ marginRight: '8px' }}>Hizmetler</span>
                    <svg className={`th mm we fd pf transition-transform duration-200 ${dropdown ? 'wh' : ''}`} width="12" height="12" viewBox="0 0 512 512" fill="currentColor">
                      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                  </button>

                  <ul className={`a ${dropdown ? 'tc shadow-2xl border-t-2 border-[#a61d4d]' : ''}`} style={{ right: 0, width: 'max-content', maxWidth: '350px' }}>
                    {servicesData.map((service, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleServiceClick(service)}
                          className="xl hover:text-[#a61d4d] font-bold block py-3 px-6 text-left w-full transition-colors border-b border-slate-100 last:border-0 text-slate-800"
                        >
                          {service.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <Link to="/about" className={navItemClass} style={{ textDecoration: 'none' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={iconMargin}>
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                    </svg>
                    <span>Hakkımızda</span>
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className={navItemClass} style={{ textDecoration: 'none' }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={brandColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={iconMargin}>
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                    </svg>
                    <span>Galeri</span>
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Randevu Butonu - WhatsApp Yönlendirmeli */}
            <div className="tc wf ig pb no">
              <a
                href="https://wa.me/905364926842?text=Merhaba,%20randevu%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 shadow-md hover:shadow-xl"
                style={{
                  whiteSpace: 'nowrap',
                  padding: '12px 28px',
                  marginLeft: '30px',
                  borderRadius: '50px',
                  fontSize: '15px',
                  fontWeight: 'bold',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `2px solid ${brandColor}`,
                  backgroundColor: brandColor,
                  color: '#ffffff',
                  cursor: 'pointer',
                  textDecoration: 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = brandColor;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = brandColor;
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                Randevu Al
              </a>
            </div>
          </div>
        </div>
      </header>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedService}
      />
    </>
  );
};

export default Header;