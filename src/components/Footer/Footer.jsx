import React from 'react';

const Footer = () => {
  const brandColor = "#a61d4d"; // Vişne Çürüğü

  const animationStyles = `
    @keyframes floatFooter {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(5deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    .animate-footer-shape {
      animation: floatFooter 5s ease-in-out infinite;
    }
    @media (max-width: 768px) {
      .footer-mobile-hide { display: none !important; }
    }
  `;

  const footerStyle = {
    padding: '80px 5% 40px 5%',
    backgroundColor: '#ffffff',
    borderTop: '1px solid #eee',
    position: 'relative',
    overflow: 'hidden', // Hareketli objelerin taşmaması için
    zIndex: 10,
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '40px',
    position: 'relative',
    zIndex: 5
  };

  const columnStyle = {
    flex: '1',
    minWidth: '250px',
  };

  const linkStyle = {
    display: 'block',
    color: '#666',
    textDecoration: 'none',
    marginBottom: '12px',
    fontSize: '15px',
    transition: 'color 0.3s ease',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '25px',
    display: 'block'
  };

  const shapeStyle = {
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: 1,
    opacity: 0.3
  };

  return (
    <footer style={footerStyle}>
      <style>{animationStyles}</style>

      {/* ARKA PLAN HAREKETLİ OBJELER */}
      <img 
        src="/images/shape-01.svg" 
        className="animate-footer-shape footer-mobile-hide"
        style={{ ...shapeStyle, top: '10%', left: '2%', width: '60px' }} 
        alt="" 
      />
      <img 
        src="/images/shape-02.svg" 
        className="animate-footer-shape footer-mobile-hide"
        style={{ ...shapeStyle, bottom: '15%', right: '5%', width: '80px', animationDelay: '1s' }} 
        alt="" 
      />
      <img 
        src="/images/shape-03.svg" 
        className="animate-footer-shape"
        style={{ ...shapeStyle, top: '40%', left: '45%', width: '40px', animationDelay: '2s' }} 
        alt="" 
      />

      <div style={containerStyle}>
        
        {/* KOLON 1: LOGO VE SOSYAL MEDYA */}
        <div style={columnStyle}>
          <a href="/">
            <img src="/images/tng-logo.png" alt="Logo" style={{ width: '180px', marginBottom: '20px' }} />
          </a>
          <p style={{ color: '#666', lineHeight: '1.6', fontSize: '15px', maxWidth: '300px' }}>
            Çocukların dünyasına sevgiyle dokunuyor, ailelerin yolculuğuna güvenle rehberlik ediyoruz.
          </p>
          
          <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
            <a href="https://www.instagram.com/tugbanurgulec" target="_blank" rel="noreferrer" style={{ color: brandColor }} aria-label="Instagram">
              <i className="fab fa-instagram" style={{ fontSize: '24px' }}></i>
            </a>
            <a href="#" style={{ color: brandColor }} aria-label="Facebook">
              <i className="fab fa-facebook" style={{ fontSize: '24px' }}></i>
            </a>
          </div>
        </div>

        {/* KOLON 2: KURUMSAL */}
        <div style={columnStyle}>
          <span style={titleStyle}>Kurumsal</span>
          <nav>
            <a href="/" style={linkStyle} onMouseOver={(e) => e.target.style.color = brandColor} onMouseOut={(e) => e.target.style.color = '#666'}>Ana Sayfa</a>
            <a href="#about" style={linkStyle} onMouseOver={(e) => e.target.style.color = brandColor} onMouseOut={(e) => e.target.style.color = '#666'}>Hakkımızda</a>
            <a href="#services" style={linkStyle} onMouseOver={(e) => e.target.style.color = brandColor} onMouseOut={(e) => e.target.style.color = '#666'}>Hizmetler</a>
            <a href="#contact" style={linkStyle} onMouseOver={(e) => e.target.style.color = brandColor} onMouseOut={(e) => e.target.style.color = '#666'}>İletişim</a>
          </nav>
        </div>

        {/* KOLON 3: HİZMETLER */}
        <div style={columnStyle}>
          <span style={titleStyle}>Hizmet Alanları</span>
          <nav>
            <span style={linkStyle}>Çocuk Terapisi</span>
            <span style={linkStyle}>Aile Danışmanlığı</span>
            <span style={linkStyle}>Oyun Terapisi</span>
            <span style={linkStyle}>Ebeveyn Danışmanlığı</span>
          </nav>
        </div>

        {/* KOLON 4: İLETİŞİM (GÜNCELLENDİ) */}
        <div style={columnStyle}>
          <span style={titleStyle}>İletişim Bilgileri</span>
          <p style={{ ...linkStyle, cursor: 'default' }}>
            <i className="fas fa-map-marker-alt" style={{ marginRight: '10px', color: brandColor }}></i>
            Bolu, Türkiye
          </p>
          <p style={{ ...linkStyle, cursor: 'default' }}>
            <i className="fas fa-envelope" style={{ marginRight: '10px', color: brandColor }}></i>
            tugbanurglec@gmail.com
          </p>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '40px auto 0 auto', 
        paddingTop: '20px', 
        borderTop: '1px solid #eee',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '14px',
        color: '#999',
        position: 'relative',
        zIndex: 5
      }}>
        <p>&copy; {new Date().getFullYear()} Tuğba Nur Güleç. Tüm hakları saklıdır.</p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Gizlilik Politikası</a>
          <a href="#" style={{ color: '#999', textDecoration: 'none' }}>KVKK</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;