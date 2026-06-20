"use client"
import Image from "next/image";
import Link from "next/link";
import { SITE } from '@/config/site';
import { useLanguage } from '@/context/LanguageContext';

const BestSelling2 = () => {
  const { t } = useLanguage();

  const featuredItems = [
    {
      img: '/assets/img/menu/brunch/brunch-scandinave.jpg',
      title: 'Brunch Scandinave',
      content: 'Avocado toast, œuf, pancakes, salade, granola, jus d\'orange',
      price: '95 MAD',
      tag: t('bestSelling.tagSignature'),
    },
    {
      img: '/assets/img/menu/plats/plat-3.jpg',
      title: 'Pollo Parmigiano',
      content: 'Escalope dorée, sauce tomate, mozzarella fondue, pasta + purée',
      price: '90 MAD',
      tag: t('bestSelling.tagSignature'),
    },
    {
      img: '/assets/img/menu/pizza/pizza-3.jpg',
      title: 'Pizza Margherita',
      content: 'Sauce tomate maison, mozzarella fraîche, basilic frais',
      price: '50 MAD',
      tag: null,
    },
    {
      img: '/assets/img/menu/burgers/burger-5.jpg',
      title: 'Burger Classique',
      content: 'Steak bœuf, fromage fondu, salade, sauce Kuento + frites',
      price: '70 MAD',
      tag: t('bestSelling.tagSignature'),
    },
    {
      img: '/assets/img/menu/desserts/dessert-1.jpg',
      title: 'Cheesecake Maison',
      content: 'Cheesecake new-yorkais, coulis fruits rouges, kiwi frais',
      price: '40 MAD',
      tag: t('bestSelling.tagPopular'),
    },
  ];

  return (
    <section className="popular-dishes-section fix section-padding pt-0">
      <div className="popular-dishes-wrapper-container">
        <div className="container">
          <div className="popular-dishes-wrapper style2 section-padding bg-white">
            <div className="container">
              <div className="title-area">
                <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                  <Image className="me-1" src="/assets/img/icon/titleIcon.svg" alt="" width={20} height={20} />
                  {t('bestSelling.eyebrow').toUpperCase()}
                  <Image className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="" width={20} height={20} />
                </div>
                <h2 className="title wow fadeInUp" data-wow-delay="0.7s">{t('bestSelling.title')}</h2>
              </div>

              <div className="dishes-card-wrap style1 mb-60">
                {featuredItems.map((item, i) => (
                  <div key={i} className="dishes-card style2 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="dishes-thumb">
                      <img src={item.img} alt={item.title} style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="dishes-content">
                      <Link href="/menu"><h3>{item.title}</h3></Link>
                      <div className="star">
                        <Image src="/assets/img/icon/star2.svg" alt="★★★★★" width={86} height={16} />
                      </div>
                      <div className="text">{item.content}</div>
                      <h6>{item.price}</h6>
                      <a href={SITE.links.glovo} target="_blank" rel="noopener noreferrer" className="glovo-btn" style={{ padding: '8px 14px', fontSize: '13px' }}>
                        {t('bestSelling.orderBtn')} <i className="bi bi-bag-check-fill"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="btn-wrapper">
                <Link className="theme-btn" href="/menu">
                  {t('bestSelling.viewAllBtn').toUpperCase()} <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSelling2;
