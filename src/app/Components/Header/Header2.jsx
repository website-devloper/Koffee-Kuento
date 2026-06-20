"use client"
import { useEffect, useState } from 'react';
import Nav from './Nav';
import Link from 'next/link';
import KKLogo from './KKLogo';
import { SITE } from '@/config/site';
import { useLanguage } from '@/context/LanguageContext';

export default function Header2({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState('');
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const { t, lang, toggleLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos && currentScrollPos > 80) {
        setIsSticky('cs-gescout_sticky');
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky');
      } else {
        setIsSticky('');
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <div>
      <header
        className={`cs_site_header header_style_2 cs_style_1 header_sticky_style1 ${variant || ''} cs_sticky_header cs_site_header_full_width ${mobileToggle ? 'cs_mobile_toggle_active' : ''} ${isSticky}`}
      >
        <div className="cs_top_header">
          <div className="container">
            <div className="cs_top_header_in">
              <div className="cs_top_header_left header-info">
                <ul className="cs_top_nav d-flex flex-wrap align-items-center cs_fs_12 text-white m-0 p-0">
                  <li><i className="bi bi-geo-alt-fill me-1"></i>{SITE.address.district}, {SITE.address.city}</li>
                  <li><i className="bi bi-alarm me-1"></i>{t('header.open')} {SITE.hours.open} – {SITE.hours.close}</li>
                  <li>
                    <a href={`tel:${SITE.contact.phoneIntl}`} className="text-white text-decoration-none">
                      <i className="bi bi-telephone-fill me-1"></i>{SITE.contact.phoneDisplay}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="cs_top_header_right">
                <div className="cs_header_social_links_wrap">
                  <div className="cs_header_social_links top-header-social-icon d-flex align-items-center">
                    {(SITE.links.facebook || SITE.links.instagram || SITE.links.tiktok) && (
                      <>
                        <span className="me-2">{t('header.follow')}</span>
                        <ul className="me-3">
                          {SITE.links.facebook && <li><a href={SITE.links.facebook} target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a></li>}
                          {SITE.links.instagram && <li><a href={SITE.links.instagram} target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a></li>}
                          {SITE.links.tiktok && <li><a href={SITE.links.tiktok} target="_blank" rel="noopener noreferrer"><i className="bi bi-tiktok"></i></a></li>}
                        </ul>
                      </>
                    )}
                    <div className="lang-toggle" style={{ paddingLeft: '4px' }}>
                      <button onClick={() => toggleLang('fr')} style={{ background: 'transparent', border: 'none', color: lang === 'fr' ? '#fff' : 'rgba(255,255,255,0.6)', fontWeight: lang === 'fr' ? 'bold' : 'normal', padding: '0 5px' }}>FR</button>
                      <span className="text-white">|</span>
                      <button onClick={() => toggleLang('en')} style={{ background: 'transparent', border: 'none', color: lang === 'en' ? '#fff' : 'rgba(255,255,255,0.6)', fontWeight: lang === 'en' ? 'bold' : 'normal', padding: '0 5px' }}>EN</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" href="/" style={{ textDecoration: 'none' }}>
                  <KKLogo white={false} />
                </Link>
              </div>
              <div className="cs_main_header_center">
                <div className="cs_nav cs_primary_font fw-medium">
                  <span
                    className={mobileToggle ? 'cs-munu_toggle cs_teggle_active' : 'cs-munu_toggle'}
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                  <Nav setMobileToggle={setMobileToggle} />
                </div>
              </div>
              <div className="cs_main_header_right">
                <div className="header-btn d-flex align-items-center">
                  <div className="main-button">
                    <a href={SITE.links.glovo} target="_blank" rel="noopener noreferrer" className="glovo-btn">
                      {t('header.orderGlovo')} <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="cs_site_header_spacing_130"></div>
    </div>
  );
}
