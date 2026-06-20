import React from 'react';
import HeroBanner2 from '../Components/HeroBanner/HeroBanner2';
import Offer2 from '../Components/Offer/Offer2';
import About2 from '../Components/About/About2';
import BestSelling2 from '../Components/BestSelling/BestSelling2';
import CtaBanner2 from '../Components/CtaBanner/CtaBanner2';
import FeatureCategory1 from '../Components/FeatureCategory/FeatureCategory1';
import Testimonial2 from '../Components/Testimonial/Testimonial2';
import CtaBanner3 from '../Components/CtaBanner/CtaBanner3';

const page = () => {
    return (
        <div>
           <HeroBanner2 />
           <Offer2 />
           <About2 />
           <BestSelling2 />
           <CtaBanner2 />
           <FeatureCategory1 />
           <CtaBanner3 />
           <Testimonial2 />
        </div>
    );
};

export default page;
