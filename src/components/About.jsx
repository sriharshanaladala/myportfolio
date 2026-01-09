import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const aboutData = {
    profileImage: "https://avatars.githubusercontent.com/u/83389426?v=4",
    name: "Sriharsha Naladala",
    title: "Software Developer",
    description: "Passionate software developer with experience in building web and mobile applications. Skilled in React, Node.js, and modern JavaScript frameworks.",
    summary: "Experienced in designing, developing, and deploying scalable applications. Strong problem-solving skills and a keen eye for detail. Committed to continuous learning and professional growth.",
    experienceHighlights: [
        "Developed multiple full-stack web applications using React and Node.js.",
        "Built mobile applications with React Native.",
        "Collaborated with cross-functional teams to deliver high-quality software."
    ],
    experience: [
        {
            role: "Programmer Analyst Trainee",
            company: "NextRow Digital",
            type: "Full-time",
            period: "Jun 2024 - Present · 1 yr 3 mos",
            location: "Hyderabad, Telangana, India · On-site",
            skills: "Adobe Target, Adobe Experience Manager (AEM) and +4 skills",
            logo: "https://via.placeholder.com/50",
            align: "left"
        },
        {
            role: "Intern",
            company: "JSpiders - Training & Development Center",
            type: "Trainee",
            period: "Nov 2023 - Jul 2024 · 9 mos",
            location: "Hyderabad, Telangana, India · On-site",
            skills: "Cascading Style Sheets (CSS), HTML5 and +3 skills",
            logo: "https://via.placeholder.com/50",
            align: "right"
        }
    ],
    education: [
        {
            degree: "Master of Computer Applications - MCA, Computer Software Technology",
            institution: "Krishna Chaitanya Degree & PG College, Nellore",
            period: "Aug 2021 - Oct 2023",
            grade: "8.3",
            logo: "https://via.placeholder.com/50",
            align: "left"
        },
        {
            degree: "Bachelor of Commerce - BCom, Accounting and Finance",
            institution: "SVKP degree college, velpur",
            period: "2016 - 2021",
            logo: "https://via.placeholder.com/50",
            align: "right"
        },
        {
            degree: "Intermediate, MEC",
            institution: "Master Minds",
            period: "2014 - 2016",
            grade: "81.8",
            logo: "https://via.placeholder.com/50",
            align: "left"
        },
        {
            degree: "High School",
            institution: "Bhashyam Public School",
            period: "2013 - 2014",
            grade: "9.2",
            logo: "https://via.placeholder.com/50",
            align: "right"
        }
    ],
    certifications: [
        {
            title: "Developing AI Applications with Python and Flask",
            issuer: "IBM",
            issued: "Jun 2025",
            credentialId: "LXLO3931YGW8",
            logo: "https://via.placeholder.com/50"
        },
        {
            title: "Generative AI: Introduction and Applications",
            issuer: "IBM",
            issued: "May 2025",
            credentialId: "AHWEWUNRX76G",
            logo: "https://via.placeholder.com/50"
        }
    ],
    contact: {
        email: "sriharshanaladala@gmail.com",
        linkedIn: "https://linkedin.com/in/yourusername",
        github: "https://github.com/yourusername"
    }
};

const About = () => {
    const navigate = useNavigate();

    const renderTimelineItem = (item, isLeft) => {
        const containerStyle = {
            position: 'relative',
            width: '50%',
            padding: '10px 20px',
            backgroundColor: '#f0f8ff',
            borderRadius: '8px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
            alignSelf: isLeft ? 'flex-start' : 'flex-end',
            marginLeft: isLeft ? '0' : undefined,
            marginRight: !isLeft ? '0' : undefined,
            color: '#333',
        };
        const dotStyle = {
            position: 'absolute',
            top: '20px',
            [isLeft ? 'right' : 'left']: '-14px',
            width: '20px',
            height: '20px',
            backgroundColor: '#0077be',
            borderRadius: '50%',
            border: '4px solid white',
            boxShadow: '0 0 0 2px #0077be',
        };
        const headingStyle = {
            color: '#0077be',
            fontSize: '18px',
            marginBottom: '5px',
            fontWeight: 'bold',
        };
        const textStyle = {
            color: '#555',
            fontSize: '14px',
            margin: '3px 0',
        };
        return (
            <div key={item.title || item.degree || item.role} style={containerStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <img src={item.logo} alt={`${item.company || item.institution || item.issuer} logo`} style={{ width: '50px', height: '50px' }} />
                    <div>
                        {item.role && <h3 style={headingStyle}>{item.role}</h3>}
                        {item.degree && <h3 style={headingStyle}>{item.degree}</h3>}
                        {item.title && <h3 style={headingStyle}>{item.title}</h3>}
                        {item.company && <p style={textStyle}>{item.company} · {item.type || ''}</p>}
                        {item.institution && <p style={textStyle}>{item.institution}</p>}
                        {item.issuer && <p style={textStyle}>{item.issuer}</p>}
                        {item.period && <p style={textStyle}>{item.period}</p>}
                        {item.grade && <p style={textStyle}>Grade: {item.grade}</p>}
                        {item.location && <p style={textStyle}>{item.location}</p>}
                        {item.skills && <p style={textStyle}>{item.skills}</p>}
                        {item.issued && <p style={textStyle}>Issued {item.issued}</p>}
                        {item.credentialId && <p style={textStyle}>Credential ID {item.credentialId}</p>}
                    </div>
                </div>
                <div style={dotStyle}></div>
            </div>
        );
    };

    return (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>About Me</h1>

            {/* Navigation Buttons */}
            <div style={{ marginBottom: '20px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
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
                <h2>Experience</h2>
                <div style={{
                    position: 'relative',
                    margin: '20px 0',
                    paddingLeft: '40px',
                    paddingRight: '40px',
                    borderLeft: '2px solid #0077be',
                }}>
                    {/* Timeline vertical line */}
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
                    paddingLeft: '40px',
                    paddingRight: '40px',
                    borderLeft: '2px solid #0077be',
                }}>
                    {/* Timeline vertical line */}
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
