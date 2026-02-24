import React from 'react';

const Hero = () => {
  const brandColor = "#a61d4d"; // Vişne Çürüğü
  const contrastColor = "#fdf2f8"; // Buton hover rengi

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="gj do ir hj sp jr i pg overflow-hidden !pt-5 lg:!pt-0 -mt-1">
      <div className="bb ze ki xn 2xl:ud-px-0">
        
        <div className="tc _o yf flex flex-col-reverse lg:flex-row items-center">
          
          {/* METİN ALANI */}
          <div className="animate_left jn/2 relative z-20 text-center lg:text-left px-4 lg:px-0">
            <h1 className="fk vj zp or kk wm wb text-2xl md:text-3xl lg:text-5xl !leading-tight mb-4">
              Psikolojik Danışmanlık ve Terapi Hizmetleri
            </h1>
            <p className="fq text-base md:text-lg leading-relaxed opacity-90">
              Çocukluk dönemi, bir ömür boyu sürecek olan huzurun temelidir. Çocuklarınızın ruhsal sağlığını profesyonel destekle koruyor, sağlıklı gelişimlerine rehberlik ediyoruz.
            </p>

            {/* BUTON ALANI */}
            <div 
              className="flex justify-center lg:justify-start mb-10 lg:mb-0"
              style={{ marginTop: '40px' }} 
            >
              <a
                onClick={scrollToContact}
                style={{
                  // Masaüstü için varsayılan padding ve font
                  padding: '12px 32px', 
                  borderRadius: '50px',
                  fontSize: '16px',
                  fontWeight: '700',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `2px solid ${brandColor}`,
                  backgroundColor: brandColor,
                  color: '#ffffff',
                  transition: 'all 0.4s ease',
                  textDecoration: 'none',
                  boxShadow: '0 10px 25px -5px rgba(166, 29, 77, 0.3)',
                  cursor: 'pointer'
                }}
                /* KİLİT NOKTA: 
                  !py-2.5 !px-6 !text-sm : Mobilde boyutu küçültür.
                  lg:!py-4 lg:!px-10 lg:!text-base : Masaüstünde orijinal/büyük haline döner.
                */
                className="!py-2.5 !px-6 !text-sm lg:!py-4 lg:!px-10 lg:!text-base transform hover:-translate-y-1"
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = contrastColor;
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
          </div>

          {/* GÖRSEL ALANI */}
          <div className="jn/2 relative w-full mb-10 lg:mb-0">
            <div className="hidden lg:block xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 h q r z-1">
              <img src="/images/shape-01.svg" alt="shape" className="xc 2xl:ud-block h t -ud-left-[10%] ua" />
              <img src="/images/shape-02.svg" alt="shape" className="xc 2xl:ud-block h u p va" />
              <img src="/images/shape-03.svg" alt="shape" className="xc 2xl:ud-block h v w va" />
            </div>

            <div className="flex justify-center lg:justify-end relative z-10">
              <div
                style={{
                  borderRadius: '50%',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: `10px solid ${brandColor}`,
                  backgroundColor: brandColor,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  aspectRatio: '1 / 1'
                }}
                className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] lg:border-[15px]"
              >
                <img
                  src="/images/hero.png"
                  alt="Psikolog"
                  className="ua"
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

        </div>
      </div>
    </section>
  );
};

export default Hero;