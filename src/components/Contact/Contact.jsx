import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { supabase } from '../../web/supabaseClient'; 

const Contact = () => {
  const [mode, setMode] = useState('mesaj');
  const [formData, setFormData] = useState({
    fullname: '', email: '', phone: '', subject: '', message: '', comment: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (errors[id]) setErrors({ ...errors, [id]: '' });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.fullname.trim()) newErrors.fullname = 'Ad Soyad gerekli';
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta gerekli';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Geçersiz e-posta adresi';
    }
    if (mode === 'mesaj') {
      if (!formData.phone.trim()) newErrors.phone = 'Telefon gerekli';
      if (!formData.message.trim()) newErrors.message = 'Mesaj alanı boş bırakılamaz';
    } else {
      if (!formData.comment.trim()) newErrors.comment = 'Lütfen bir yorum yazın';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);

      try {
        if (mode === 'mesaj') {
          // --- KLASİK İLETİŞİM FORMU ---
          await emailjs.send(
            'service_ktj5k4i', 
            'template_gzdezma', 
            formData, 
            'gZAfwbSOkCVsKOLgq'
          );
          alert('Mesajınız iletildi!');
        } else {
          // --- YENİ YORUM SİSTEMİ ---
          
          // 1. Supabase'e kaydet (comment_id otomatik oluşacak)
          const { data, error } = await supabase
            .from('comment')
            .insert([
              { 
                user_name: formData.fullname, 
                user_email: formData.email, 
                comment_text: formData.comment 
              }
            ])
            .select(); // ID'yi yakalamak için şart

          if (error) throw error;

          // 2. Supabase'in ürettiği UUID'yi al
          const generatedId = data[0].comment_id;

          // 3. EmailJS Template Parametrelerini Hazırla
          const templateParams = {
            userName: formData.fullname,
            userEmail: formData.email,
            commentText: formData.comment,
            // Bu linke basınca onaylama işlemini yapacağımız sayfaya gidecek
            approvalLink: `https://tugbanurgulec.com/approve?id=${generatedId}`
          };

          await emailjs.send(
            'service_ktj5k4i', 
            'template_mzh6nh6', 
            templateParams, 
            'gZAfwbSOkCVsKOLgq'
          );

          alert('Yorumunuz alındı, onaylandıktan sonra yayınlanacaktır!');
        }

        // Formu sıfırla
        setFormData({ fullname: '', email: '', phone: '', subject: '', message: '', comment: '' });
      } catch (err) {
        console.error("Hata detayı:", err);
        alert('İşlem sırasında bir hata oluştu. Lütfen tekrar deneyin.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Tasarım Değişkenleri
  const accentBlue = "#3c52b2";
  const accentGreen = "#2ecc71";
  
  const switchContainer = {
    position: 'relative', display: 'flex', alignItems: 'center', width: '280px', height: '50px',
    backgroundColor: '#f1f5f9', borderRadius: '25px', margin: '25px auto', padding: '4px',
    cursor: 'pointer', userSelect: 'none', border: '1px solid #e2e8f0', zIndex: 100
  };

  const sliderBox = {
    position: 'absolute', width: 'calc(50% - 4px)', height: 'calc(100% - 8px)',
    backgroundColor: '#fff', borderRadius: '21px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: mode === 'mesaj' ? 'translateX(0)' : 'translateX(100%)',
    zIndex: 1
  };

  const switchLabel = (isActive) => ({
    flex: 1, textAlign: 'center', fontSize: '15px', fontWeight: '700', zIndex: 2,
    color: isActive ? (mode === 'mesaj' ? accentBlue : accentGreen) : '#64748b',
    transition: 'color 0.3s ease', display: 'flex', alignItems: 'center', justifyContent: 'center',
    height: '100%', pointerEvents: 'none'
  });

  const errorTextStyle = { color: '#ff0000', fontSize: '13px', marginTop: '5px', fontWeight: '500', display: 'block' };

  return (
    <section id="contact" className="i pg fh rm ji gp uq" style={{ backgroundColor: 'transparent' }}>
      {/* Arka Plan Şekilleri */}
      <img src="images/shape-06.svg" alt="Shape" className="h aa y" />
      <img src="images/shape-03.svg" alt="Shape" className="h ca u" />
      <img src="images/shape-07.svg" alt="Shape" className="h w da ee" />

      <div className="animate_top bb ze rj ki xn vq text-center">
        <h2 className="fk vj pr kk wm on/5 gq/2 bb _b">
          {mode === 'mesaj' ? 'Gelin, Tanışalım!' : 'Görüşleriniz Bizim İçin Değerli'}
        </h2>
        
        {/* Toggle Switch */}
        <div style={switchContainer} onClick={() => setMode(prev => prev === 'mesaj' ? 'yorum' : 'mesaj')}>
          <div style={sliderBox}></div>
          <div style={switchLabel(mode === 'mesaj')}>Mesaj Bırak</div>
          <div style={switchLabel(mode === 'yorum')}>Yorum Yap</div>
        </div>

        <p className="bb on/5 wo/5 hq mx-auto">
          {mode === 'mesaj' 
            ? 'Kafanıza takılan her türlü soru için bana yazabilir veya bir merhaba diyebilirsiniz.' 
            : 'Değerli görüşlerinizi ve deneyimlerinizi buradan paylaşabilirsiniz.'}
        </p>
      </div>

      <div className="i va bb ye ki xn wq jb mo">
        <div className="tc uf sn tf rn un zf xl:gap-10">
          {/* İletişim Bilgileri Sol Taraf */}
          <div className="animate_top w-full mn/5 to/3 vk sg hh sm yh rq i pg">
            <div className="fb"><h4 className="wj kk wm cc">E-posta</h4><p><a href="mailto:tugbanurglec@gmail.com">tugbanurglec@gmail.com</a></p></div>
            <div className="fb"><h4 className="wj kk wm cc">Ofisimiz</h4><p>Bolu, Merkez</p></div>
            <span className="rc nd rh tm lc fb"></span>
            <div>
              <h4 className="wj kk wm qb">Sosyal Medya</h4>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <a href="https://www.instagram.com/psk.dan.tugbanurgulec" target="_blank" rel="noopener noreferrer" style={socialIconContainer}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/tu%C4%9Fba-nur-g%C3%BCle%C3%A7-a38971317/" target="_blank" rel="noopener noreferrer" style={socialIconContainer}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0077b5" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Form Alanı Sağ Taraf */}
          <div className="animate_top w-full nn/5 vo/3 vk sg hh sm yh tq">
            <form onSubmit={handleSubmit}>
              <div className="tc sf yo ap zf ep qb">
                <div className="vd to/2">
                  <label className="rc ac">Ad Soyad</label>
                  <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi" style={errors.fullname ? {borderColor: '#ff0000'} : {}} />
                  {errors.fullname && <span style={errorTextStyle}>{errors.fullname}</span>}
                </div>
                <div className="vd to/2">
                  <label className="rc ac">E-posta</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi" style={errors.email ? {borderColor: '#ff0000'} : {}} />
                  {errors.email && <span style={errorTextStyle}>{errors.email}</span>}
                </div>
              </div>

              {mode === 'mesaj' ? (
                <>
                  <div className="tc sf yo ap zf ep qb">
                    <div className="vd to/2">
                      <label className="rc ac">Telefon</label>
                      <input type="text" id="phone" value={formData.phone} onChange={handleChange} className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi" style={errors.phone ? {borderColor: '#ff0000'} : {}} />
                      {errors.phone && <span style={errorTextStyle}>{errors.phone}</span>}
                    </div>
                    <div className="vd to/2">
                      <label className="rc ac">Konu</label>
                      <input type="text" id="subject" value={formData.subject} onChange={handleChange} className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi" />
                    </div>
                  </div>
                  <div className="fb">
                    <label className="rc ac">Mesajınız</label>
                    <textarea id="message" value={formData.message} onChange={handleChange} rows="4" className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 ci" style={errors.message ? {borderColor: '#ff0000'} : {}}></textarea>
                    {errors.message && <span style={errorTextStyle}>{errors.message}</span>}
                  </div>
                </>
              ) : (
                <div className="fb">
                  <label className="rc ac">Yorumunuz</label>
                  <textarea id="comment" value={formData.comment} onChange={handleChange} rows="6" placeholder="Görüşlerinizi paylaşın..." className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 ci" style={errors.comment ? {borderColor: '#ff0000', minHeight: '150px'} : {minHeight: '150px'}}></textarea>
                  {errors.comment && <span style={errorTextStyle}>{errors.comment}</span>}
                </div>
              )}

              <div className="tc xf">
                <button 
                  disabled={isSubmitting} 
                  className="vc rg lk gh ml il hi gi _l" 
                  style={{
                    cursor: isSubmitting ? 'not-allowed' : 'pointer', 
                    backgroundColor: mode === 'mesaj' ? accentBlue : accentGreen, 
                    border: 'none', 
                    padding: '12px 35px',
                    width: 'auto', 
                    minWidth: '180px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {isSubmitting ? 'Gönderiliyor...' : (mode === 'mesaj' ? 'Mesajımı Gönder' : 'Yorumumu Gönder')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const socialIconContainer = { display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#fff', border: '1px solid #e2e8f0' };

export default Contact;