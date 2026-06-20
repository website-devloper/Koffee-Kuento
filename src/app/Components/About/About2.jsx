"use client"
import Image from 'next/image';
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
                            <div className="title-area">
                                <div className="sub-title text-start wow fadeInUp" data-wow-delay="0.5s">
                                    <Image className="me-1" src="/assets/img/icon/titleIcon.svg" alt="" width={20} height={20} />
                                    {t('about.eyebrow')}
                                    <Image className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="" width={20} height={20} />
                                </div>
                                <h2 className="title text-start wow fadeInUp" data-wow-delay="0.7s">
                                    {t('about.title')}
                                </h2>
                                <div className="text text-start wow fadeInUp" data-wow-delay="0.8s">
                                    {t('about.body')}{' '}
                                    <strong>{SITE.rating.value}★ ({SITE.rating.count} {t('about.ratingLabel')})</strong>.
                                </div>
                            </div>
                            <div className="fancy-box-wrapper">
                                <div className="fancy-box">
                                    <div className="item">
                                        <Image src="/assets/img/icon/aboutIcon1_1.svg" alt="" width={36} height={36} />
                                    </div>
                                    <div className="item">
                                        <h6>{t('about.box1Title')}</h6>
                                        <p>{t('about.box1Desc')}</p>
                                    </div>
                                </div>
                                <div className="fancy-box">
                                    <div className="item">
                                        <Image src="/assets/img/icon/aboutIcon1_2.svg" alt="" width={36} height={36} />
                                    </div>
                                    <div className="item">
                                        <h6>{t('about.box2Title')}</h6>
                                        <p>{t('about.box2Desc')}</p>
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
