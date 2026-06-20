"use client"
import { SITE } from '@/config/site';

const FloatingActions = () => {
    const whatsappMsg = encodeURIComponent('Bonjour Koffee Kuento, je souhaite réserver une table.');

    return (
        <>
            {/* WhatsApp float — only shown when number is configured */}
            {SITE.contact.whatsapp && (
                <a
                    href={`https://wa.me/${SITE.contact.whatsapp}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contacter sur WhatsApp"
                    style={{
                        position: 'fixed',
                        bottom: '80px',
                        right: '20px',
                        zIndex: 9999,
                        background: '#25D366',
                        color: '#fff',
                        width: '52px',
                        height: '52px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '26px',
                        boxShadow: '0 4px 16px rgba(37,211,102,0.4)',
                        textDecoration: 'none',
                        transition: 'transform 0.2s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <i className="bi bi-whatsapp"></i>
                </a>
            )}

            {/* Tap-to-call float */}
            <a
                href={`tel:${SITE.contact.phoneIntl}`}
                aria-label={`Appeler Koffee Kuento : ${SITE.contact.phoneDisplay}`}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 9999,
                    background: '#00A082',
                    color: '#fff',
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '22px',
                    boxShadow: '0 4px 16px rgba(0,160,130,0.4)',
                    textDecoration: 'none',
                    transition: 'transform 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
                <i className="bi bi-telephone-fill" style={{ color: '#fff' }}></i>
            </a>

            {/* Mobile sticky Glovo bar — only visible on small screens */}
            <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: '84px',
                zIndex: 9998,
                display: 'none',
            }} className="kk-mobile-glovo-bar">
                <a
                    href={SITE.links.glovo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        background: '#00A082',
                        color: '#fff',
                        padding: '14px 20px',
                        fontWeight: 700,
                        fontSize: '14px',
                        letterSpacing: '0.06em',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        width: '100%',
                    }}
                >
                    <i className="bi bi-bag-check-fill"></i> Commander sur Glovo
                </a>
            </div>

            <style>{`
                @media (max-width: 767px) {
                    .kk-mobile-glovo-bar { display: block !important; }
                }
            `}</style>
        </>
    );
};

export default FloatingActions;
