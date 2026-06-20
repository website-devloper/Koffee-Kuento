"use client"
import Link from "next/link";
import { SITE } from '@/config/site';
import { useLanguage } from '@/context/LanguageContext';

const StarRating = ({ count = 4 }) => (
  <div className="kk-stars">
    {[...Array(5)].map((_, i) => (
      <i key={i} className={`bi bi-star-fill${i < count ? ' filled' : ''}`}></i>
    ))}
  </div>
);

const BestSelling2 = () => {
  const { t } = useLanguage();

  const featuredItems = [
    {
      img: '/assets/img/menu/brunch/brunch-scandinave.jpg',
      title: 'Brunch Scandinave',
      desc: 'Avocado toast, œuf, pancakes, granola, jus d\'orange',
      price: '95 MAD',
      stars: 5,
      tag: t('bestSelling.tagSignature'),
    },
    {
      img: '/assets/img/menu/plats/plat-3.jpg',
      title: 'Pollo Parmigiano',
      desc: 'Escalope dorée, sauce tomate, mozzarella fondue, pasta',
      price: '90 MAD',
      stars: 4,
      tag: t('bestSelling.tagSignature'),
    },
    {
      img: '/assets/img/menu/pizza/pizza-3.jpg',
      title: 'Pizza Margherita',
      desc: 'Sauce tomate maison, mozzarella fraîche, basilic frais',
      price: '50 MAD',
      stars: 4,
      tag: null,
    },
    {
      img: '/assets/img/menu/burgers/burger-5.jpg',
      title: 'Burger Classique',
      desc: 'Steak bœuf, fromage fondu, salade, sauce Kuento, frites',
      price: '70 MAD',
      stars: 5,
      tag: t('bestSelling.tagSignature'),
    },
    {
      img: '/assets/img/menu/desserts/dessert-1.jpg',
      title: 'Cheesecake Maison',
      desc: 'Cheesecake new-yorkais, coulis fruits rouges, kiwi frais',
      price: '40 MAD',
      stars: 4,
      tag: t('bestSelling.tagPopular'),
    },
  ];

  return (
    <section className="kk-bestselling section-padding">
      <div className="container">

        {/* Section header */}
        <div className="kk-section-head text-center mb-50">
          <span className="kk-eyebrow">{t('bestSelling.eyebrow')}</span>
          <h2 className="kk-section-title">{t('bestSelling.title')}</h2>
        </div>

        {/* Cards grid */}
        <div className="kk-bs-grid">
          {featuredItems.map((item, i) => (
            <div key={i} className="kk-bs-card">
              {/* Image */}
              <div className="kk-bs-img">
                <img src={item.img} alt={item.title} />
                {item.tag && <span className="kk-bs-tag">{item.tag}</span>}
              </div>

              {/* Body */}
              <div className="kk-bs-body">
                <div className="kk-bs-top">
                  <Link href="/menu" className="kk-bs-title">{item.title}</Link>
                  <StarRating count={item.stars} />
                </div>
                <p className="kk-bs-desc">{item.desc}</p>
                <div className="kk-bs-footer">
                  <span className="kk-bs-price">{item.price}</span>
                  <a
                    href={SITE.links.glovo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="kk-bs-btn"
                  >
                    {t('bestSelling.orderBtn')}
                    <i className="bi bi-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-50">
          <Link className="theme-btn" href="/menu">
            {t('bestSelling.viewAllBtn')} <i className="bi bi-arrow-right ms-1"></i>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default BestSelling2;
