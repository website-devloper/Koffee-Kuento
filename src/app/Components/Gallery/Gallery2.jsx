"use client"
import Link from "next/link";
import { useLanguage } from '@/context/LanguageContext';

const Gallery2 = () => {
    const { t } = useLanguage();

    const photos = [
        { img: '/assets/img/gallery/galleryThumb2_1.jpg',  alt: 'Intérieur Koffee Kuento – espace industriel-chic',     cls: 'col-lg-5' },
        { img: '/assets/img/gallery/galleryThumb2_2.jpg',  alt: 'Café latte art maison',                                cls: 'col-lg-4' },
        { img: '/assets/img/gallery/galleryThumb2_3.jpg',  alt: 'Brunch assiette maison',                              cls: 'col-lg-3' },
        { img: '/assets/img/gallery/galleryThumb2_4.jpg',  alt: 'Cappuccino Koffee Kuento',                            cls: 'col-lg-4' },
        { img: '/assets/img/gallery/galleryThumb2_5.jpg',  alt: 'Avocado toast petit-déjeuner',                        cls: 'col-lg-4' },
        { img: '/assets/img/gallery/galleryThumb2_6.jpg',  alt: 'Ambiance café Palmiers Casablanca',                   cls: 'col-lg-4' },
        { img: '/assets/img/gallery/galleryThumb2_7.jpg',  alt: 'Pâtisseries maison Koffee Kuento',                   cls: 'col-lg-4' },
        { img: '/assets/img/gallery/galleryThumb2_8.jpg',  alt: 'Espresso de spécialité',                             cls: 'col-lg-4' },
        { img: '/assets/img/gallery/galleryThumb2_9.jpg',  alt: 'Salade fraîcheur maison',                            cls: 'col-lg-4' },
        { img: '/assets/img/gallery/galleryThumb2_10.jpg', alt: 'Bar café Koffee Kuento',                             cls: 'col-lg-5' },
        { img: '/assets/img/gallery/galleryThumb2_11.jpg', alt: 'Shakshuka brunch signature',                         cls: 'col-lg-4' },
        { img: '/assets/img/gallery/galleryThumb2_12.jpg', alt: 'Dessert cheesecake maison',                          cls: 'col-lg-3' },
    ];

    return (
        <div className="gallery-section section-padding fix">
        <div className="container">
            <div className="title-area mb-5">
                <div className="sub-title text-center">
                    <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="" />
                    {t('gallery.eyebrow').toUpperCase()}
                    <img className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="" />
                </div>
                <h2 className="title text-center">{t('gallery.title')}</h2>
                <p className="text-center" style={{color:'var(--text)', maxWidth:'560px', margin:'12px auto 0'}}>
                    {t('gallery.desc')}
                </p>
            </div>
            <div className="row gy-4 mb-4">
            {photos.map((item, i) => (
                <div key={i} className={item.cls}>
                    <div className="gallery-thumb style2" style={{aspectRatio:'4/3', overflow:'hidden', borderRadius:'6px'}}>
                        <img src={item.img} alt={item.alt} style={{width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.4s ease', display:'block'}} />
                        <div className="icon"><img src="/assets/img/icon/arrow_icon.png" alt="" /></div>
                    </div>
                </div>
            ))}
            </div>
            <div className="text-center mt-4">
                <Link href="/contact" className="theme-btn">
                    {t('gallery.btn')} <i className="bi bi-arrow-right ms-1"></i>
                </Link>
            </div>
        </div>
    </div>
    );
};

export default Gallery2;
