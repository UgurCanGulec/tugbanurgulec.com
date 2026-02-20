import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div 
        className="animate-modal-in"
        style={{
          backgroundColor: '#ffffff',
          width: '100%',
          maxWidth: '700px',
          maxHeight: '85vh',
          borderRadius: '32px',
          position: 'relative',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            border: 'none',
            background: '#f1f5f9',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = '#e2e8f0'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#f1f5f9'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

const MainAbout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const accentBlue = "#3c52b2"; 

  return (
    <section className="ji gp uq 2xl:ud-py-35 pg relative">
      <div className="bb ze ki xn wq">
        <div className="tc wf gg qq">
          {/* SOL TARAF */}
          <div className="animate_left xc gn gg jn/2 i">
            <div>
              <img src="images/gallery01.png" alt="Danışmanlık" className="ib" />
              <img src="images/gallery02.png" alt="Terapi Seansı" />
            </div>
            <div>
              <img src="images/shape-06.svg" alt="Shape" />
              <img src="images/gallery03.png" alt="Ofisimiz" className="ob gb" />
              <img src="images/shape-07.svg" alt="Shape" className="bb" />
            </div>
          </div>

          {/* SAĞ TARAF */}
          <div className="animate_right jn/2">
            <h4 className="ek yj mk gb text-cherry">Neden Beni Seçmelisiniz?</h4>
            <h2 className="fk vj zp pr kk wm qb">
              Kendinize Giden Yolculukta Güvenli Bir Alan Açıyoruz.
            </h2>
            <p className="uo">
              Her bireyin hikâyesinin eşsiz olduğu bilinciyle; kanıta dayalı terapi yöntemlerini, sizin ihtiyaçlarınıza odaklanan bir rehberlikle sunuyorum. Amacım, karmaşık duygular arasında yolunuzu bulmanıza yardımcı olmak ve psikolojik dayanıklılığınızı birlikte güçlendirmektir.
            </p>

            {/* Mavi Dalgalanan Buton */}
            <div 
              onClick={() => setIsModalOpen(true)}
              className="vc wf hg mb group"
              style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}
            >
              <span className="tc wf xf be dd rg i gh ua relative" style={{ backgroundColor: accentBlue }}>
                <span className="custom-ping" style={{ backgroundColor: accentBlue }}></span>
                <svg className="pointer-events-none" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                  <path d="M13 13l6 6"></path>
                </svg>
              </span>
              <span className="kk transition-colors font-bold ml-4 pointer-events-none" style={{ color: accentBlue }}>
                DANIŞMANLIK SÜRECİ NASIL İLERLİYOR?
              </span>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div style={{ padding: '50px 40px' }}>
          <h3 style={{ 
            color: accentBlue, 
            fontSize: '32px', 
            fontWeight: '800', 
            marginBottom: '30px', 
            textAlign: 'center',
            lineHeight: '1.2'
          }}>
            Danışmanlık Süreci <br/> Nasıl İlerliyor?
          </h3>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '24px', 
            color: '#475569', 
            fontSize: '18px', 
            lineHeight: '1.6',
            textAlign: 'justify'
          }}>
            <p style={{ margin: 0 }}>
              <strong style={{ color: accentBlue }}>•</strong> Danışmanlık süreci, çocuğun ve ailenin ihtiyaçlarını merkeze alan, planlı ve iş birliği içinde ilerleyen profesyonel bir yolculuktur.
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: accentBlue }}>•</strong> İlk aşamada ebeveynlerle detaylı bir görüşme yapılarak gelişim süreci, yaşanan zorluklar ve aile beklentileri kapsamlı şekilde ele alınır.
            </p>
            <p style={{ margin: 0 }}>
              <strong style={{ color: accentBlue }}>•</strong> Çocukla kurulan güven bağı ve yapılan değerlendirmelerin ardından, sürece dair somut amaçlar ve yol haritası birlikte belirlenir.
            </p>
            
            <div style={{ 
              marginTop: '20px', 
              padding: '24px', 
              backgroundColor: '#f8fafc', 
              borderRadius: '20px', 
              borderLeft: `5px solid ${accentBlue}`,
              fontStyle: 'italic',
              fontWeight: '500',
              textAlign: 'center',
              color: '#1e293b'
            }}>
              "Danışmanlık süreci; yalnızca seans odasında değil, yaşamın tüm alanlarında desteklenmeyi hedefleyen bir anlayışla yürütülür."
            </div>
          </div>
        </div>
      </Modal>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes modal-in {
          from { opacity: 0; transform: translateY(30px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-modal-in {
          animation: modal-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes ping-custom {
          0% { transform: scale(1); opacity: 0.8; }
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }
        .custom-ping {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 9999px;
          animation: ping-custom 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}} />
    </section>
  );
};

export default MainAbout;