import React from 'react';
import './main-page.css';

import Header from '../header/header.tsx';
import Banner from '../banner/banner.tsx';
import PagePlanner from '../page-planner/page-planner.tsx';

const MainPage: React.FC = () => {
    return (
        <>
            <Header />
            <Banner />
            <PagePlanner />
        </>
    );
}

export default MainPage;