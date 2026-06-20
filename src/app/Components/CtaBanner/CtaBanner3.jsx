"use client"
import Link from "next/link";
import { SITE } from '@/config/site';
import { useLanguage } from '@/context/LanguageContext';

const CtaBanner3 = () => {
  const { t } = useLanguage();

  return (
    <section
      className="kk-delivery fix"
      style={{
        backgroundImage: "url('/assets/img/menu/brunch/brunch-complet.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="kk-delivery__overlay" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <span className="kk-delivery__eyebrow">
              <i className="bi bi-bag-check-fill me-2"></i>{t('ctaBanner3.eyebrow')}
            </span>
            <h2 className="kk-delivery__heading">
              {t('ctaBanner3.heading')}
            </h2>
            <p className="kk-delivery__body">
              {t('ctaBanner3.body')}
            </p>
            <div className="kk-delivery__actions">
              <a
                href={SITE.links.glovo}
                target="_blank"
                rel="noopener noreferrer"
                className="glovo-btn kk-delivery__glovo"
              >
                <i className="bi bi-bag-check-fill me-2"></i> {t('ctaBanner3.btn1')}
              </a>
              <Link href="/menu" className="theme-btn kk-delivery__reserve">
                {t('ctaBanner3.btn2')} <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner3;
