"use client"
import { useState } from "react";
import { menuCategories } from '@/data/menu';
import Link from "next/link";
import { SITE } from '@/config/site';

const TAG_COLORS = {
  Signature: 'var(--theme)',
  Populaire: '#C08A4E',
  Végétarien: '#4F6F52',
  Nouveau: '#2B7DBF',
};

const FoodItem4 = ({ initialCategory }) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory || menuCategories[0].id);
  const active = menuCategories.find(c => c.id === activeCategory);

  return (
    <section className="food-menu-section fix section-padding">
      <div className="container">

        <div className="title-area">
          <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
            <img className="me-1" src="/assets/img/icon/titleIcon.svg" alt="" />
            NOTRE MENU
            <img className="ms-1" src="/assets/img/icon/titleIcon.svg" alt="" />
          </div>
          <h2 className="title wow fadeInUp" data-wow-delay="0.7s">Cafés, Brunchs &amp; Saveurs Maison</h2>
          <p className="text-center text-muted mt-2" style={{ fontSize: '13px' }}>
            Prix indicatifs – à confirmer avec la direction avant lancement
          </p>
        </div>

        {/* Category tabs */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {menuCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                backgroundColor: activeCategory === cat.id ? 'var(--theme)' : 'transparent',
                color: activeCategory === cat.id ? '#fff' : 'var(--theme)',
                border: '2px solid var(--theme)',
                padding: '8px 18px',
                borderRadius: '4px',
                fontWeight: '600',
                fontSize: '13px',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div className="row gy-4">
          {active && active.items.map((item, i) => (
            <div key={i} className="col-md-6 col-xl-4">
              <div
                className="wow fadeInUp h-100"
                data-wow-delay={`${0.1 * (i % 6)}s`}
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  background: '#fff',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Image */}
                {item.img && (
                  <div style={{ height: '200px', overflow: 'hidden', flexShrink: 0 }}>
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Content */}
                <div style={{ padding: '16px 20px 20px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <div className="d-flex justify-content-between align-items-start gap-2">
                    <div className="flex-grow-1">
                      <h5 style={{ color: 'var(--title)', marginBottom: '2px', fontSize: '16px' }}>{item.name}</h5>
                      {item.nameEn && item.name !== item.nameEn && (
                        <span style={{ fontSize: '12px', color: 'var(--text2)', fontStyle: 'italic' }}>{item.nameEn}</span>
                      )}
                    </div>
                    <strong style={{ color: 'var(--theme)', fontSize: '16px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                      {item.price}
                    </strong>
                  </div>

                  <p style={{ fontSize: '13px', color: 'var(--text)', margin: '8px 0 10px', lineHeight: '1.5', flexGrow: 1 }}>
                    {item.desc}
                  </p>

                  <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mt-auto">
                    <div className="d-flex flex-wrap gap-1">
                      {item.tags && item.tags.map((tag, t) => (
                        <span key={t} style={{
                          background: TAG_COLORS[tag] || '#888',
                          color: '#fff',
                          fontSize: '11px',
                          padding: '2px 8px',
                          borderRadius: '12px',
                          fontWeight: '600',
                        }}>{tag}</span>
                      ))}
                    </div>
                    <a
                      href={SITE.links.glovo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glovo-btn"
                      style={{ padding: '6px 14px', fontSize: '12px' }}
                    >
                      <i className="bi bi-bag-check-fill me-1"></i> Commander
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Glovo CTA */}
        <div className="text-center mt-5 pt-3">
          <a href={SITE.links.glovo} target="_blank" rel="noopener noreferrer" className="glovo-btn" style={{ fontSize: '16px', padding: '14px 36px' }}>
            <i className="bi bi-bag-check-fill me-2"></i> Commander sur Glovo
          </a>
          <p className="text-muted mt-3" style={{ fontSize: '13px' }}>Livraison disponible via Glovo dans votre zone</p>
        </div>

      </div>
    </section>
  );
};

export default FoodItem4;
