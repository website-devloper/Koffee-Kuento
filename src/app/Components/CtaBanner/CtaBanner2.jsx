"use client"
import Link from "next/link";
import { useLanguage } from '@/context/LanguageContext';

const CtaBanner2 = () => {
  const { t } = useLanguage();

  return (
    <section className="kk-split">
      <div className="kk-split__inner">

        {/* Left — photo */}
        <div
          className="kk-split__photo"
          style={{ backgroundImage: "url('/assets/img/gallery/galleryThumb2_1.jpg')" }}
        >
          <div className="kk-split__photo-overlay" />
        </div>

        {/* Right — content */}
        <div className="kk-split__content">
          <span className="kk-split__eyebrow">{t('ctaBanner2.eyebrow')}</span>
          <h2 className="kk-split__heading">{t('ctaBanner2.heading')}</h2>
          <p className="kk-split__body">{t('ctaBanner2.body')}</p>

          <div className="kk-split__stats">
            <div className="kk-split__stat">
              <strong>4.8★</strong>
              <span>111 avis Google</span>
            </div>
            <div className="kk-split__stat-div" />
            <div className="kk-split__stat">
              <strong>07h30</strong>
              <span>Ouvert 7j/7</span>
            </div>
            <div className="kk-split__stat-div" />
            <div className="kk-split__stat">
              <strong>Palmiers</strong>
              <span>Casablanca</span>
            </div>
          </div>

          <div className="kk-split__actions">
            <Link className="theme-btn" href="/about">
              {t('ctaBanner2.btn1')} <i className="bi bi-arrow-right ms-1"></i>
            </Link>
            <Link className="kk-split__link" href="/contact">
              {t('ctaBanner2.btn2')} <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CtaBanner2;
