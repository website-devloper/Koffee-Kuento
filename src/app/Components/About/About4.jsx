"use client"
import Image from "next/image";
import Link from "next/link";
import { SITE } from '@/config/site';
import { useLanguage } from '@/context/LanguageContext';

const About4 = () => {
    const { t } = useLanguage();

    return (
        <section className="about-us-section fix section-padding">
        <div className="about-wrapper style1">
            <div className="container">
                <div className="about-us section-padding">
                    <div className="row">
                        <div className="col-12">
                            <div className="title-area">
                                <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                                    <Image className="me-1" src="/assets/img/icon/titleIcon.svg" alt="" width={20} height={20} />
                                    {t('aboutPage.eyebrow')}
                                    <Image className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="" width={20} height={20} />
                                </div>
                                <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                                    {t('aboutPage.title')}
                                </h2>
                                <div className="text wow fadeInUp" data-wow-delay="0.8s">
                                    <p>
                                        {t('aboutPage.p1')}
                                    </p>
                                    <p className="mt-3">
                                        {t('aboutPage.p2')}
                                    </p>
                                    <p className="mt-3">
                                        {t('aboutPage.p3a')}{' '}
                                        <strong>{SITE.rating.value}★ ({SITE.rating.count} {t('about.ratingLabel')})</strong>,{' '}
                                        {t('aboutPage.p3b')}
                                    </p>
                                </div>
                                <div className="btn-wrapper wow fadeInUp mt-4" data-wow-delay="0.9s">
                                    <Link className="theme-btn me-3" href="/menu">
                                        {t('aboutPage.btn1').toUpperCase()} <i className="bi bi-arrow-right"></i>
                                    </Link>
                                    <Link className="theme-btn" href="/contact">
                                        {t('aboutPage.btn2').toUpperCase()} <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="marquee-wrapper style-1 text-slider section-padding">
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

export default About4;
