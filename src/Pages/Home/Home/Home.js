import React from 'react';
import Brands from '../Brands/Brands';
import HomeBanner from '../HomeBanner/HomeBanner';
import Parts from '../Parts/Parts';
import Reviews from '../Reviews/Reviews';
import BusinessSumary from './BusinessSumary/BusinessSumary';

const Home = () => {
    return (
        <div>

            <HomeBanner></HomeBanner>
            <Parts></Parts>
            <BusinessSumary></BusinessSumary>
            <Reviews></Reviews>
            <Brands></Brands>
            
        </div>
    );
};

export default Home;