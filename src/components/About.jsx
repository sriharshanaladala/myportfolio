import React from 'react';

const About = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>About Me</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                <img
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <div>
                    <h2>Sriharsha Naladala</h2>
                    <h3>Software Developer</h3>
                    <p>
                        Passionate software developer with experience in building web and mobile applications.
                        Skilled in React, Node.js, and modern JavaScript frameworks.
                    </p>
                </div>
            </div>

            <section>
                <h2>Summary</h2>
                <p>
                    Experienced in designing, developing, and deploying scalable applications.
                    Strong problem-solving skills and a keen eye for detail.
                    Committed to continuous learning and professional growth.
                </p>
            </section>

            <section>
                <h2>Experience Highlights</h2>
                <ul>
                    <li>Developed multiple full-stack web applications using React and Node.js.</li>
                    <li>Built mobile applications with React Native.</li>
                    <li>Collaborated with cross-functional teams to deliver high-quality software.</li>
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
                        {/* Experience item 1 - left side */}
                        <div style={{
                            position: 'relative',
                            width: '50%',
                            padding: '10px 20px',
                            backgroundColor: '#f0f8ff',
                            borderRadius: '8px',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                            alignSelf: 'flex-start',
                            marginLeft: '0',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <img src="https://via.placeholder.com/50" alt="NextRow Digital logo" style={{ width: '50px', height: '50px' }} />
                                <div>
                                    <h3>Programmer Analyst Trainee</h3>
                                    <p>NextRow Digital · Full-time</p>
                                    <p>Jun 2024 - Present · 1 yr 3 mos</p>
                                    <p>Hyderabad, Telangana, India · On-site</p>
                                    <p>Adobe Target, Adobe Experience Manager (AEM) and +4 skills</p>
                                </div>
                            </div>
                            {/* Timeline dot */}
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                right: '-14px',
                                width: '20px',
                                height: '20px',
                                backgroundColor: '#0077be',
                                borderRadius: '50%',
                                border: '4px solid white',
                                boxShadow: '0 0 0 2px #0077be',
                            }}></div>
                        </div>

                        {/* Experience item 2 - right side */}
                        <div style={{
                            position: 'relative',
                            width: '50%',
                            padding: '10px 20px',
                            backgroundColor: '#f0f8ff',
                            borderRadius: '8px',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                            alignSelf: 'flex-end',
                            marginRight: '0',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <img src="https://via.placeholder.com/50" alt="JSpiders logo" style={{ width: '50px', height: '50px' }} />
                                <div>
                                    <h3>Intern</h3>
                                    <p>JSpiders - Training & Development Center · Trainee</p>
                                    <p>Nov 2023 - Jul 2024 · 9 mos</p>
                                    <p>Hyderabad, Telangana, India · On-site</p>
                                    <p>Cascading Style Sheets (CSS), HTML5 and +3 skills</p>
                                </div>
                            </div>
                            {/* Timeline dot */}
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                left: '-14px',
                                width: '20px',
                                height: '20px',
                                backgroundColor: '#0077be',
                                borderRadius: '50%',
                                border: '4px solid white',
                                boxShadow: '0 0 0 2px #0077be',
                            }}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2>Education</h2>
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

                    {/* Education items */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        {/* Education item 1 - left side */}
                        <div style={{
                            position: 'relative',
                            width: '50%',
                            padding: '10px 20px',
                            backgroundColor: '#f0f8ff',
                            borderRadius: '8px',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                            alignSelf: 'flex-start',
                            marginLeft: '0',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <img src="https://via.placeholder.com/50" alt="Krishna Chaitanya Degree & PG College logo" style={{ width: '50px', height: '50px' }} />
                                <div>
                                    <h3>Master of Computer Applications - MCA, Computer Software Technology</h3>
                                    <p>Krishna Chaitanya Degree & PG College, Nellore</p>
                                    <p>Aug 2021 - Oct 2023</p>
                                    <p>Grade: 8.3</p>
                                </div>
                            </div>
                            {/* Timeline dot */}
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                right: '-14px',
                                width: '20px',
                                height: '20px',
                                backgroundColor: '#0077be',
                                borderRadius: '50%',
                                border: '4px solid white',
                                boxShadow: '0 0 0 2px #0077be',
                            }}></div>
                        </div>

                        {/* Education item 2 - right side */}
                        <div style={{
                            position: 'relative',
                            width: '50%',
                            padding: '10px 20px',
                            backgroundColor: '#f0f8ff',
                            borderRadius: '8px',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                            alignSelf: 'flex-end',
                            marginRight: '0',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <img src="https://via.placeholder.com/50" alt="SVKP degree college logo" style={{ width: '50px', height: '50px' }} />
                                <div>
                                    <h3>Bachelor of Commerce - BCom, Accounting and Finance</h3>
                                    <p>SVKP degree college, velpur</p>
                                    <p>2016 - 2021</p>
                                </div>
                            </div>
                            {/* Timeline dot */}
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                left: '-14px',
                                width: '20px',
                                height: '20px',
                                backgroundColor: '#0077be',
                                borderRadius: '50%',
                                border: '4px solid white',
                                boxShadow: '0 0 0 2px #0077be',
                            }}></div>
                        </div>

                        {/* Education item 3 - left side */}
                        <div style={{
                            position: 'relative',
                            width: '50%',
                            padding: '10px 20px',
                            backgroundColor: '#f0f8ff',
                            borderRadius: '8px',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                            alignSelf: 'flex-start',
                            marginLeft: '0',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <img src="https://via.placeholder.com/50" alt="Master Minds logo" style={{ width: '50px', height: '50px' }} />
                                <div>
                                    <h3>Intermediate, MEC</h3>
                                    <p>Master Minds</p>
                                    <p>2014 - 2016</p>
                                    <p>Grade: 81.8</p>
                                </div>
                            </div>
                            {/* Timeline dot */}
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                right: '-14px',
                                width: '20px',
                                height: '20px',
                                backgroundColor: '#0077be',
                                borderRadius: '50%',
                                border: '4px solid white',
                                boxShadow: '0 0 0 2px #0077be',
                            }}></div>
                        </div>

                        {/* Education item 4 - right side */}
                        <div style={{
                            position: 'relative',
                            width: '50%',
                            padding: '10px 20px',
                            backgroundColor: '#f0f8ff',
                            borderRadius: '8px',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                            alignSelf: 'flex-end',
                            marginRight: '0',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <img src="https://via.placeholder.com/50" alt="Bhashyam Public School logo" style={{ width: '50px', height: '50px' }} />
                                <div>
                                    <h3>High School</h3>
                                    <p>Bhashyam Public School</p>
                                    <p>2013 - 2014</p>
                                    <p>Grade: 9.2</p>
                                </div>
                            </div>
                            {/* Timeline dot */}
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                left: '-14px',
                                width: '20px',
                                height: '20px',
                                backgroundColor: '#0077be',
                                borderRadius: '50%',
                                border: '4px solid white',
                                boxShadow: '0 0 0 2px #0077be',
                            }}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2>Licenses & Certifications</h2>
                <div style={{ marginBottom: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                        <img src="https://via.placeholder.com/50" alt="IBM logo" style={{ width: '50px', height: '50px' }} />
                        <div>
                            <h3>Developing AI Applications with Python and Flask</h3>
                            <p>IBM</p>
                            <p>Issued Jun 2025</p>
                            <p>Credential ID LXLO3931YGW8</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <img src="https://via.placeholder.com/50" alt="IBM logo" style={{ width: '50px', height: '50px' }} />
                        <div>
                            <h3>Generative AI: Introduction and Applications</h3>
                            <p>IBM</p>
                            <p>Issued May 2025</p>
                            <p>Credential ID AHWEWUNRX76G</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2>Contact</h2>
                <p>Email: your.email@example.com</p>
                <p>LinkedIn: <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourusername</a></p>
                <p>GitHub: <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a></p>
            </section>
        </div>
    );
};

export default About;
