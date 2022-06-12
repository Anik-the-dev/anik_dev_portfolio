import React from 'react';
import Achievements from './Achievements';
import Banner from './Banner';
import Contact from './Contact';
import Portfolio from './Portfolio';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Portfolio></Portfolio>
            <Achievements></Achievements>
            <Contact></Contact>
            
            
        </div>
    );
};

export default Home;