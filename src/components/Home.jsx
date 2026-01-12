import React from 'react';
import HomeIntro from './HomeIntro';
import ProfilePhoto from './ProfilePhoto';
import MouseFollower from './MouseFollower';

const Home = () => {
    return (
        <>
            <MouseFollower />
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', gap: '40px' }}>
                <HomeIntro />
                <ProfilePhoto />
            </div>
        </>
    );
};

export default Home;
