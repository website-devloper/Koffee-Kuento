"use client"
import { SITE } from '@/config/site';
import { useLanguage } from '@/context/LanguageContext';

const iconBox = (icon, color = 'var(--theme)') => ({
    width: 64, height: 64, borderRadius: '50%',
    background: `${color}18`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: '26px', color, marginBottom: '16px', flexShrink: 0,
});

const Contact3 = () => {
    const { t } = useLanguage();

    const infoCards = [
        {
            icon: 'bi-geo-alt-fill',
            color: 'var(--theme)',
            title: t('contact.addrTitle'),
            content: `${SITE.address.street}, ${SITE.address.district}, ${SITE.address.city} ${SITE.address.postalCode}`,
            action: (
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${SITE.geo.lat},${SITE.geo.lng}`}
                    target="_blank" rel="noopener noreferrer" className="theme-btn mt-3"
                    style={{ padding: '8px 16px', fontSize: '13px' }}>
                    {t('contact.addrBtn')} <i className="bi bi-arrow-right"></i>
                </a>
            ),
        },
        SITE.contact.email ? {
            icon: 'bi-envelope-fill',
            color: 'var(--theme)',
            title: t('contact.emailTitle'),
            content: SITE.contact.email,
            action: (
                <a href={`mailto:${SITE.contact.email}`} className="theme-btn mt-3"
                    style={{ padding: '8px 16px', fontSize: '13px' }}>
                    {t('contact.emailBtn')} <i className="bi bi-arrow-right"></i>
                </a>
            ),
        } : null,
        {
            icon: 'bi-telephone-fill',
            color: '#00A082',
            title: t('contact.phoneTitle'),
            content: SITE.contact.phoneDisplay,
            action: (
                <a href={`tel:${SITE.contact.phoneIntl}`} className="theme-btn mt-3"
                    style={{ padding: '8px 16px', fontSize: '13px' }}>
                    {t('contact.phoneBtn')} <i className="bi bi-arrow-right"></i>
                </a>
            ),
        },
        {
            icon: 'bi-clock-fill',
            color: 'var(--theme2)',
            title: t('contact.hoursTitle'),
            content: `${t('contact.hoursLabel')} : ${SITE.hours.open} – ${SITE.hours.close}`,
        },
    ].filter(Boolean);

    const colClass = infoCards.length === 4 ? 'col-md-6 col-xl-3' : 'col-md-6 col-lg-4';

    return (
        <div>
        <div className="contact-us-section section-padding fix">
            <div className="contact-box-wrapper style1">
                <div className="container">
                    <div className="row gy-4">
                        {infoCards.map((card, i) => (
                            <div key={i} className={colClass}>
                                <div className="contact-box style1" style={{ textAlign: 'center' }}>
                                    <div className="contact-icon" style={{ display: 'flex', justifyContent: 'center' }}>
                                        <div style={iconBox(card.icon === 'bi-telephone-fill' ? '#00A082' : card.icon === 'bi-clock-fill' ? 'var(--theme2)' : 'var(--theme)')}>
                                            <i className={`bi ${card.icon}`}></i>
                                        </div>
                                    </div>
                                    <h3 className="title">{card.title}</h3>
                                    <p>{card.content}</p>
                                    {card.action}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-5">
                        <a href={SITE.links.glovo} target="_blank" rel="noopener noreferrer" className="glovo-btn" style={{ fontSize: '16px', padding: '14px 32px' }}>
                            <i className="bi bi-bag-check-fill me-2"></i> {t('contact.glovo')}
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="contact-form-section section-padding pt-0 fix">
            <div className="contact-form-wrapper style2">
                <div className="container">
                    <div className="row gx-60 gy-5 align-items-center">
                        <div className="col-xl-6">
                            <div style={{
                                backgroundImage: "url('/assets/img/bg/breadcumb-contact.png')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                width: '100%',
                                height: '480px',
                                borderRadius: '16px',
                                boxShadow: '0 8px 40px rgba(43,33,26,0.18)',
                            }} />
                        </div>
                        <div className="col-xl-6">
                            <div className="contact-form style2">
                                <h2>{t('contact.formTitle')}</h2>
                                <form className="row" action="#">
                                    <div className="col-md-6">
                                        <input type="text" placeholder={t('contact.namePh')} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" placeholder={t('contact.emailPh')} />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="tel" placeholder={t('contact.phonePh')} />
                                    </div>
                                    <div className="col-md-6">
                                        <select name="sujet" className="single-select" aria-label={t('contact.subjectPh')}>
                                            <option value="">{t('contact.subjectPh')}</option>
                                            <option value="reservation">{t('contact.opt1')}</option>
                                            <option value="info">{t('contact.opt2')}</option>
                                            <option value="evenement">{t('contact.opt3')}</option>
                                            <option value="autre">{t('contact.opt4')}</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <textarea id="message" className="form-control" placeholder={t('contact.messagePh')} rows="5"></textarea>
                                    </div>
                                    <div className="col-12 form-group mb-0">
                                        <button className="theme-btn w-100">{t('contact.sendBtn').toUpperCase()} <i className="bi bi-arrow-right"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="map-wrapper contact-area-map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8!2d-7.6300481!3d33.5797571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d34e8287c45d%3A0x8dcab694e6e5658e!2sCaf%C3%A9%20Restaurant%20KOFFEE%20KUENTO!5e0!3m2!1sfr!2sma!4v1700000000000"
                height="550"
                loading="lazy"
                style={{ width: '100%', border: 0 }}
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                title="Koffee Kuento sur Google Maps"
            ></iframe>
        </div>
        </div>
    );
};

export default Contact3;
