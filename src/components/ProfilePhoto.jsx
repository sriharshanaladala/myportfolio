import React from 'react';
import { motion } from 'framer-motion';

const ProfilePhoto = () => {
    return (
        <motion.div
            style={{ padding: '20px' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.img
                src="/profile-photo.jpg"
                alt="Sriharsha Naladala"
                style={{ maxWidth: '250px', borderRadius: '50%', cursor: 'pointer' }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            />
        </motion.div>
    );
};

export default ProfilePhoto;
