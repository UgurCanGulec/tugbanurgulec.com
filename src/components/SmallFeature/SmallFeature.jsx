import React from 'react';

const SmallFeature = () => {
  const features = [
    {
      id: 1,
      icon: "images/icon-01.svg",
      title: "7/24 Destek",
      description: "İhtiyaç duyduğunuz her an yanınızdayız.",
      colorClass: "mh" // Şablonun kendi pembe/mor tonu
    },
    {
      id: 2,
      icon: "images/icon-02.svg",
      title: "Sorumluluk",
      description: "Sürecinizin her adımında yanınızdayız.",
      colorClass: "nh" // Şablonun yeşil tonu
    },
    {
      id: 3,
      icon: "images/icon-03.svg",
      title: "Birebir İletişim",
      description: "Etkili yöntemlerle, her danışanımıza özel ve birebir ilgi sunuyoruz.",
      colorClass: "oh" // Şablonun turuncu tonu
    }
  ];

  return (
    <section id="features">
      <div className="bb ze ki yn 2xl:ud-px-12.5">
        <div className="tc uf zo xf ap zf bp mq">
          {features.map((item) => (
            <div key={item.id} className="animate_top kn to/3 tc cg oq">
              {/* İkon Kapsayıcı - Renk sınıfı dinamik geliyor */}
              <div className={`tc wf xf cf ae cd rg ${item.colorClass}`}>
                <img src={item.icon} alt="Icon" />
              </div>
              
              <div>
                <h4 className="ek yj go kk wm xb">
                  {item.title}
                </h4>
                <p>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmallFeature;