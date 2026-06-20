"use client"
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { useLanguage } from '@/context/LanguageContext';

const FeatureCategory1 = () => {
  const { t } = useLanguage();

  const settings = {
    dots: false, infinite: true, speed: 2000, slidesToShow: 5, slidesToScroll: 1,
    arrows: false, swipeToSlide: true, autoplay: true, autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1399, settings: { slidesToShow: 4 } },
      { breakpoint: 1199, settings: { slidesToShow: 3 } },
      { breakpoint: 575, settings: { slidesToShow: 2 } },
    ],
  };

  const categories = [
    { img: '/assets/img/menu/pizza/pizza-3.jpg',             title: 'Kuento Pizzas',    desc: t('categories.pizzaDesc'),  id: 'pizzas' },
    { img: '/assets/img/menu/burgers/burger-7.jpg',          title: 'Kuento Burgers',   desc: t('categories.burgerDesc'), id: 'burgers' },
    { img: '/assets/img/menu/hot-drinks/hot-2.jpg',          title: 'Boissons Chaudes', desc: t('categories.drinksDesc'), id: 'boissons-chaudes' },
    { img: '/assets/img/menu/salades/salade-3.jpg',          title: 'Salades',          desc: t('categories.saladsDesc'), id: 'salades' },
    { img: '/assets/img/menu/brunch/brunch-scandinave.jpg',  title: 'Brunchs',          desc: t('categories.brunchDesc'), id: 'brunchs' },
    { img: '/assets/img/menu/pates/pates-1.jpg',             title: 'Pâtes',            desc: t('categories.pastaDesc'),  id: 'pates' },
  ];

  const marqueeItems = [
    'Brunch Scandinave', 'Pizza Margherita', 'Pollo Parmigiano',
    'Burger Classique', 'Iced Mocha', 'Tagliatelles', 'Cheesecake',
    'Crêpe Nutella', 'Saumon Curry', 'Latte Art',
  ];

  return (
    <section className="popular-dishes-section fix section-padding">
      <div className="popular-dishes-wrapper style3">
        <div className="container1">
          <div className="title-area">
            <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
              <Image className="me-1" src="/assets/img/icon/titleIcon.svg" alt="" width={20} height={20} />
              {t('categories.eyebrow').toUpperCase()}
              <Image className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="" width={20} height={20} />
            </div>
            <h2 className="title wow fadeInUp" data-wow-delay="0.7s">{t('categories.title')}</h2>
          </div>

          <div className="slider-area">
            <div className="swiper popularDishesSliderOne">
              <div className="swiper-wrapper cs_slider_gap_301">
                <Slider {...settings}>
                  {categories.map((item, i) => (
                    <div key={i} className="swiper-slide">
                      <div className="dishes-card style3">
                        <div className="dishes-thumb">
                          <img src={item.img} alt={item.title} style={{ objectFit: 'cover' }} />
                          <div className="view-more">
                            <Link href={`/menu?category=${item.id}`}><h3>{t('categories.viewMore').toUpperCase()}</h3></Link>
                          </div>
                        </div>
                        <div className="dishes-content">
                          <Link href={`/menu?category=${item.id}`}><h3>{item.title}</h3></Link>
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="marquee-wrapper style-1 text-slider section-padding pt-0 mt-5">
        <div className="marquee-inner to-left">
          <ul className="marqee-list d-flex">
            <li className="marquee-item style1">
              {[...marqueeItems, ...marqueeItems].map((text, i) => (
                <span key={i} className="text-slider text-style">{text}</span>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeatureCategory1;
