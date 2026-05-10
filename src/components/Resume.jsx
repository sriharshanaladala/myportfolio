import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylings/Resume.css';

const Resume = () => {
  const resumeRef = useRef();
  const navigate = useNavigate();

  return (
    <div className="resume-root">
      <div className="resume-actions">
        <button onClick={() => navigate('/')}>Back to Home</button>
        <button onClick={() => window.print()} style={{ marginLeft: 8 }}>
          Print / Save PDF
        </button>
        <button onClick={() => navigate('/contact')} style={{ marginLeft: 8 }}>
          Contact
        </button>
      </div>

      <div className="resume-content" ref={resumeRef}>
        <header>
          <h1>Sri Harsha Naladala</h1>

          <p>
            Software Engineer — Adobe Experience Cloud | Adobe Analytics,
            Adobe Target, AEP & AEM Engineer
          </p>

          <p>
            Email: {process.env.REACT_APP_EMAIL} | Hyderabad, India
          </p>

          <p>
            LinkedIn: {process.env.REACT_APP_LINKEDIN_URL} | GitHub:{' '}
            {process.env.REACT_APP_GITHUB_URL}
          </p>
        </header>

        <section>
          <h2>Professional Summary</h2>

          <p>
            Adobe Experience Cloud and frontend engineer with 2+ years of
            experience implementing enterprise personalization, analytics, and
            customer data solutions. Hands-on experience with Adobe Target,
            Adobe Analytics, Adobe Experience Platform (AEP), Web SDK, and AEM
            component development. Skilled in React-based frontend development,
            analytics implementation, data layer architecture, event tracking,
            and experimentation strategies. Comfortable working across
            full-stack JavaScript environments and collaborating with product,
            analytics, and marketing teams in Agile workflows. Experienced in
            AI-assisted development and rapid prototyping.
          </p>
        </section>

        <section>
          <h2>Technical Skills</h2>

          <ul>
            <li>
              <strong>Adobe Experience Cloud:</strong> Adobe Analytics, Adobe
              Target, Adobe Experience Platform, Adobe Experience Manager, Web
              SDK (Alloy.js), Adobe Launch / Data Collection, XDM Schema,
              Customer Journey Analytics (CJA), A/B Testing & Personalization,
              SDR Documentation, Data Layer Implementation (EDDL / ACDL)
            </li>

            <li>
              <strong>Frontend & Backend:</strong> JavaScript, React.js,
              Node.js, Express.js, HTML5, CSS3, Bootstrap, REST APIs
            </li>

            <li>
              <strong>Databases & Tools:</strong> MongoDB, MySQL, Git &
              GitHub, Postman, VS Code, Agile / Jira
            </li>

            <li>
              <strong>Additional:</strong> Python Fundamentals,
              AI-assisted Development, Analytics Debugging & QA
            </li>
          </ul>
        </section>

        <section>
          <h2>Professional Experience</h2>

          <h3>Software Engineer — NextRow Digital</h3>

          <p>
            <em>Jun 2024 – Present</em> — Hyderabad, India
          </p>

          <ul>
            <li>
              Implemented Adobe Target A/B testing, XT activities, and
              personalization campaigns for enterprise and pharmaceutical
              websites.
            </li>

            <li>
              Worked on Adobe Analytics and Adobe Experience Platform (AEP)
              implementations using Web SDK and XDM schema-based tracking.
            </li>

            <li>
              Designed and validated data layer structures (EDDL/ACDL) and
              mapped analytics requirements for customer journey tracking.
            </li>

            <li>
              Created Solution Design Reference (SDR) documentation for Adobe
              Analytics and Customer Journey Analytics (CJA) implementations.
            </li>

            <li>
              Configured Adobe Launch / Data Collection rules, data elements,
              and event-based tracking for forms, page interactions, and user
              engagement events.
            </li>

            <li>
              Worked on AEM component development, editable templates, and
              authoring workflows to support reusable enterprise content.
            </li>

            <li>
              Built React UI components and integrated frontend features with
              REST APIs while improving performance and maintainability.
            </li>

            <li>
              Collaborated with product, analytics, design, and backend teams
              using Agile methodologies and Git-based workflows.
            </li>

            <li>
              Leveraged AI-assisted development tools to accelerate prototyping,
              implementation, and debugging workflows.
            </li>
          </ul>

          <h3>Intern — JSpiders (Training & Development Center)</h3>

          <p>
            <em>Nov 2023 – Jul 2024</em> — Hyderabad, India
          </p>

          <ul>
            <li>
              Worked on frontend and full-stack development assignments using
              HTML, CSS, JavaScript, React, and Node.js.
            </li>

            <li>
              Learned software development lifecycle practices, debugging,
              version control, and collaborative development workflows.
            </li>
          </ul>
        </section>

        <section>
          <h2>Selected Projects</h2>

          <ul>
            <li>
              <strong>Nomad Pharma</strong> — Implemented Adobe Target
              personalization campaigns, recommendation activities, and
              analytics tracking for a pharmaceutical ecommerce website.
            </li>

            <li>
              <strong>Adobe Web SDK Analytics Implementation</strong> —
              Worked on XDM schema mapping, Web SDK event tracking, Adobe
              Analytics integration, and SDR preparation using EDDL-based data
              layers.
            </li>

            <li>
              <strong>Finance Tracker App</strong> — Built a MERN stack
              application for budgeting, expense tracking, and savings goal
              management.
            </li>
          </ul>
        </section>

        <section>
          <h2>Education & Certifications</h2>

          <p>
            <strong>
              Master of Computer Applications (MCA)
            </strong>{' '}
            — Computer Software Technology
            <br />
            Krishna Chaitanya Degree & PG College
          </p>

          <p>
            <strong>Certifications:</strong>
          </p>

          <ul>
            <li>
              Developing AI Applications with Python and Flask — IBM
            </li>

            <li>
              Generative AI: Introduction and Applications — IBM
            </li>
          </ul>
        </section>

        <section>
          <h2>Career Goals</h2>

          <p>
            To deepen expertise across Adobe Experience Cloud technologies,
            customer data platforms, analytics engineering, and digital
            personalization while continuing to grow as a full-stack developer
            and AI-assisted solutions engineer.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Resume;