import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylings/Resume.css';

const Resume = () => {
  const resumeRef = useRef();
  const navigate = useNavigate();

  // ATS-friendly, plain-HTML resume for ~2 years experience
  return (
    <div className="resume-root">
      <div className="resume-actions">
        <button onClick={() => window.print()}>Print / Save PDF</button>
        <button onClick={() => navigate('/contact')} style={{ marginLeft: 8 }}>Contact</button>
      </div>

      <div className="resume-content" ref={resumeRef}>
        <header>
          <h1>Sri Harsha Naladala</h1>
          <p>Programmer Analyst — Adobe Target & AEM | Frontend Engineer</p>
          <p>Email: {process.env.REACT_APP_EMAIL} | Hyderabad, India</p>
          <p>LinkedIn: {process.env.REACT_APP_LINKEDIN_URL} | GitHub: {process.env.REACT_APP_GITHUB_URL}</p>
        </header>

        <section>
          <h2>Professional Summary</h2>
          <p>Frontend engineer with 2 years of experience building web applications and enterprise personalization solutions. Strong experience implementing Adobe Target experiments, AEM component development and authoring workflows, and building React-based UIs. Comfortable with full-stack JavaScript and Python fundamentals. Experienced with agile processes, version control, and collaborating across product and design teams. Uses AI-assisted tools for rapid prototyping (vibe coding).</p>
        </section>

        <section>
          <h2>Technical Skills</h2>
          <ul>
            <li>Languages / Frameworks: JavaScript, React, Node.js, Express.js, Python</li>
            <li>Web: HTML5, CSS3, Bootstrap, REST APIs</li>
            <li>Adobe: Adobe Target, Adobe Experience Manager (AEM) — authoring & component dev</li>
            <li>Databases: MongoDB, MySQL, PostgreSQL</li>
            <li>Tools: Git, GitHub, VS Code, Postman, Agile, Linux</li>
            <li>Data / ML basics: Pandas, NumPy, Scikit-learn, OpenCV</li>
          </ul>
        </section>

        <section>
          <h2>Professional Experience</h2>
          <h3>Programmer Analyst — NextRow Digital</h3>
          <p><em>Jun 2024 – Present</em> — Hyderabad, India</p>
          <ul>
            <li>Implemented Adobe Target personalization and A/B experiments to deliver tailored content and recommendations for enterprise websites.</li>
            <li>Developed and maintained AEM components and templates to support editorial workflows and multi-site content reuse in local AEM environments.</li>
            <li>Built React UI components and integrated front-end features with REST APIs; improved front-end performance and developer experience.</li>
            <li>Collaborated with product, design, and backend teams using Agile practices and Git-based workflows.</li>
            <li>Explored AI-assisted development (vibe coding) to accelerate prototyping and reduce repetitive implementation work.</li>
          </ul>

          <h3>Intern — JSpiders (Training & Development Center)</h3>
          <p><em>Nov 2023 – Jul 2024</em> — Hyderabad, India</p>
          <ul>
            <li>Worked on web fundamentals and small full-stack projects using HTML, CSS, and JavaScript; contributed to learning-focused assignments and labs.</li>
            <li>Learned software development processes, debugging, and collaboration tools.</li>
          </ul>
        </section>

        <section>
          <h2>Selected Projects</h2>
          <ul>
            <li><strong>Nomad Pharma</strong> — Implemented Adobe Target personalization and content recommendations for a pharmaceutical website.</li>
            <li><strong>Finance Tracker App</strong> — MERN stack application for budgeting, expense tracking, and saving goals.</li>
          </ul>
        </section>

        <section>
          <h2>Education & Certifications</h2>
          <p>Master of Computer Applications (MCA), Computer Software Technology — Krishna Chaitanya Degree & PG College</p>
          <p>Certifications: Developing AI Applications with Python and Flask (IBM), Generative AI: Introduction and Applications (IBM)</p>
        </section>

        <section>
          <h2>Career Goals</h2>
          <p>Deepen expertise in Adobe Experience Cloud and digital personalization, grow full-stack proficiency in Python and JavaScript, and build AI-assisted developer tools.</p>
        </section>
      </div>
    </div>
  );
};

export default Resume;
