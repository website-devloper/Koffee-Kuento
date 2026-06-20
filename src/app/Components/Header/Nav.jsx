"use client"
import Link from 'next/link';
import { SITE } from '@/config/site';
import { useLanguage } from '@/context/LanguageContext';

export default function Nav({ setMobileToggle }) {
  const close = () => setMobileToggle(false);
  const { t } = useLanguage();

  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/" onClick={close}>{t('nav.home')}</Link>
      </li>
      <li>
        <Link href="/menu" onClick={close}>{t('nav.menu')}</Link>
      </li>
      <li>
        <Link href="/about" onClick={close}>{t('nav.about')}</Link>
      </li>
      <li>
        <Link href="/gallery" onClick={close}>{t('nav.gallery')}</Link>
      </li>
      <li>
        <Link href="/contact" onClick={close}>{t('nav.contact')}</Link>
      </li>
    </ul>
  );
}
