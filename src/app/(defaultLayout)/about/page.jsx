import About4 from '@/app/Components/About/About4';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import CtaBanner3 from '@/app/Components/CtaBanner/CtaBanner3';
import Testimonial2 from '@/app/Components/Testimonial/Testimonial2';
import React from 'react';

export const metadata = {
    title: 'À propos – Notre histoire',
    description: "Découvrez l'histoire de Koffee Kuento, café de spécialité et restaurant brunch à Palmiers, Casablanca. 4.8★ sur Google.",
};

const page = () => {
    return (
        <div>
            <BreadCumb bgimg="/assets/img/bg/breadcumb-about.png" titleKey="breadcrumb.about" />
            <About4 />
            <Testimonial2 />
            <CtaBanner3 />
        </div>
    );
};

export default page;
