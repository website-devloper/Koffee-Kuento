"use client"
import Link from "next/link";
import { useLanguage } from '@/context/LanguageContext';

const CtaBanner2 = () => {
  const { t } = useLanguage();

  return (
    <section className="kk-split fix section-padding">
      <div className="container">
        <div className="row g-0 align-items-stretch kk-split__wrap">

          <div className="col-lg-5 d-none d-lg-block">
            <div
              className="kk-split__photo"
              style={{ backgroundImage: "url('/assets/img/gallery/galleryThumb2_1.jpg')" }}
            />
          </div>

          <div className="col-lg-7">
            <div className="kk-split__content">
              <span className="kk-split__eyebrow">{t('ctaBanner2.eyebrow')}</span>
              <h2 className="kk-split__heading">
                {t('ctaBanner2.heading')}
              </h2>
              <p className="kk-split__body">
                {t('ctaBanner2.body')}
              </p>
              <div className="kk-split__actions">
                <Link className="theme-btn" href="/about">
                  {t('ctaBanner2.btn1')} <i className="bi bi-arrow-right ms-1"></i>
                </Link>
                <Link className="theme-btn kk-outline-btn" href="/contact">
                  {t('ctaBanner2.btn2')} <i className="bi bi-calendar-check ms-1"></i>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CtaBanner2;
