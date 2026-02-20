import React from "react";
import Hero from "../components/Hero/Hero";
import SmallFeature from "../components/SmallFeature/SmallFeature";
import MainAbout from "../components/MainAbout/MainAbout";
import Contact from "../components/Contact/Contact";
import Testimonials from "../components/Testimonials/Testimonials";

const Home = () => {
    // Ana sayfa için özel yumuşak geçiş animasyonu
    const homeAnimationStyles = `
        @keyframes homeFadeInUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        .home-animate {
            animation: homeFadeInUp 1s cubic-bezier(0.21, 0.6, 0.35, 1) forwards;
            opacity: 0;
        }
    `;

    return (
        <main>
            <style>{homeAnimationStyles}</style>

            <div className="home-animate" style={{ animationDelay: '0.3s' }}>
                <Hero />
            </div>

            <div className="home-animate" style={{ animationDelay: '0.4s' }}>
                <SmallFeature />
            </div>

            <div className="home-animate" style={{ animationDelay: '0.7s' }}>
                <MainAbout />
            </div>

            <div className="home-animate" style={{ animationDelay: '1s' }}>
                <Contact />
            </div>

            <div className="home-animate" style={{ animationDelay: '1.3s' }}>
                <Testimonials />
            </div>
        </main>
    );
};

export default Home;