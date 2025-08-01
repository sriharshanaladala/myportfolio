import React from 'react';
import HomeIntro from './HomeIntro';
import ProfilePhoto from './ProfilePhoto';
import MouseFollower from './MouseFollower';
import WaterWaveBackground from './WaterWaveBackground';

const Home = () => {
    return (
        <>
            <WaterWaveBackground />
            <MouseFollower />
            <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', gap: '40px' }}>
                <HomeIntro />
                <ProfilePhoto />
            </div>
        </>
    );
};

export default Home;
