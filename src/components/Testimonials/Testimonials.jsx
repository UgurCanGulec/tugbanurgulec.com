import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { fetchComments } from '../../web/fetchComments';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const accentBlue = "#3c52b2";

    useEffect(() => {
        const getComments = async () => {
            const data = await fetchComments();
            setReviews(data);
            setLoading(false);
        };
        getComments();
    }, []);

    const maskName = (fullName) => {
        if (!fullName) return "Gizli Kullanıcı";
        return fullName.split(' ').map(part => part[0] + '*'.repeat(Math.max(0, part.length - 1))).join(' ');
    };

    if (loading) return <div className="py-24 text-center">Yorumlar yükleniyor...</div>;

    return (
        <section className="py-24 bg-[#f3f7ff] relative overflow-hidden flex flex-col items-center">
            {/* Kapsayıcıyı tam genişlik yapıp içeriği ortaladık */}
            <div className="w-full max-w-6xl px-6 md:px-10 relative z-10 flex flex-col items-center">

                {/* Başlık Alanı - w-full ve text-center ile merkeze kilitledik */}
                <div className="w-full text-center mb-16" style={{ position: 'relative', zIndex: 10 }}>
                    <h2 style={{
                        color: '#1e293b',
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '900',
                        letterSpacing: '-0.05em',
                        lineHeight: '1.1',
                        marginBottom: '1rem',
                        fontFamily: 'sans-serif',
                        textAlign: 'center', // Garantiye alalım
                        width: '100%'
                    }}>
                        Sizden <span style={{ color: accentBlue }}>Gelenler</span>
                    </h2>
                </div>

                {reviews.length > 0 ? (
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        centeredSlides={reviews.length < 3} 
                        autoplay={{ delay: 4500 }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        breakpoints={{
                            768: { 
                                slidesPerView: reviews.length === 1 ? 1 : 2, 
                                spaceBetween: 40 
                            },
                            1024: { 
                                slidesPerView: reviews.length >= 3 ? 3 : reviews.length, 
                                spaceBetween: 50 
                            },
                        }}
                        className="testimonials-swiper w-full"
                        style={{ padding: '20px 0 80px 0' }}
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review.comment_id} style={{ height: 'auto', display: 'flex', justifyContent: 'center' }}>
                                <div style={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '40px',
                                    padding: '50px 35px',
                                    width: '100%',
                                    maxWidth: '400px',
                                    margin: '0 auto',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    boxShadow: '0 20px 40px rgba(60, 82, 178, 0.08)',
                                    border: '1px solid #eef2f6',
                                    position: 'relative'
                                }}>
                                    <span style={{ position: 'absolute', top: '25px', left: '30px', fontSize: '60px', color: accentBlue, opacity: 0.1, fontFamily: 'serif' }}>“</span>

                                    <div style={{
                                        width: '80px',
                                        height: '80px',
                                        backgroundColor: '#ffffff',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: '20px',
                                        boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
                                        border: `1px solid #f0f4ff`
                                    }}>
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={accentBlue} strokeWidth="1.2">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                    </div>

                                    <h4 style={{ color: '#1e293b', fontWeight: '800', fontSize: '1.25rem', marginBottom: '12px' }}>
                                        {maskName(review.user_name)}
                                    </h4>

                                    <p style={{ color: '#475569', fontStyle: 'italic', lineHeight: '1.8', fontSize: '1rem', flexGrow: 1 }}>
                                        "{review.comment_text}"
                                    </p>

                                    <div style={{ display: 'flex', gap: '4px', marginTop: '25px' }}>
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} width="18" height="18" fill="#ffb800" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="text-center text-gray-500 py-10">Henüz onaylanmış bir yorum bulunmuyor.</div>
                )}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .swiper { width: 100% !important; display: flex !important; flex-direction: column; align-items: center; }
        .swiper-wrapper { display: flex !important; }
        ${reviews.length < 3 ? `.swiper-wrapper { justify-content: center !important; }` : ''}
        .swiper-pagination-bullet { width: 10px; height: 10px; background: ${accentBlue} !important; opacity: 0.2; }
        .swiper-pagination-bullet-active { opacity: 1 !important; width: 30px; border-radius: 5px; }
      `}} />
        </section>
    );
};

export default Testimonials;