import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { supabase } from '../web/supabaseClient';

const ApproveComment = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [status, setStatus] = useState({ type: 'loading', message: 'İşlem yapılıyor...' });
    const commentId = searchParams.get('id');

    useEffect(() => {
        const approve = async () => {
            if (!commentId) {
                setStatus({ type: 'error', message: 'Hatalı link! Geçersiz ID.' });
                return;
            }

            const { error } = await supabase
                .from('comment')
                .update({ is_approved: true })
                .eq('comment_id', commentId);

            if (error) {
                setStatus({ type: 'error', message: 'Hata: ' + error.message });
            } else {
                setStatus({ type: 'success', message: 'Yorum başarıyla onaylandı ve yayına alındı!' });
            }
        };

        approve();
    }, [commentId]);

    const accentBlue = "#3c52b2";

    return (
        <div style={{
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f3f7ff', // Sitenin arka planıyla uyumlu
            fontFamily: 'sans-serif',
            padding: '20px',
            boxSizing: 'border-box'
        }}>
            <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '30px',
                padding: '60px 40px',
                width: '100%',
                maxWidth: '500px',
                textAlign: 'center',
                boxShadow: '0 25px 50px -12px rgba(60, 82, 178, 0.15)',
                border: '1px solid #eef2f6'
            }}>
                {/* İkon Bölümü */}
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: status.type === 'error' ? '#fee2e2' : '#f0f4ff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 25px auto'
                }}>
                    {status.type === 'loading' && <div className="animate-spin" style={{ width: '30px', height: '30px', border: '3px solid #3c52b2', borderTopColor: 'transparent', borderRadius: '50%' }}></div>}
                    {status.type === 'success' && <svg width="40" height="40" fill="none" stroke="#10b981" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>}
                    {status.type === 'error' && <svg width="40" height="40" fill="none" stroke="#ef4444" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>}
                </div>

                <h2 style={{
                    color: '#1e293b',
                    fontSize: '1.75rem',
                    fontWeight: '800',
                    marginBottom: '15px',
                    margin: 0
                }}>
                    Yorum Onay Paneli
                </h2>

                <p style={{
                    color: '#64748b',
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    marginTop: '15px'
                }}>
                    {status.message}
                </p>

                <button 
                    onClick={() => navigate('/')}
                    style={{
                        marginTop: '35px',
                        backgroundColor: accentBlue,
                        color: 'white',
                        padding: '14px 30px',
                        borderRadius: '15px',
                        border: 'none',
                        fontWeight: '600',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'transform 0.2s',
                        boxShadow: '0 10px 15px -3px rgba(60, 82, 178, 0.3)'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                    Ana Sayfaya Dön
                </button>
            </div>
        </div>
    );
};

export default ApproveComment;