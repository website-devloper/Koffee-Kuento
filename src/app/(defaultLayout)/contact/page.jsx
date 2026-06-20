import BreadCumb from '@/app/Components/Common/BreadCumb';
import Contact3 from '@/app/Components/Contact/Contact3';
import React from 'react';

export const metadata = {
    title: 'Contact – Nous trouver & Nous écrire',
    description: 'Contactez Koffee Kuento. Adresse : Palmiers, Casablanca. Tél : 05 22 98 30 39. Ouvert 07h30–22h00, 7j/7.',
};

const page = () => {
    return (
        <div>
            <BreadCumb bgimg="/assets/img/bg/breadcumb-contact.png" titleKey="breadcrumb.contact" />
            <Contact3 />
        </div>
    );
};

export default page;
