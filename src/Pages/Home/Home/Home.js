import React from 'react';
import Navegation from '../../Shared/Navegation/Navegation';
import HomeBanner from '../HomeBanner/HomeBanner';
import Parts from '../Parts/Parts';

const Home = () => {
    return (
        <div>
            <Navegation></Navegation>
            <HomeBanner></HomeBanner>
            <Parts></Parts>
            
        </div>
    );
};

export default Home;