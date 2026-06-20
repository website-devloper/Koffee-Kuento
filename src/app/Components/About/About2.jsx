"use client"
import { SITE } from '@/config/site';
import { useLanguage } from '@/context/LanguageContext';

const About2 = () => {
    const { t } = useLanguage();

    return (
        <section className="about-us-section fix section-padding pt-0">
        <div className="about-wrapper style2">
            <div className="container">
                <div className="about-us section-padding">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 d-flex align-items-center justify-content-center justify-content-xl-start">
                            <div className="about-thumb mb-5 mb-lg-0" style={{ width: '100%' }}>
                                <div className="kk-about-photo" style={{ backgroundImage: "url('/assets/img/hero/food-3.png')" }} />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mb-4">
                                <span className="kk-eyebrow">{t('about.eyebrow')}</span>
                                <h2 className="kk-section-title mt-2 text-start">{t('about.title')}</h2>
                                <p className="kk-about-body">{t('about.body')}{' '}<strong>{SITE.rating.value}★ ({SITE.rating.count} {t('about.ratingLabel')})</strong>.</p>
                            </div>
                            <div className="kk-about-features">
                                <div className="kk-about-feat">
                                    <div className="kk-about-feat__icon">
                                        <i className="bi bi-cup-hot-fill"></i>
                                    </div>
                                    <div>
                                        <h6 className="kk-about-feat__title">{t('about.box1Title')}</h6>
                                        <p className="kk-about-feat__desc">{t('about.box1Desc')}</p>
                                    </div>
                                </div>
                                <div className="kk-about-feat">
                                    <div className="kk-about-feat__icon">
                                        <i className="bi bi-basket2-fill"></i>
                                    </div>
                                    <div>
                                        <h6 className="kk-about-feat__title">{t('about.box2Title')}</h6>
                                        <p className="kk-about-feat__desc">{t('about.box2Desc')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="marquee-wrapper style-1 text-slider section-padding pt-0">
            <div className="marquee-inner to-left">
                <ul className="marqee-list d-flex">
                    <li className="marquee-item style1">
                        <span className="text-slider"></span><span className="text-slider text-style">Espresso</span>
                        <span className="text-slider"></span><span className="text-slider text-style">Brunch</span>
                        <span className="text-slider"></span><span className="text-slider text-style">Avocado Toast</span>
                        <span className="text-slider"></span><span className="text-slider text-style">Latte Art</span>
                        <span className="text-slider"></span><span className="text-slider text-style">Petit-déjeuner</span>
                        <span className="text-slider"></span><span className="text-slider text-style">Jus frais</span>
                        <span className="text-slider"></span><span className="text-slider text-style">Pâtisseries</span>
                        <span className="text-slider"></span><span className="text-slider text-style">Espresso</span>
                        <span className="text-slider"></span><span className="text-slider text-style">Brunch</span>
                        <span className="text-slider"></span><span className="text-slider text-style">Avocado Toast</span>
                        <span className="text-slider"></span><span className="text-slider text-style">Latte Art</span>
                        <span className="text-slider"></span><span className="text-slider text-style">Petit-déjeuner</span>
                        <span className="text-slider"></span><span className="text-slider text-style">Jus frais</span>
                        <span className="text-slider"></span><span className="text-slider text-style">Pâtisseries</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    );
};

export default About2;
