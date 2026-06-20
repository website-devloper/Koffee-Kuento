"use client"
import Link from "next/link";
import { SITE } from '@/config/site';
import KKLogo from '../Header/KKLogo';
import { useLanguage } from '@/context/LanguageContext';

const Footer1 = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer-section bg-title fix">
        <div className="footer-widgets-wrapper">
            <div className="container">
                <div className="footer-top">
                    <div className="row gy-4">
                        <div className={SITE.contact.email ? 'col-lg-4' : 'col-lg-6'}>
                            <div className="fancy-box">
                                <div className="item1"><i className="bi bi-geo-alt-fill"></i></div>
                                <div className="item2">
                                    <h6>{t('footer.addrLabel')}</h6>
                                    <p>{SITE.address.street}, {SITE.address.district}, {SITE.address.city}</p>
                                </div>
                            </div>
                        </div>
                        {SITE.contact.email && (
                            <div className="col-lg-4 d-flex justify-content-start justify-content-lg-end">
                                <div className="fancy-box">
                                    <div className="item1"><i className="bi bi-envelope-fill"></i></div>
                                    <div className="item2">
                                        <h6>{t('footer.emailLabel')}</h6>
                                        <p>{SITE.contact.email}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className={`${SITE.contact.email ? 'col-lg-4' : 'col-lg-6'} d-flex justify-content-start justify-content-lg-end`}>
                            <div className="fancy-box">
                                <div className="item1"><i className="bi bi-telephone-fill"></i></div>
                                <div className="item2">
                                    <h6>{t('footer.phoneLabel')}</h6>
                                    <p><a href={`tel:${SITE.contact.phoneIntl}`} className="text-white text-decoration-none">{SITE.contact.phoneDisplay}</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="single-footer-widget">
                            <div className="widget-head">
                                <Link href="/" style={{ textDecoration: 'none' }}>
                                    <KKLogo white={false} />
                                </Link>
                            </div>
                            <div className="footer-content">
                                <p>{t('footer.tagline')}</p>
                                <div className="social-icon d-flex align-items-center">
                                    {SITE.links.facebook && <a href={SITE.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="bi bi-facebook"></i></a>}
                                    {SITE.links.instagram && <a href={SITE.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="bi bi-instagram"></i></a>}
                                    {SITE.links.tiktok && <a href={SITE.links.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><i className="bi bi-tiktok"></i></a>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5">
                        <div className="single-footer-widget">
                            <div className="widget-head"><h3>{t('footer.quickLinks')}</h3></div>
                            <ul className="list-area">
                                <li><Link href="/about"><i className="bi bi-chevron-double-right"></i> {t('footer.about')}</Link></li>
                                <li><Link href="/menu"><i className="bi bi-chevron-double-right"></i> {t('footer.menu')}</Link></li>
                                <li><Link href="/gallery"><i className="bi bi-chevron-double-right"></i> {t('footer.gallery')}</Link></li>
                                <li><Link href="/contact"><i className="bi bi-chevron-double-right"></i> {t('footer.contact')}</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5">
                        <div className="single-footer-widget">
                            <div className="widget-head"><h3>{t('footer.ourMenu')}</h3></div>
                            <ul className="list-area">
                                <li><Link href="/menu?category=boissons-chaudes"><i className="bi bi-chevron-double-right"></i> {t('footer.coffees')}</Link></li>
                                <li><Link href="/menu?category=petit-dejeuner"><i className="bi bi-chevron-double-right"></i> {t('footer.breakfast')}</Link></li>
                                <li><Link href="/menu?category=brunchs"><i className="bi bi-chevron-double-right"></i> {t('footer.brunch')}</Link></li>
                                <li><Link href="/menu?category=salades"><i className="bi bi-chevron-double-right"></i> {t('footer.salads')}</Link></li>
                                <li><Link href="/menu?category=desserts"><i className="bi bi-chevron-double-right"></i> {t('footer.pastries')}</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5">
                        <div className="single-footer-widget">
                            <div className="widget-head"><h3>{t('footer.hours')}</h3></div>
                            <ul className="list-area" style={{ whiteSpace: 'nowrap' }}>
                                <li>{t('footer.hoursWd')} : <span className="text-theme-color2">07h30 – 22h00</span></li>
                                <li>{t('footer.hoursWe')} : <span className="text-theme-color2">07h30 – 22h00</span></li>
                            </ul>
                            <div className="mt-4 d-flex flex-column gap-2">
                                <a href={SITE.links.glovo} target="_blank" rel="noopener noreferrer" className="glovo-btn" style={{ justifyContent: 'center' }}>
                                    <i className="bi bi-bag-check-fill me-1"></i> {t('footer.glovo')}
                                </a>
                                <a href={`https://www.google.com/maps/dir/?api=1&destination=${SITE.geo.lat},${SITE.geo.lng}`} target="_blank" rel="noopener noreferrer" className="theme-btn" style={{ padding: '8px 16px', fontSize: '13px', justifyContent: 'center' }}>
                                    <i className="bi bi-map-fill me-1"></i> {t('footer.directions')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="footer-wrapper d-flex align-items-center justify-content-between">
                    <p>© {new Date().getFullYear()} <a href="/" style={{color:'inherit'}}>Koffee Kuento</a>. {t('footer.copyright')}</p>
                    <ul className="brand-logo">
                        <li><Link href="/contact">{t('footer.contact')}</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer1;
