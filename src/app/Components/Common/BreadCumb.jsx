"use client"
import Link from "next/link";
import { useLanguage } from '@/context/LanguageContext';

const BreadCumb = ({ titleKey, Title, bgimg }) => {
    const { t } = useLanguage();
    const title = titleKey ? t(titleKey) : (Title || '');

    return (
        <div className="breadcumb-section">
            <div
                className="breadcumb-wrapper"
                style={{
                    backgroundImage: `url(${bgimg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="breadcumb-content">
                                <h1 className="breadcumb-title">{title}</h1>
                                <ul className="breadcumb-menu">
                                    <li><Link href="/">{t('breadcrumb.home')}</Link></li>
                                    <li className="text-white">/</li>
                                    <li className="active">{title}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadCumb;
