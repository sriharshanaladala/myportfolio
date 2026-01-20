import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingContactButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState(null);

    const formspreeFormId = process.env.REACT_APP_FORMSPEE_FORM_ID;
    const linkedinUrl = process.env.REACT_APP_LINKEDIN_URL;

    const handleClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setForm({ name: '', email: '', subject: '', message: '' });
        setStatus(null);
    };

    const updateForm = (key, value) => {
        setForm(prev => ({ ...prev, [key]: value }));
    };

    const sendViaFormspree = async (payload) => {
        const url = `https://formspree.io/f/${formspreeFormId}`;
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error('Formspree send failed');
        return res;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const payload = {
            from_name: form.name,
            from_email: form.email,
            subject: form.subject,
            message: form.message
        };

        try {
            if (formspreeFormId) {
                await sendViaFormspree(payload);
                setStatus('sent');
            } else {
                const to = process.env.REACT_APP_EMAIL;
                const subject = encodeURIComponent(form.subject || 'Contact from portfolio');
                const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
                window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
                setStatus('mailto');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    const openLinkedIn = () => {
        window.open(linkedinUrl, '_blank', 'noopener');
    };

    return (
        <>
            <motion.div
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 1000,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
            >
                <motion.button
                    onClick={handleClick}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: 'linear-gradient(45deg, #0077be, #00aaff)',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 15px rgba(0, 119, 190, 0.4)',
                        transition: 'all 0.3s ease',
                    }}
                    whileHover={{
                        scale: 1.1,
                        boxShadow: '0 6px 20px rgba(0, 119, 190, 0.6)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                        rotate: isHovered ? 360 : 0,
                    }}
                    transition={{
                        rotate: { duration: 0.5 },
                    }}
                >
                    <motion.svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{
                            scale: isHovered ? 1.2 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </motion.svg>
                </motion.button>

                {/* Tooltip */}
                <motion.div
                    style={{
                        position: 'absolute',
                        bottom: '70px',
                        right: '0',
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        color: 'white',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        fontSize: '14px',
                        whiteSpace: 'nowrap',
                        pointerEvents: 'none',
                        opacity: 0,
                    }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 10,
                    }}
                    transition={{ duration: 0.2 }}
                >
                    Click me to contact
                    <div
                        style={{
                            position: 'absolute',
                            top: '100%',
                            right: '20px',
                            width: '0',
                            height: '0',
                            borderLeft: '6px solid transparent',
                            borderRight: '6px solid transparent',
                            borderTop: '6px solid rgba(0, 0, 0, 0.8)',
                        }}
                    ></div>
                </motion.div>
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2000,
                            padding: '20px',
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '12px',
                                padding: '24px',
                                maxWidth: '500px',
                                width: '100%',
                                maxHeight: '90vh',
                                overflowY: 'auto',
                                position: 'relative',
                            }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={closeModal}
                                style={{
                                    position: 'absolute',
                                    top: '12px',
                                    right: '12px',
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '24px',
                                    cursor: 'pointer',
                                    color: '#666',
                                    padding: '4px',
                                    borderRadius: '50%',
                                    width: '32px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                                className="close-btn"
                            >
                                ×
                            </button>

                            <h2 style={{ marginTop: 0, marginBottom: '16px', color: '#333' }}>Contact Me</h2>
                            <p style={{ marginBottom: '20px', color: '#666', fontSize: '14px' }}>
                                I'd love to hear from you! Send me a message and I'll get back to you soon.
                            </p>

                            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '12px' }}>
                                <input
                                    required
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={e => updateForm('name', e.target.value)}
                                    style={{
                                        padding: '12px',
                                        fontSize: '16px',
                                        borderRadius: '6px',
                                        border: '1px solid #ddd',
                                        outline: 'none',
                                    }}
                                />
                                <input
                                    required
                                    type="email"
                                    placeholder="Your email"
                                    value={form.email}
                                    onChange={e => updateForm('email', e.target.value)}
                                    style={{
                                        padding: '12px',
                                        fontSize: '16px',
                                        borderRadius: '6px',
                                        border: '1px solid #ddd',
                                        outline: 'none',
                                    }}
                                />
                                <input
                                    placeholder="Subject"
                                    value={form.subject}
                                    onChange={e => updateForm('subject', e.target.value)}
                                    style={{
                                        padding: '12px',
                                        fontSize: '16px',
                                        borderRadius: '6px',
                                        border: '1px solid #ddd',
                                        outline: 'none',
                                    }}
                                />
                                <textarea
                                    required
                                    placeholder="Your message"
                                    rows={4}
                                    value={form.message}
                                    onChange={e => updateForm('message', e.target.value)}
                                    style={{
                                        padding: '12px',
                                        fontSize: '16px',
                                        borderRadius: '6px',
                                        border: '1px solid #ddd',
                                        outline: 'none',
                                        resize: 'vertical',
                                    }}
                                />

                                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', marginTop: '8px' }}>
                                    <button
                                        type="submit"
                                        style={{
                                            padding: '12px 24px',
                                            fontSize: '16px',
                                            borderRadius: '6px',
                                            border: 'none',
                                            backgroundColor: '#0077be',
                                            color: 'white',
                                            cursor: 'pointer',
                                            flex: 1,
                                            minWidth: '120px',
                                        }}
                                    >
                                        Send Message
                                    </button>
                                    <button
                                        type="button"
                                        onClick={openLinkedIn}
                                        style={{
                                            padding: '12px 24px',
                                            fontSize: '16px',
                                            borderRadius: '6px',
                                            border: '1px solid #0077be',
                                            backgroundColor: 'transparent',
                                            color: '#0077be',
                                            cursor: 'pointer',
                                            flex: 1,
                                            minWidth: '120px',
                                        }}
                                    >
                                        LinkedIn
                                    </button>
                                </div>
                            </form>

                            <div style={{ marginTop: '16px', textAlign: 'center' }}>
                                {status === 'sending' && <p style={{ color: '#0077be', margin: 0 }}>Sending...</p>}
                                {status === 'sent' && <p style={{ color: 'green', margin: 0 }}>✓ Message sent successfully!</p>}
                                {status === 'mailto' && <p style={{ color: 'green', margin: 0 }}>✓ Opened your mail client</p>}
                                {status === 'error' && <p style={{ color: 'red', margin: 0 }}>✗ Failed to send. Please try again.</p>}
                            </div>

                            <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #eee' }}>
                                <p style={{ margin: '4px 0', fontSize: '14px', color: '#666' }}>
                                    Email: <a href={`mailto:${process.env.REACT_APP_EMAIL}`} style={{ color: '#0077be' }}>
                                        {process.env.REACT_APP_EMAIL}
                                    </a>
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default FloatingContactButton;