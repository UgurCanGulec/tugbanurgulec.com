import React from 'react';

const About = () => {
    const brandColor = "#a61d4d";

    // Animasyon stillerini buraya tanımlıyoruz
    const animationStyles = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .animate-me {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0; /* Başlangıçta gizli */
        }
    `;

    return (
        <section
            style={{
                position: 'relative',
                paddingTop: '160px',
                paddingBottom: '80px',
                backgroundColor: '#ffffff',
                zIndex: 1
            }}
        >
            {/* Animasyon CSS'ini sayfaya enjekte ediyoruz */}
            <style>{animationStyles}</style>

            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>

                {/* 1. Üst Etiket */}
                <div className="animate-me" style={{ marginBottom: '24px', animationDelay: '0.1s' }}>
                    <span
                        style={{
                            color: brandColor,
                            fontSize: '14px',
                            fontWeight: '700',
                            letterSpacing: '2px',
                            textTransform: 'uppercase'
                        }}
                    >
                        Hakkımda
                    </span>
                </div>

                {/* 2. Fotoğraf */}
                <div className="animate-me" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '40px',
                    animationDelay: '0.3s'
                }}>
                    <div
                        style={{
                            width: '260px',
                            height: '260px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: `6px solid ${brandColor}`,
                            boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
                            position: 'relative',
                            backgroundColor: '#f8f8f8'
                        }}
                    >
                        <img
                            src="/images/hero.png"
                            alt="Tuğba Nur Güleç"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center top',
                                display: 'block'
                            }}
                        />
                    </div>
                </div>

                <div className="animate-me" style={{ maxWidth: '1000px', margin: '0 auto', animationDelay: '0.5s' }}>

                    <h2 style={{
                        fontSize: 'clamp(24px, 4vw, 36px)',
                        fontWeight: '800',
                        color: '#1a1a1a',
                        lineHeight: '1.4',
                        marginBottom: '40px',
                        fontStyle: 'italic'
                    }}>
                        "Her çocuk biricik bir dünyadır; <br />
                        <span style={{ color: brandColor }}>doğru rehberlik, o dünyadaki en parlak ışığı keşfetmektir."</span>
                    </h2>

                    <div style={{
                        fontSize: '17px',
                        color: '#4a4a4a',
                        lineHeight: '1.8',
                        marginBottom: '40px',
                        textAlign: 'justify',
                        textJustify: 'inter-word'
                    }}>
                        <p style={{ marginBottom: '20px' }}>
                            Amasya Üniversitesi Psikolojik Danışmanlık ve Rehberlik bölümünden mezun oldum. Lisans eğitimim süresince bireysel psikolojik danışma ve okul temelli rehberlik uygulamalarına yönelik staj çalışmalarında yer aldım. Bu süreçte çocuk ve ergenlerin duygusal, sosyal ve gelişimsel ihtiyaçlarını yakından gözlemleme ve uygulamalı deneyim kazanma fırsatı buldum.
                        </p>

                        <p style={{ marginBottom: '20px' }}>
                            Lisans eğitimim süresince, mesleki gelişimime katkı sağlamak amacıyla ulusal düzeyde düzenlenen Psikolojik Danışmanlık ve Rehberlik kongrelerine katıldım. Bu kongrelerde alanında uzman akademisyen ve uygulayıcılarla bir araya gelerek güncel kuramsal yaklaşımlar ve uygulamaya yönelik eğitimler alma fırsatı buldum.
                        </p>

                        <p style={{ marginBottom: '20px' }}>
                            Üniversite eğitimime ek olarak, özel bir klinik ortamında çocuk ve ergenlerle yürütülen danışmanlık süreçlerine dahil oldum. Bu deneyim, mesleki bakış açımın sahada güçlenmesine ve çocuklarla birebir çalışırken güvenli bir ilişki kurma becerimin gelişmesine katkı sağladı.
                        </p>

                        <p style={{ marginBottom: '20px' }}>
                            Mezuniyetimin ardından özel eğitim ve rehabilitasyon merkezinde görev alarak gelişimsel farklılıkları olan çocuklarla çalıştım. Bu süreçte özel gereksinimli çocukların bireysel ihtiyaçlarına uygun destek planları oluşturma, gelişimsel takip yapma ve ailelerle iş birliği içinde ilerleme konusunda yoğun deneyim edindim.
                        </p>

                        <p style={{ marginBottom: '20px' }}>
                            Almış olduğum eğitimler arasında Bilişsel Davranışçı Terapi, Oyun Terapisi, Çözüm Odaklı Kısa Süreli Terapi ve Çocuk Gelişim ve Değerlendirme Testleri yer almaktadır. Bu alanlarda edindiğim bilgi ve yetkinlikleri, çocuk ve ergenlerle yürüttüğüm danışmanlık süreçlerinde sahada aktif olarak uygulamakta; her danışanı yaşına, gelişim düzeyine ve bireysel ihtiyaçlarına göre ele alan bilimsel ve yapılandırılmış bir çalışma yaklaşımı benimsemekteyim.
                        </p>
                        <p>
                            Amacım; çocukların kendilerini güvende hissedebilecekleri bir ortamda duygularını ifade edebilmelerini sağlamak, güçlü yönlerini fark etmelerine destek olmak ve gelişim yolculuklarında onlara eşlik etmektir. Aynı zamanda aileleri de sürecin bir parçası haline getirerek, çocuğun yaşamının her alanında desteklenmesini önemsemekteyim.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;