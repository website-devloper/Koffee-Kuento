"use client"
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import { SITE } from '@/config/site';
import { useLanguage } from '@/context/LanguageContext';

const Avatar = ({ name, color }) => {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div style={{
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: 'var(--title-font, Montserrat, sans-serif)',
      fontWeight: 700,
      fontSize: '18px',
      flexShrink: 0,
    }}>
      {initials}
    </div>
  );
};

const Testimonial2 = () => {
    const { t } = useLanguage();

    const settings = {
        dots: false, infinite: true, speed: 2000, slidesToShow: 1, slidesToScroll: 1,
        arrows: false, swipeToSlide: true, autoplay: true, autoplaySpeed: 6000,
    };

    const sliderRef = useRef(null);
    const next = () => sliderRef.current.slickNext();
    const previous = () => sliderRef.current.slickPrev();

    const reviews = [
        {
            avatar: { color: '#E53935' },
            name: 'Nadia Benjelloun',
            source: 'Avis Google · il y a 2 semaines',
            rating: '★★★★★',
            content: "Je ne sais plus me passer de Koffee Kuento ! Depuis que j'ai découvert leur brunch scandinave, c'est devenu mon rituel du week-end. Le café latte est parfait — exactement comme je l'aime. Cadre cosy, musique douce, service aux petits soins. 5 étoiles sans hésitation. Une adresse que je recommande à tout le monde.",
        },
        {
            avatar: { color: '#1E88E5' },
            name: 'Yassine El Amrani',
            source: 'Avis Google · il y a 1 mois',
            rating: '★★★★★',
            content: "La meilleure pizza de Casablanca côté indépendants ! Pâte croustillante, garnissage généreux et cuisson impeccable. Mention spéciale pour la Margherita — incroyablement savoureuse. Les burgers et les pâtes sont également au top. L'équipe est sympa et le service rapide même aux heures de pointe.",
        },
        {
            avatar: { color: '#43A047' },
            name: 'Sophie Laurent',
            source: 'Avis Google · il y a 3 semaines',
            rating: '★★★★★',
            content: "Découverte absolue ! Un café-restaurant comme on en trouve rarement à Casa. Ambiance industrielle chic, plats bien travaillés et une sélection de cafés vraiment sérieuse. Le cheesecake maison est à tomber. Leur jus frais et les boissons froides sont excellents aussi. J'y reviens très bientôt !",
        },
        {
            avatar: { color: '#8E24AA' },
            name: 'Hamza Rachidi',
            source: 'Avis Google · il y a 2 mois',
            rating: '★★★★★',
            content: "Koffee Kuento c'est vraiment une belle surprise aux Palmiers. L'endroit est super bien décoré, moderne sans être froid. J'ai pris le brunch espagnol et mon ami le brunch norvégien — les deux étaient excellents. Prix vraiment raisonnables pour la qualité. On a été bien accueillis dès l'entrée.",
        },
        {
            avatar: { color: '#F4511E' },
            name: 'Meriem Alaoui',
            source: 'Avis Google · il y a 1 semaine',
            rating: '★★★★★',
            content: "Un endroit que j'adore ! Je viens souvent le matin pour mon café et à chaque fois c'est un plaisir. Le latte art est soigné, les croissants sont frais et le personnel est toujours souriant. L'espace est calme le matin, parfait pour travailler. Livraison Glovo aussi très rapide !",
        },
    ];

    return (
        <section className="testimonial-section fix section-padding bg-white">
        <div className="testimonial-wrapper style2">
            <div className="container">
                <div className="testimonial-wrap style2">
                    <div className="row gx-80 gy-5">
                        <div className="col-xl-7 order-2 order-xl-1">
                            <div className="title-area">
                                <div className="sub-title text-start wow fadeInUp" data-wow-delay="0.5s">
                                    <Image className="me-1" src="/assets/img/icon/titleIcon.svg" alt="" width={20} height={20} />
                                    {t('testimonial.eyebrow').toUpperCase()}
                                    <Image className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="" width={20} height={20} />
                                </div>
                                <h2 className="title text-start wow fadeInUp" data-wow-delay="0.7s">
                                    {SITE.rating.value}★ · {SITE.rating.count} {t('testimonial.titleSuffix')}
                                </h2>
                            </div>

                            <div className="slider-area">
                                <div className="swiper testimonialSliderTwo">
                                    <div className="swiper-wrapper">
                                    <Slider ref={sliderRef} {...settings}>
                                    {reviews.map((item, i) => (
                                        <div key={i} className="swiper-slide">
                                            <div className="testimonial-card style2">
                                                <div className="quote">
                                                    <Image src="/assets/img/icon/quote.svg" alt="" width={50} height={37} />
                                                </div>
                                                <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text)' }}>{item.content}</p>
                                                <div className="profile-box" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '20px' }}>
                                                    <Avatar name={item.name} color={item.avatar.color} />
                                                    <div>
                                                        <strong style={{ fontSize: '15px', color: 'var(--title)' }}>{item.name}</strong>
                                                        <div style={{ fontSize: '12px', color: 'var(--text2)', marginTop: '2px' }}>{item.source}</div>
                                                        <div style={{ color: '#FBBC04', fontSize: '14px', marginTop: '2px' }}>{item.rating}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    </Slider>
                                    </div>
                                    <div className="btn-wrap" style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                                        <div onClick={previous} className="arrow-prev" style={{ cursor: 'pointer', width: '44px', height: '44px', borderRadius: '50%', border: '2px solid var(--border-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                                          <i className="bi bi-arrow-left" style={{ color: 'var(--title)', fontSize: '16px' }}></i>
                                        </div>
                                        <div onClick={next} className="arrow-next" style={{ cursor: 'pointer', width: '44px', height: '44px', borderRadius: '50%', background: 'var(--theme)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
                                          <i className="bi bi-arrow-right" style={{ color: '#fff', fontSize: '16px' }}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {SITE.links.googleReviews && (
                                <div className="mt-4">
                                    <a href={SITE.links.googleReviews} target="_blank" rel="noopener noreferrer" className="theme-btn" style={{ padding: '10px 24px', fontSize: '13px' }}>
                                        {t('testimonial.readAll')} <i className="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            )}
                        </div>
                        <div className="col-xl-5 order-1 order-xl-2">
                            <div className="kk-testimonial-photo" style={{
                                backgroundImage: "url('/assets/img/hero/food-1.png')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '12px',
                                minHeight: '420px',
                                width: '100%',
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Testimonial2;
