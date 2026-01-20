import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Configuration: to enable direct sends from the client using Formspree,
// provide your Formspree form ID below (e.g., 'your-form-id').
// Sign up at https://formspree.io/ and create a form.
// If you do NOT provide this, the form will fall back to creating a mailto: link.
const formspreeFormId = process.env.REACT_APP_FORMSPEE_FORM_ID; // e.g. 'xpznqkwe'

// LinkedIn URL
const linkedinUrl = process.env.REACT_APP_LINKEDIN_URL;

const Contact = () => {
	const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
	const [status, setStatus] = useState(null);
	const navigate = useNavigate();

	const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

	const sendViaFormspree = async (payload) => {
		// Formspree endpoint
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
				// fallback: open user's mail client with prefilled mailto link
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
		<div style={{ maxWidth: '800px', margin: '32px auto', padding: '20px', width: '90%' }}>
			<div style={{ marginBottom: '20px' }}>
				<button
					onClick={() => navigate('/')}
					style={{
						padding: '8px 16px',
						borderRadius: '5px',
						border: '1px solid #0077be',
						backgroundColor: 'transparent',
						color: '#0077be',
						cursor: 'pointer',
						fontSize: '14px',
						transition: 'all 0.3s ease'
					}}
					className="back-home-btn"
				>
					← Back to Home
				</button>
			</div>
			<h1>Contact</h1>
			<p>If you'd like to reach me directly, use the form below. Recruiters can also connect with me on LinkedIn.</p>

			<form onSubmit={handleSubmit} style={{ display: 'grid', gap: 10 }}>
				<input required placeholder="Your name" value={form.name} onChange={e=>update('name', e.target.value)} style={{ padding: '12px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }} />
				<input required type="email" placeholder="Your email" value={form.email} onChange={e=>update('email', e.target.value)} style={{ padding: '12px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }} />
				<input placeholder="Subject" value={form.subject} onChange={e=>update('subject', e.target.value)} style={{ padding: '12px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }} />
				<textarea required placeholder="Message" rows={6} value={form.message} onChange={e=>update('message', e.target.value)} style={{ padding: '12px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }} />

				<div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
					<button type="submit" style={{ padding: '12px 24px', fontSize: '16px', borderRadius: '4px', border: 'none', backgroundColor: '#0077be', color: 'white', cursor: 'pointer' }}>Send Message</button>
					<button type="button" onClick={openLinkedIn} style={{ padding: '12px 24px', fontSize: '16px', borderRadius: '4px', border: '1px solid #0077be', backgroundColor: 'transparent', color: '#0077be', cursor: 'pointer' }}>Connect on LinkedIn</button>
				</div>
			</form>

			<div style={{ marginTop: 12 }}>
				{status === 'sending' && <p>Sending…</p>}
				{status === 'sent' && <p style={{ color: 'green' }}>Message sent. Thank you!</p>}
				{status === 'mailto' && <p style={{ color: 'green' }}>Opened your mail client to send the message.</p>}
				{status === 'error' && <p style={{ color: 'red' }}>Failed to send. Please try mailto or LinkedIn.</p>}
			</div>

			<hr style={{ margin: '18px 0' }} />
			<div>
				<p>Alternate:</p>
				<p>Email: <a href={`mailto:${process.env.REACT_APP_EMAIL}`}>{process.env.REACT_APP_EMAIL}</a></p>
				<p>LinkedIn: <a href={linkedinUrl} target="_blank" rel="noreferrer">Connect on LinkedIn</a></p>
			</div>

			{!formspreeFormId && (
				<div style={{ marginTop: 12, padding: 12, background: '#fff7ed', borderRadius: 6 }}>
					<strong>Note:</strong> To enable direct sends from this page without opening your mail client, add your Formspree form ID to <code>src/components/Contact.jsx</code> (formspreeFormId). Sign up at <a href="https://formspree.io/" target="_blank" rel="noreferrer">formspree.io</a>.
				</div>
			)}
		</div>
	);
};

export default Contact;
