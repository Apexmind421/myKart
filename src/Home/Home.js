//import Banner1 from './Banner/MI01.jpg';
//import Banner2 from './TV01.jpeg';
//import Banner4 from './Banner04.jpg';
//import Banner5 from './Banner05.jpg';

import React from 'react';
import './Home.css';
import Banner from './Banner/Banner';
import Deals from './Deals/Deals'

function Home() {
    return (
        <div className="home">
            <Banner/>
            <Deals/>
        </div>
    );
}

export default Home;
