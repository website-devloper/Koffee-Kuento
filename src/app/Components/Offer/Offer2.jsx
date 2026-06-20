"use client"
import Link from "next/link";
import { useLanguage } from '@/context/LanguageContext';

const Offer2 = () => {
  const { t } = useLanguage();

  const cards = [
    {
      bg:      '/assets/img/menu/petit-dej/pdej-1.jpg',
      tag:     t('offer.card1Tag'),
      title:   t('offer.card1Title'),
      content: t('offer.card1Desc'),
      href:    '/menu?category=petit-dejeuner',
    },
    {
      bg:      '/assets/img/menu/brunch/brunch-scandinave.jpg',
      tag:     t('offer.card2Tag'),
      title:   t('offer.card2Title'),
      content: t('offer.card2Desc'),
      href:    '/menu?category=brunchs',
    },
    {
      bg:      '/assets/img/menu/hot-drinks/hot-2.jpg',
      tag:     t('offer.card3Tag'),
      title:   t('offer.card3Title'),
      content: t('offer.card3Desc'),
      href:    '/menu?category=boissons-chaudes',
    },
  ];

  return (
    <section className="kk-offer fix">
      <div className="container">
        <div className="row gy-4">
          {cards.map((card, i) => (
            <div key={i} className="col-lg-4">
              <div
                className="kk-offer__card"
                style={{ backgroundImage: `url(${card.bg})` }}
              >
                <div className="kk-offer__overlay" />
                <div className="kk-offer__body">
                  <span className="kk-offer__tag">{card.tag}</span>
                  <h3 className="kk-offer__title">{card.title}</h3>
                  <p className="kk-offer__desc">{card.content}</p>
                  <Link href={card.href} className="kk-offer__btn">
                    {t('offer.btn')} <i className="bi bi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer2;
