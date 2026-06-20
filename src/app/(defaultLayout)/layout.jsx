import React from 'react';
import Header2 from '../Components/Header/Header2';
import Footer1 from '../Components/Footer/Footer1';
import FloatingActions from '../Components/Common/FloatingActions';

const DefaultLayout = ({ children }) => {
    return (
        <div className='main-page-area2 bg-color2'>
            <Header2></Header2>
            {children}
            <Footer1></Footer1>
            <FloatingActions />
        </div>
    );
};

export default DefaultLayout;
