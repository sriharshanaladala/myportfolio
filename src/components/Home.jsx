import React from 'react';
import HomeIntro from './HomeIntro';
import ProfilePhoto from './ProfilePhoto';
import MouseFollower from './MouseFollower';

const Home = () => {
    return (
        <>
            <MouseFollower />
            <div style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '40px',
                flexWrap: 'wrap',
                padding: '20px',
                minHeight: 'calc(100vh - var(--header-height, 80px))'
            }}>
                <HomeIntro />
                <ProfilePhoto />
            </div>
        </>
    );
};

export default Home;
