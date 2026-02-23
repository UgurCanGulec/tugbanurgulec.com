import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Gallery = () => {
  const [imageColors, setImageColors] = useState({});

  const images = [
    { id: 1, src: '/images/gallery01.png' },
    { id: 2, src: '/images/gallery02.png' },
    { id: 3, src: '/images/gallery03.png' },
    { id: 4, src: '/images/gallery04.png' },
    { id: 5, src: '/images/gallery05.png' },
    { id: 6, src: '/images/gallery06.png' },
    { id: 7, src: '/images/gallery07.png' },
    { id: 8, src: '/images/gallery08.png' },
    { id: 9, src: '/images/gallery09.png' },
    { id: 10, src: '/images/gallery10.png' },
    { id: 11, src: '/images/gallery11.png' }
  ];

  const getAverageColor = (imgElement, id) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 1;
    canvas.height = 1;
    context.drawImage(imgElement, 0, 0, 1, 1);
    const [r, g, b] = context.getImageData(0, 0, 1, 1).data;
    setImageColors(prev => ({ ...prev, [id]: `rgba(${r}, ${g}, ${b}, 0.5)` }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section
      id='gallery'
      style={{
        position: 'relative',
        padding: '120px 0 150px 0',
        backgroundColor: '#fdfdfd',
        zIndex: 1,
        overflow: 'hidden'
      }}>

      {/* --- ARKA PLAN EFEKTLERİ --- */}
      <div style={{ position: 'absolute', inset: 0, zIndex: -1, pointerEvents: 'none' }}>
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute', top: '-10%', left: '-5%',
            width: '40vw', height: '40vw',
            background: 'radial-gradient(circle, rgba(166, 29, 77, 0.07) 0%, transparent 70%)',
            borderRadius: '50%'
          }}
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            position: 'absolute', bottom: '10%', right: '-10%',
            width: '50vw', height: '50vw',
            background: 'radial-gradient(circle, rgba(100, 150, 255, 0.05) 0%, transparent 70%)',
            borderRadius: '50%'
          }}
        />
      </div>

      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 25px' }}>

        {/* --- BAŞLIK BÖLÜMÜ --- */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              marginBottom: '15px',
              paddingBottom: '10px', // Metnin altındaki kesilmeyi önler
              lineHeight: '1.2',    // Metin alanını genişletir
              display: 'inline-block', // Alanı kapsamasını sağlar
              background: 'linear-gradient(135deg, #1a1a1a 0%, #4a4a4a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-1px'
            }}
          >
            Neler Yapıyoruz?
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              height: '4px',
              background: 'linear-gradient(90deg, #A61D4D, #6496FF)',
              margin: '0 auto',
              borderRadius: '2px'
            }}
          />
        </div>

        {/* --- GALERİ GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}
        >
          {images.map((img) => (
            <motion.div
              key={img.id}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              style={{
                position: 'relative',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                padding: '12px',
                borderRadius: '24px',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: `0 25px 50px -15px ${imageColors[img.id] || 'rgba(0,0,0,0.1)'}`,
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                height: '320px',
                position: 'relative'
              }}>
                <img
                  src={img.src}
                  alt="galeri"
                  crossOrigin="anonymous"
                  onLoad={(e) => getAverageColor(e.target, img.id)}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.1), transparent)',
                  pointerEvents: 'none'
                }} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;