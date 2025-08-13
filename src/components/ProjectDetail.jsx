import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projectsData';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) {
        return (
            <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
                <h2>Project not found</h2>
                <Link to="/projects">Back to Projects</Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>

            {/* Detailed explanation */}
            <section>
                <h2>Detailed Explanation</h2>
                <p>{project.detailedExplanation || 'No detailed explanation available.'}</p>
            </section>

            {/* Screenshots */}
            <section>
                <h2>Screenshots</h2>
                {project.screenshots && project.screenshots.length > 0 ? (
                    project.screenshots.map((src, index) => (
                        <img key={index} src={src} alt={`Screenshot ${index + 1}`} style={{ maxWidth: '100%', marginBottom: '10px' }} />
                    ))
                ) : (
                    <p>No screenshots available.</p>
                )}
            </section>

            {/* Timeline */}
            <section>
                <h2>Timeline</h2>
                {project.timeline && project.timeline.length > 0 ? (
                    <ul>
                        {project.timeline.map((event, index) => (
                            <li key={index}>
                                <strong>{event.date}:</strong> {event.event}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No timeline available.</p>
                )}
            </section>

            {/* Timestamps */}
            <section>
                <h2>Timestamps</h2>
                {project.timestamps && project.timestamps.length > 0 ? (
                    <ul>
                        {project.timestamps.map((timestamp, index) => (
                            <li key={index}>{timestamp}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No timestamps available.</p>
                )}
            </section>

            <Link to="/projects" style={{ display: 'inline-block', marginTop: '20px', color: '#0077be' }}>
                &larr; Back to Projects
            </Link>
        </div>
    );
};

export default ProjectDetail;
