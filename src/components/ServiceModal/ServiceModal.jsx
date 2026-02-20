import React, { useEffect } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ServiceModal = ({ isOpen, onClose, data }) => {
  // Modal açıkken arka plan scroll'unu engeller
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Bileşen kapandığında veya sayfa değiştiğinde scroll'u mutlaka geri açar
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!data) return null;

  const customStyles = {
    overlay: {
      backgroundColor: 'rgba(15, 23, 42, 0.85)',
      backdropFilter: 'blur(8px)',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    },
    content: {
      position: 'relative',
      inset: 'auto',
      width: '100%',
      maxWidth: '750px', 
      padding: '0',
      border: 'none',
      borderRadius: '32px',
      overflow: 'hidden',
      backgroundColor: '#ffffff',
      boxShadow: '0 35px 70px -15px rgba(0, 0, 0, 0.6)',
      display: 'flex',
      flexDirection: 'column',
      outline: 'none',
      maxHeight: '90vh'
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Hizmet Detayları"
      closeTimeoutMS={300}
    >
      {/* Kapatma Butonu */}
      <button 
        onClick={onClose}
        style={{
          position: 'absolute',
          right: '20px',
          top: '20px',
          zIndex: 60,
          width: '42px',
          height: '42px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          color: '#fff',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#a61d4d'; // Vişne çürüğü hover
          e.currentTarget.style.borderColor = '#a61d4d';
          e.currentTarget.style.transform = 'rotate(90deg)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
          e.currentTarget.style.transform = 'rotate(0deg)';
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      {/* Üst Görsel */}
      <div style={{ width: '100%', height: '280px', overflow: 'hidden', backgroundColor: '#f8fafc', position: 'relative' }}>
        <img 
          src={data.image} 
          alt={data.title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
        />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.05))'
        }} />
      </div>

      {/* İçerik Alanı */}
      <div style={{ padding: '40px 60px', textAlign: 'center', overflowY: 'auto' }}>
        <h3 style={{ 
          margin: '0 0 20px 0', 
          fontSize: '32px', 
          fontWeight: '900', 
          color: '#1e1b4b', 
          lineHeight: '1.2',
          letterSpacing: '-0.02em'
        }}>
          {data.title}
        </h3>

        {/* Renkli Ayraç - Vişne çürüğü tonlarına çekildi */}
        <div style={{ 
          width: '80px', 
          height: '6px', 
          background: 'linear-gradient(90deg, #a61d4d, #db2777)', 
          margin: '0 auto 30px auto', 
          borderRadius: '20px' 
        }} />

        <p style={{ 
          margin: 0, 
          fontSize: '18px', 
          color: '#475569', 
          lineHeight: '1.9', 
          textAlign: 'justify', 
          fontWeight: '500'
        }}>
          {data.description}
        </p>
      </div>

      {/* Alt Dekoratif Şerit */}
      <div style={{ 
        height: '10px', 
        width: '100%', 
        background: 'linear-gradient(90deg, #a61d4d, #e11d48, #be123c)',
        flexShrink: 0 
      }} />
    </Modal>
  );
};

export default ServiceModal;