import { SITE } from '@/config/site';

const Reservation = () => {
    return (
        <div className="reservation-section section-padding fix">
        <div className="reservation-wrapper">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-xl-6 d-flex align-items-center">
                        <div className="get-in-touch">
                            <h2>Réservez votre table</h2>
                            <p className="desc">
                                Profitez d&apos;une expérience café &amp; brunch dans notre espace industriel-chic des Palmiers. Réservez en ligne ou contactez-nous directement.
                            </p>
                            <div className="contact-info-wrapper">
                                <div className="contact-info">
                                    <h5>Téléphone</h5>
                                    <p><a href={`tel:${SITE.contact.phoneIntl}`} style={{color:'inherit'}}>{SITE.contact.phoneDisplay}</a></p>
                                </div>
                                <div className="contact-info">
                                    <h5>Email</h5>
                                    <p>{SITE.contact.email || 'À confirmer avec le propriétaire'}</p>
                                </div>
                            </div>
                            <div className="contact-info-wrapper">
                                <div className="contact-info">
                                    <h5>Adresse</h5>
                                    <p>{SITE.address.street}, {SITE.address.district}, {SITE.address.city}</p>
                                </div>
                                <div className="contact-info">
                                    <h5>Horaires</h5>
                                    <p>Lun – Dim : {SITE.hours.open} – {SITE.hours.close}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="reservation-form">
                            <div className="contact-form style2">
                                <h2>Créer une <span className="text-theme-color">Réservation</span></h2>
                                <form className="row" action="#">
                                    <input type="text" name="honeypot" style={{display:'none'}} tabIndex="-1" autoComplete="off" />
                                    <div className="col-md-6">
                                        <label className="mb-2" htmlFor="res-date">Date *</label>
                                        <input id="res-date" type="date" name="date" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="mb-2" htmlFor="res-time">Heure *</label>
                                        <input id="res-time" type="time" name="time" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="mb-2" htmlFor="res-phone">Téléphone *</label>
                                        <input id="res-phone" type="tel" name="phone" placeholder="06 xx xx xx xx" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="mb-2" htmlFor="res-guests">Nombre de convives *</label>
                                        <input id="res-guests" type="number" name="guests" min="1" max="20" placeholder="ex. 2" required />
                                    </div>
                                    <div className="col-md-12">
                                        <label className="mb-2" htmlFor="res-name">Nom complet *</label>
                                        <input id="res-name" type="text" name="name" placeholder="Prénom & Nom" required />
                                    </div>
                                    <div className="col-12">
                                        <textarea id="res-message" name="message" className="form-control" placeholder="Précisions, allergies, occasion spéciale..." rows="4"></textarea>
                                    </div>
                                    <div className="col-12 form-group mb-0">
                                        <button className="theme-btn w-100">RÉSERVER UNE TABLE <i className="bi bi-arrow-right bg-transparent text-white"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Reservation;
