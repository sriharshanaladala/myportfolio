import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectsData } from '../data/projectsData';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProject() {
            setLoading(true);
            setError(null);
            try {
                const projects = await getProjectsData();
                const foundProject = projects.find(p => p.id === parseInt(id));
                if (foundProject) {
                    setProject(foundProject);
                } else {
                    setError('Project not found');
                }
            } catch (err) {
                setError(err.message || 'Failed to load project');
            } finally {
                setLoading(false);
            }
        }
        fetchProject();
    }, [id]);

    if (loading) {
        return <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>Loading project...</div>;
    }

    if (error || !project) {
        return (
            <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
                <h2>{error || 'Project not found'}</h2>
                <Link to="/projects">Back to Projects</Link>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>

            {/* GitHub Stats */}
            <section style={{ marginBottom: '20px' }}>
                <h2>GitHub Statistics</h2>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <div>
                        <strong>Stars:</strong> ⭐ {project.stars}
                    </div>
                    <div>
                        <strong>Forks:</strong> 🍴 {project.forks}
                    </div>
                    <div>
                        <strong>Language:</strong> 📝 {project.language}
                    </div>
                    <div>
                        <strong>Last Updated:</strong> {new Date(project.updatedAt).toLocaleDateString()}
                    </div>
                </div>
            </section>

            {/* Links */}
            <section style={{ marginBottom: '20px' }}>
                <h2>Links</h2>
                <div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: '#0077be', marginRight: '15px' }}>
                        View on GitHub
                    </a>
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ color: '#0077be' }}>
                            Live Demo
                        </a>
                    )}
                </div>
            </section>

            {/* Detailed explanation */}
            <section>
                <h2>Detailed Explanation</h2>
                <p>This project is hosted on GitHub. For more detailed information, please visit the repository link above.</p>
            </section>

            <Link to="/projects" style={{ display: 'inline-block', marginTop: '20px', color: '#0077be' }}>
                &larr; Back to Projects
            </Link>
        </div>
    );
};

export default ProjectDetail;
