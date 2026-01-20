import React from 'react';
import { useNavigate } from 'react-router-dom';

// Import logos
import nextRowLogo from '../data/NextRow_Logo_Vertical.png';
import jspidersLogo from '../data/pyspiders.jpg';
import svkpLogo from '../data/svkp logo.jpg';
import masterMindsLogo from '../data/mm logo.jpg';
import krishnaLogo from '../data/kist logo.jpg';
import bhashyamLogo from '../data/bhashyam school.png';


const aboutData = {
    profileImage: "https://avatars.githubusercontent.com/u/83389426?v=4",
    name: "Sriharsha Naladala",
    title: "Programmer Analyst — NextRow Digital",
    description: "Hi, I'm Sri Harsha — a passionate developer blending technology, business, and AI-driven creativity. Currently focused on personalization with Adobe Target and AEM.",
    summary: "Working as an Adobe Target Developer delivering personalized digital experiences. Hands-on with AEM authoring and component development in local environments. Exploring AI-assisted development and vibe coding for rapid prototyping.",
    experienceHighlights: [
        "Adobe Target personalization for enterprise websites",
        "AEM component development and content authoring",
        "AI-assisted development workflows and rapid prototyping (vibe coding)"
    ],
    currentFocus: "Personalization with Adobe Target for large-scale enterprise websites. Working knowledge of AEM Sites, component development, and authoring tools.",
    vibeCoding: "Vibe coding is an AI-powered approach where natural language inputs drive code generation (e.g., ChatGPT/Codex) so I can focus on strategy and UX while AI helps with boilerplate code.",
    technicalSkills: {
        languages: ["JavaScript", "React", "Node.js", "Express.js", "Python"],
        web: ["HTML", "CSS", "Bootstrap", "REST APIs"],
        adobe: ["Adobe Target", "AEM (local setup & authoring)"],
        db: ["MongoDB", "MySQL", "PostgreSQL"],
        tools: ["Git", "GitHub", "VS Code", "Postman", "Linux", "Agile"],
        aiLearning: ["Pandas", "NumPy", "Scikit-learn", "OpenCV (basics)"]
    },
    experience: [
        {
            role: "Programmer Analyst",
            company: "NextRow Digital",
            type: "Full-time",
            period: "Jun 2024 - Present",
            location: "Hyderabad, Telangana, India · On-site",
            skills: ["Adobe Target", "AEM", "Javascript", "Html", "CSS","Jquery"],
            logo: nextRowLogo,
            align: "left"
        },
        {
            role: "Intern",
            company: "JSpiders - Training & Development Center",
            type: "Trainee",
            period: "Nov 2023 - Jul 2024 · 9 mos",
            location: "Hyderabad, Telangana, India · On-site",
            skills: ["CSS", "HTML5", "JavaScript","Python","Mysql"],
            logo: jspidersLogo,
            align: "right"
        }
    ],
    education: [
        {
            degree: "Master of Computer Applications - MCA, Computer Software Technology",
            institution: "Krishna Chaitanya Degree & PG College, Nellore",
            period: "Aug 2021 - Oct 2023",
            grade: "8.3",
            logo: krishnaLogo,
            align: "left"
        },
        {
            degree: "Bachelor of Commerce - BCom, Accounting and Finance",
            institution: "SVKP degree college, velpur",
            period: "2016 - 2021",
            logo: svkpLogo,
            align: "right"
        },
        {
            degree: "Intermediate, MEC",
            institution: "Master Minds",
            period: "2014 - 2016",
            grade: "81.8",
            logo: masterMindsLogo,
            align: "left"
        },
        {
            degree: "High School",
            institution: "Bhashyam Public School",
            period: "2013 - 2014",
            grade: "9.2",
            logo: bhashyamLogo,
            align: "right"
        }
    ],
    certifications: [
        {
            title: "Developing AI Applications with Python and Flask",
            issuer: "IBM",
            issued: "Jun 2025",
            credentialId: "LXLO3931YGW8",
            logo: "https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo.png"
        },
        {
            title: "Generative AI: Introduction and Applications",
            issuer: "IBM",
            issued: "May 2025",
            credentialId: "AHWEWUNRX76G",
            logo: "https://logos-world.net/wp-content/uploads/2020/09/IBM-Logo.png"
        }
    ],
    contact: {
        email: process.env.REACT_APP_EMAIL,
        linkedIn: process.env.REACT_APP_LINKEDIN_URL,
        github: process.env.REACT_APP_GITHUB_URL
    }
};

const About = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const renderTimelineItem = (item, isLeft) => {
        const containerStyle = {
            position: 'relative',
            width: '100%',
            maxWidth: isMobile ? '100%' : '45%',
            padding: '15px 20px',
            backgroundColor: 'var(--timeline-bg, #f0f8ff)',
            borderRadius: '8px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            marginBottom: '20px',
            color: 'var(--timeline-text, #333)',
            marginLeft: isMobile ? '0' : isLeft ? '0' : 'auto',
            marginRight: isMobile ? '0' : isLeft ? 'auto' : '0',
        };
        const dotStyle = {
            position: 'absolute',
            top: '20px',
            [isMobile ? 'left' : isLeft ? 'right' : 'left']: isMobile ? '-34px' : '-15px',
            width: '25px',
            height: '25px',
            backgroundColor: '#0077be',
            borderRadius: '80%',
            border: '4px solid white',
            boxShadow: '0 0 0 2px #0077be',
        };
        const headingStyle = {
            color: '#0077be',
            fontSize: 'clamp(16px, 4vw, 18px)',
            marginBottom: '5px',
            fontWeight: 'bold',
        };
        const textStyle = {
            color: 'var(--timeline-secondary-text, #555)',
            fontSize: 'clamp(12px, 3vw, 14px)',
            margin: '3px 0',
        };
        return (
            <div key={item.title || item.degree || item.role} style={containerStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
                    <img src={item.logo} alt={`${item.company || item.institution || item.issuer} logo`} style={{ width: 'clamp(40px, 10vw, 50px)', height: 'clamp(40px, 10vw, 50px)', flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: '200px' }}>
                        {item.role && <h3 style={headingStyle}>{item.role}</h3>}
                        {item.degree && <h3 style={headingStyle}>{item.degree}</h3>}
                        {item.title && <h3 style={headingStyle}>{item.title}</h3>}
                        {item.company && <p style={textStyle}>{item.company} · {item.type || ''}</p>}
                        {item.institution && <p style={textStyle}>{item.institution}</p>}
                        {item.issuer && <p style={textStyle}>{item.issuer}</p>}
                        {item.period && <p style={textStyle}>{item.period}</p>}
                        {item.grade && <p style={textStyle}>Grade: {item.grade}</p>}
                        {item.location && <p style={textStyle}>{item.location}</p>}
                        {item.skills && (Array.isArray(item.skills) ? (
                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 6 }}>
                                {item.skills.map((s, idx) => (
                                    <span key={idx} style={{ background: '#eef2ff', color: '#0b3b66', padding: '3px 6px', borderRadius: 4, fontSize: 'clamp(10px, 2.5vw, 12px)' }}>{s}</span>
                                ))}
                            </div>
                        ) : (
                            <p style={textStyle}>{item.skills}</p>
                        ))}
                        {item.issued && <p style={textStyle}>Issued {item.issued}</p>}
                        {item.credentialId && <p style={textStyle}>Credential ID {item.credentialId}</p>}
                    </div>
                </div>
                <div style={dotStyle}></div>
            </div>
        );
    };

    return (
        <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>About Me</h1>

            {/* Navigation Buttons */}
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                    onClick={() => navigate('/')}
                    style={{
                        padding: '8px 16px',
                        borderRadius: '5px',
                        border: 'none',
                        backgroundColor: '#0077be',
                        color: 'white',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Back to Home
                </button>
                <button
                    onClick={() => navigate('/projects')}
                    style={{
                        padding: '8px 16px',
                        borderRadius: '5px',
                        border: 'none',
                        backgroundColor: '#0077be',
                        color: 'white',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    View Projects
                </button>
                <button
                    onClick={() => navigate('/resume')}
                    style={{
                        padding: '8px 16px',
                        borderRadius: '5px',
                        border: 'none',
                        backgroundColor: '#10b981',
                        color: 'white',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    View Resume
                </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                <img
                    src={aboutData.profileImage}
                    alt="Profile"
                    style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <div>
                    <h2>{aboutData.name}</h2>
                    <h3>{aboutData.title}</h3>
                    <p>{aboutData.description}</p>
                </div>
            </div>

            <section>
                <h2>Summary</h2>
                <p>{aboutData.summary}</p>
                <p><strong>Current focus:</strong> {aboutData.currentFocus}</p>
                <p><strong>What is Vibe Coding?</strong> {aboutData.vibeCoding}</p>
            </section>

            <section>
                <h2>Experience Highlights</h2>
                <ul>
                    {aboutData.experienceHighlights.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Technical Skills</h2>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <div style={{ minWidth: 180 }}>
                        <h4>Languages / Frameworks</h4>
                        <ul>{aboutData.technicalSkills.languages.map((s,i)=>(<li key={i}>{s}</li>))}</ul>
                    </div>
                    <div style={{ minWidth: 180 }}>
                        <h4>Web / Tools</h4>
                        <ul>{aboutData.technicalSkills.web.concat(aboutData.technicalSkills.tools).map((s,i)=>(<li key={i}>{s}</li>))}</ul>
                    </div>
                    <div style={{ minWidth: 180 }}>
                        <h4>Databases / AI</h4>
                        <ul>{aboutData.technicalSkills.db.concat(aboutData.technicalSkills.aiLearning).map((s,i)=>(<li key={i}>{s}</li>))}</ul>
                    </div>
                </div>
            </section>

            <section>
                <h2>Experience</h2>
                <div style={{
                    position: 'relative',
                    margin: '20px 0',
                    paddingLeft: isMobile ? '20px' : '20px',
                    paddingRight: isMobile ? '20px' : '20px',
                }}>
                    {/* Timeline vertical line - hidden on mobile */}
                    {!isMobile && (
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            top: 0,
                            bottom: 0,
                            width: '4px',
                            backgroundColor: '#0077be',
                            transform: 'translateX(-50%)',
                            borderRadius: '2px',
                        }}></div>
                    )}
                    {isMobile && (
                        <div style={{
                            position: 'absolute',
                            left: '0',
                            top: 0,
                            bottom: 0,
                            width: '4px',
                            backgroundColor: '#0077be',
                            borderRadius: '2px',
                        }}></div>
                    )}

                    {/* Experience items */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        {aboutData.experience.map((item, index) => renderTimelineItem(item, index % 2 === 0))}
                    </div>
                </div>
            </section>
            <section>
                <h2>Education</h2>
                <div style={{
                    position:'relative',
                    margin: '20px 0',
                    paddingLeft: isMobile ? '20px' : '20px',
                    paddingRight: isMobile ? '20px' : '20px',
                }}>
                    {/* Timeline vertical line - hidden on mobile */}
                    {!isMobile && (
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            top: 0,
                            bottom: 0,
                            width: '4px',
                            backgroundColor: '#0077be',
                            transform: 'translateX(-50%)',
                            borderRadius: '2px',
                        }}></div>
                    )}
                    {isMobile && (
                        <div style={{
                            position: 'absolute',
                            left: '0',
                            top: 0,
                            bottom: 0,
                            width: '4px',
                            backgroundColor: '#0077be',
                            borderRadius: '2px',
                        }}></div>
                    )}

                    {/* Education items */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        {aboutData.education.map((item, index) => renderTimelineItem(item, index % 2 === 0))}
                    </div>
                </div>
            </section>

            <section>
                <h2>Licenses & Certifications</h2>
                <div style={{ marginBottom: '20px' }}>
                    {aboutData.certifications.map((cert, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                            <img src={cert.logo} alt={`${cert.issuer} logo`} style={{ width: '50px', height: '50px' }} />
                            <div>
                                <h3>{cert.title}</h3>
                                <p>{cert.issuer}</p>
                                <p>Issued {cert.issued}</p>
                                <p>Credential ID {cert.credentialId}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h2>Contact</h2>
                <p>Email: {aboutData.contact.email}</p>
                <p>LinkedIn: <a href={aboutData.contact.linkedIn} target="_blank" rel="noopener noreferrer">{aboutData.contact.linkedIn}</a></p>
                <p>GitHub: <a href={aboutData.contact.github} target="_blank" rel="noopener noreferrer">{aboutData.contact.github}</a></p>
            </section>
        </div>
    );
};

export default About;
