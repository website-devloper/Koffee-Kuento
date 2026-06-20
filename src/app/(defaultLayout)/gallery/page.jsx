import BreadCumb from '@/app/Components/Common/BreadCumb';
import Gallery2 from '@/app/Components/Gallery/Gallery2';
import React from 'react';

export const metadata = {
    title: 'Galerie – Découvrez notre espace',
    description: 'Parcourez la galerie photo de Koffee Kuento : intérieur industriel-chic, cafés de spécialité, brunch maison et plats présentés avec soin.',
};

const page = () => {
    return (
        <div>
            <BreadCumb bgimg="/assets/img/bg/breadcumb-gallery.png" titleKey="breadcrumb.gallery" />
            <Gallery2 />
        </div>
    );
};

export default page;
