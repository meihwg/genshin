import React from 'react';
import './main-page.css';

import Header from '../header/header.tsx';
import Banner from '../banner/banner.tsx';
import Footer from '../footer/footer.tsx';

const MainPage: React.FC = () => {
    return (
        <>
            <Banner />
            <Header />
            <Footer />
        </>
    );
}

export default MainPage;