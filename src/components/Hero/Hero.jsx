import React from 'react';

const Hero = () => {
  const brandColor = "#a61d4d"; // Vişne Çürüğü
  const contrastColor = "#fdf2f8"; // Buton için hafif soft pembe/krem tonu

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="gj do ir hj sp jr i pg overflow-hidden !pt-0 -mt-1">
      <div className="bb ze ki xn 2xl:ud-px-0">
        <div className="tc _o yf">
          <div className="animate_left jn/2 relative z-20">
            <h1 className="fk vj zp or kk wm wb">
              Psikolojik Danışmanlık ve Terapi Hizmetleri
            </h1>
            <p className="fq text-lg">
              Çocukluk dönemi, bir ömür boyu sürecek olan huzurun temelidir. Çocuklarınızın ruhsal sağlığını profesyonel destekle koruyor, sağlıklı gelişimlerine rehberlik ediyoruz.
            </p>

            <div className="tc tf yo zf mb">
              <a
                //href="https://wa.me/905364926842?text=Merhaba,%20bilgi%20almak%20istiyorum."
                onClick={scrollToContact}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '14px 32px',
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
                  boxShadow: '0 10px 20px -5px rgba(166, 29, 77, 0.3)',
                  cursor: 'pointer'
                }}
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

          {/* 2. SAĞ KOLON: Görsel Alanı */}
          <div className="jn/2 relative">
            {/* Arka plan süslemeleri */}
            <div className="xc fn zd/2 2xl:ud-w-187.5 bd 2xl:ud-h-171.5 h q r z-1">
              <img src="/images/shape-01.svg" alt="shape" className="xc 2xl:ud-block h t -ud-left-[10%] ua" />
              <img src="/images/shape-02.svg" alt="shape" className="xc 2xl:ud-block h u p va" />
              <img src="/images/shape-03.svg" alt="shape" className="xc 2xl:ud-block h v w va" />
            </div>

            <div className="flex justify-center lg:justify-end relative z-10">
              <div
                style={{
                  width: '600px',
                  height: '600px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: `15px solid ${brandColor}`,
                  backgroundColor: brandColor,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}
                className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[520px] lg:h-[520px]"
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