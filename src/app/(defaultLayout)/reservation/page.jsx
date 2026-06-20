import BreadCumb from '@/app/Components/Common/BreadCumb';
import Reservation from '@/app/Components/Reservation/Reservation';
import React from 'react';

export const metadata = {
    title: 'Réservation – Réservez votre table',
    description: 'Réservez votre table en ligne chez Koffee Kuento, Palmiers, Casablanca. Formulaire de réservation simple et rapide.',
};

const page = () => {
    return (
        <div>
            <BreadCumb bgimg="/assets/img/bg/breadcumb.jpg" Title="Réservation" />
            <Reservation />
        </div>
    );
};

export default page;
