"use client"
import Link from "next/link";
import Slider from "react-slick";
import { SITE } from '@/config/site';
import { useLanguage } from '@/context/LanguageContext';

const HeroBanner2 = () => {
  const { t } = useLanguage();

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 5500,
    pauseOnHover: false,
  };

  const slides = [
    {
      bg: '/assets/img/hero/food-1.png',
      label: t('hero.slide1Label'),
      title: t('hero.slide1Title'),
      btn1: { label: t('hero.slide1Btn1'), href: '/menu' },
      btn2: { label: t('hero.slide1Btn2'), href: SITE.links.glovo, external: true },
    },
    {
      bg: '/assets/img/hero/food-2.png',
      label: t('hero.slide2Label'),
      title: t('hero.slide2Title'),
      btn1: { label: t('hero.slide2Btn1'), href: '/menu' },
      btn2: { label: t('hero.slide2Btn2'), href: SITE.links.glovo, external: true },
    },
    {
      bg: '/assets/img/hero/food-3.png',
      label: t('hero.slide3Label'),
      title: t('hero.slide3Title'),
      btn1: { label: t('hero.slide3Btn1'), href: '/about' },
      btn2: { label: t('hero.slide3Btn2'), href: '/contact', external: false },
    },
  ];

  return (
    <section className="kk-hero fix">
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i}>
            <div
              className="kk-hero__slide"
              style={{
                backgroundImage: `url(${slide.bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="kk-hero__overlay" />
              <div className="container h-100">
                <div className="kk-hero__content">
                  <span className="kk-hero__label">{slide.label}</span>
                  <h1 className="kk-hero__title">
                    {slide.title.split('\n').map((line, j) => (
                      <span key={j}>{line}<br /></span>
                    ))}
                  </h1>
                  <div className="kk-hero__btns">
                    <Link className="theme-btn kk-hero__btn-primary" href={slide.btn1.href}>
                      {slide.btn1.label} <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                    <a
                      className={slide.btn2.href === SITE.links.glovo ? 'glovo-btn' : 'theme-btn kk-hero__btn-outline'}
                      href={slide.btn2.href}
                      target={slide.btn2.external !== false ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                    >
                      {slide.btn2.href === SITE.links.glovo && <i className="bi bi-bag-check-fill me-1"></i>}
                      {slide.btn2.label}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroBanner2;
