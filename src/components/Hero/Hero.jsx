import React from 'react';

const Hero = () => {
  const brandColor = "#a61d4d"; 
  const contrastColor = "#fdf2f8";

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const animationStyles = `
    @keyframes floatCustom {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(3deg); }
      100% { transform: translateY(0px) rotate(0deg); }
    }
    .animate-hero-shape {
      animation: floatCustom 6s ease-in-out infinite;
    }
    /* MOBİL ÖZEL AYARLAR */
    @media (max-width: 768px) {
      .mobile-hide { display: none !important; }
      #hero { 
        height: auto !important; 
        min-height: 100vh; 
        padding-top: 120px !important; /* Header'dan kaçmak için */
        padding-bottom: 60px !important;
      }
      .hero-container {
        flex-direction: column-reverse !important; /* Fotoğraf Üstte, Yazı Altta */
        gap: 30px !important;
      }
      .hero-text-side {
        text-align: center !important;
      }
      .hero-title {
        font-size: 1.8rem !important;
      }
    }
  `;

  return (
    <section 
      id="hero" 
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '100px 5% 40px 5%',
        overflow: 'hidden',
        boxSizing: 'border-box',
        zIndex: 1
      }}
    >
      <style>{animationStyles}</style>

      {/* ARKA PLAN SÜSLEMELERİ */}
      <img 
        src="/images/shape-01.svg" 
        className="animate-hero-shape mobile-hide"
        style={{ position: 'absolute', top: '15%', left: '2%', width: '80px', opacity: 0.4, zIndex: 0 }} 
        alt="" 
      />
      <img 
        src="/images/shape-03.svg" 
        className="animate-hero-shape mobile-hide" 
        style={{ position: 'absolute', top: '20%', right: '5%', width: '100px', opacity: 0.4, zIndex: 0, animationDelay: '2s' }} 
        alt="" 
      />

      <div className="hero-container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row', // Masaüstü varsayılan
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        zIndex: 10,
        gap: '40px'
      }}>
        
        {/* METİN TARAFI */}
        <div className="hero-text-side" style={{ 
          flex: '1', 
          minWidth: '300px', 
        }}>
          <h1 className="hero-title" style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '800',
            color: '#1a1a1a',
            lineHeight: '1.2',
            marginBottom: '20px',
          }}>
            Psikolojik Danışmanlık <br className="mobile-hide" /> ve Terapi Hizmetleri
          </h1>
          <p style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            color: '#4a4a4a',
            marginBottom: '35px',
            maxWidth: '500px',
            marginRight: 'auto',
            marginLeft: 'auto' // Mobilde ortalı durması için
          }}>
            Çocukluk dönemi, bir ömür boyu sürecek olan huzurun temelidir. Çocuklarınızın ruhsal sağlığını profesyonel destekle koruyor, sağlıklı gelişimlerine rehberlik ediyoruz.
          </p>

          <a
            onClick={scrollToContact}
            style={{
              padding: '16px 38px',
              borderRadius: '50px',
              fontSize: '17px',
              fontWeight: '700',
              display: 'inline-block',
              backgroundColor: brandColor,
              color: '#ffffff',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              boxShadow: '0 10px 25px rgba(166, 29, 77, 0.3)',
              cursor: 'pointer',
              border: `2px solid ${brandColor}`
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
              e.currentTarget.style.color = brandColor;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = brandColor;
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            Hikâyenize Ortak Olalım
          </a>
        </div>

        {/* GÖRSEL TARAFI */}
        <div style={{ 
          flex: '1', 
          display: 'flex', 
          justifyContent: 'center', 
          minWidth: '280px' 
        }}>
          <div style={{
            width: 'min(450px, 75vw)', // Mobilde biraz daha kompakt
            height: 'min(450px, 75vw)',
            borderRadius: '50%',
            border: `10px solid ${brandColor}`,
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
            backgroundColor: brandColor,
          }}>
            <img
              src="/images/hero.png"
              alt="Psikolog"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'top'
              }}
            />
          </div>
        </div>
      </div>

      {/* Alt Gradient */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '100%',
        height: '40%',
        background: `linear-gradient(to top right, ${contrastColor} 0%, transparent 100%)`,
        zIndex: 0,
        opacity: 0.5,
        pointerEvents: 'none'
      }} />
    </section>
  );
};

export default Hero;