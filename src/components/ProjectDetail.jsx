import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import '../stylings/ProjectDetail.css';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [readme, setReadme] = useState(null);
    const [readmeLoading, setReadmeLoading] = useState(false);
    const [readmeError, setReadmeError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProject() {
            setLoading(true);
            setError(null);
            try {
                // Fetch repository data from GitHub API
                const response = await fetch(`https://api.github.com/repositories/${id}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch repository: ${response.status}`);
                }
                const repo = await response.json();

                // Map GitHub data to expected format
                const mappedProject = {
                    id: repo.id,
                    title: repo.name,
                    description: repo.description || 'No description available',
                    github: repo.html_url,
                    stars: repo.stargazers_count,
                    forks: repo.forks_count,
                    language: repo.language || 'Unknown',
                    updatedAt: repo.updated_at,
                    category: 'web', // Default category
                    demo: null // No demo link from GitHub
                };

                setProject(mappedProject);
                // Fetch README after project is loaded
                fetchReadme(mappedProject.github);
            } catch (err) {
                setError(err.message || 'Failed to load project');
            } finally {
                setLoading(false);
            }
        }
        fetchProject();
    }, [id]);

    const fetchReadme = async (githubUrl) => {
        if (!githubUrl) return;

        setReadmeLoading(true);
        setReadmeError(null);

        try {
            // Extract owner and repo from GitHub URL
            const urlParts = githubUrl.replace('https://github.com/', '').split('/');
            const owner = urlParts[0];
            const repo = urlParts[1];

            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
                headers: {
                    'Accept': 'application/vnd.github.v3+json'
                }
            });

            if (!response.ok) {
                if (response.status === 404) {
                    setReadme('No README found for this repository.');
                } else {
                    throw new Error(`Failed to fetch README: ${response.status}`);
                }
                return;
            }

            const data = await response.json();
            // Decode base64 content
            const decodedContent = atob(data.content);
            setReadme(decodedContent);
        } catch (err) {
            setReadmeError(err.message || 'Failed to load README');
        } finally {
            setReadmeLoading(false);
        }
    };

    if (loading) {
        return <div className="project-detail-container loading-text">Loading project...</div>;
    }

    if (error || !project) {
        return (
            <div className="project-detail-container">
                <h2 className="error-text">{error || 'Project not found'}</h2>
                <Link to="/projects" className="back-link">Back to Projects</Link>
            </div>
        );
    }

    return (
        <div className="project-detail-container">
            <h1>{project.title}</h1>
            <p>{project.description}</p>

            {/* GitHub Stats */}
            <section className="project-stats-section">
                <h2>GitHub Statistics</h2>
                <div className="project-stats">
                    <div className="stat-item">
                        <strong>Stars:</strong> ⭐ {project.stars}
                    </div>
                    <div className="stat-item">
                        <strong>Forks:</strong> 🍴 {project.forks}
                    </div>
                    <div className="stat-item">
                        <strong>Language:</strong> 📝 {project.language}
                    </div>
                    <div className="stat-item">
                        <strong>Last Updated:</strong> {new Date(project.updatedAt).toLocaleDateString()}
                    </div>
                </div>
            </section>

            {/* Links */}
            <section className="project-links-section">
                <h2>Links</h2>
                <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        View on GitHub
                    </a>
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                            Live Demo
                        </a>
                    )}
                </div>
            </section>

            {/* README Content */}
            <section className="readme-section">
                <h2>Project README</h2>
                {readmeLoading ? (
                    <p className="loading-text">Loading README...</p>
                ) : readmeError ? (
                    <p className="error-text">Error loading README: {readmeError}</p>
                ) : readme ? (
                    <div className="readme-container">
                        <ReactMarkdown>{readme}</ReactMarkdown>
                    </div>
                ) : (
                    <p className="no-readme-text">No README available for this project.</p>
                )}
            </section>

            <Link to="/projects" className="back-link">
                Back to Projects
            </Link>
        </div>
    );
};

export default ProjectDetail;
