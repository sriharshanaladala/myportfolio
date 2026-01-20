import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchUserRepos } from '../utils/githubApi';

const Projects = () => {
    const navigate = useNavigate();

    // State for projects list, search, filters, loading, error, and pagination
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 4;

    // Fetch projects data on mount
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchUserRepos();
                // Map GitHub data to expected format
                const mappedData = data.map(repo => ({
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
                }));
                setProjects(mappedData);
            } catch (err) {
                setError(err.message || 'Failed to load projects');
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    // Get unique categories for filter buttons
    const categories = ['all', ...new Set(projects.map(project => project.category))];

    // Filter and search projects
    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [projects, searchTerm, selectedCategory]);

    // Pagination logic
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    const startIndex = (currentPage - 1) * projectsPerPage;
    const currentProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

    // Reset to first page when filters or projects change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedCategory, projects]);

    // Unique icons for each category
    const getCategoryIcon = (category) => {
        switch (category) {
            case 'web':
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                    </svg>
                );
            case 'mobile':
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 4h10v12H7V4zm2 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
                    </svg>
                );
            case 'data':
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                    </svg>
                );
            case 'ai':
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12.5v-9c0-.83-.67-1.5-1.5-1.5H7c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5h2.5c.83 0 1.5-.67 1.5-1.5zm7 0v-9c0-.83-.67-1.5-1.5-1.5H14c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5h2.5c.83 0 1.5-.67 1.5-1.5z" />
                    </svg>
                );
            case 'blockchain':
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                    </svg>
                );
            default:
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                );
        }
    };

    if (loading) {
        return <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>Loading projects...</div>;
    }

    if (error) {
        return <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', color: 'red' }}>Error: {error}</div>;
    }

    return (
        <motion.div
            style={{ 
                paddingTop: 'clamp(100px, 15vh, 120px)',
                paddingLeft: 'clamp(15px, 5vw, 20px)',
                paddingRight: 'clamp(15px, 5vw, 20px)',
                paddingBottom: '20px',
                maxWidth: '1200px', 
                margin: '0 auto',
                width: '100%'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1>My Works</h1>

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
                    onClick={() => navigate('/about')}
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
                    About Me
                </button>
            </div>

            {/* Search Bar */}
            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ccc',
                        fontSize: '16px'
                    }}
                />
            </div>

            {/* Category Filters */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '20px',
                justifyContent: 'center'
            }}>
                {categories.map(category => (
                    <motion.button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            padding: '8px 12px',
                            borderRadius: '20px',
                            border: '1px solid #ccc',
                            backgroundColor: selectedCategory === category ? '#0077be' : '#f0f8ff',
                            color: selectedCategory === category ? 'white' : 'black',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        {getCategoryIcon(category)}
                        <span style={{ textTransform: 'capitalize' }}>
                            {category === 'all' ? 'All Projects' : category}
                        </span>
                    </motion.button>
                ))}
            </div>

            {/* Projects List */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(300px, 100%, 350px), 1fr))',
                gap: '20px',
                marginTop: '20px'
            }}>
                {currentProjects.length > 0 ? (
                    currentProjects.map(project => (
                        <motion.div
                            key={project.id}
                            style={{
                                backgroundColor: '#fff',
                                border: '1px solid #d1d5db',
                                borderRadius: '8px',
                                padding: '16px',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                                transition: 'boxShadow 0.2s, transform 0.2s',
                                cursor: 'pointer'
                            }}
                            whileHover={{
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                transform: 'translateY(-2px)'
                            }}
                        >
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '12px'
                            }}>
                                {getCategoryIcon(project.category)}
                                <h3 style={{
                                    margin: '0 0 0 10px',
                                    fontSize: '18px',
                                    fontWeight: '600',
                                    color: '#24292f',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    flex: 1
                                }}>
                                    <a href={`/projects/${project.id}`} style={{
                                        color: '#0969da',
                                        textDecoration: 'none',
                                        display: 'block',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    }} title={project.title}>
                                        {project.title}
                                    </a>
                                </h3>
                            </div>
                            <p style={{
                                color: '#656d76',
                                fontSize: '14px',
                                lineHeight: '1.5',
                                marginBottom: '12px'
                            }}>
                                {project.description}
                            </p>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '12px'
                            }}>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                                    color: '#0969da',
                                    textDecoration: 'none',
                                    fontSize: '14px',
                                    fontWeight: '500'
                                }}>
                                    View on GitHub
                                </a>
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
                                        color: '#0969da',
                                        textDecoration: 'none',
                                        fontSize: '14px',
                                        fontWeight: '500'
                                    }}>
                                        Live Demo
                                    </a>
                                )}
                            </div>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                fontSize: '12px',
                                color: '#656d76'
                            }}>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <span>⭐ {project.stars}</span>
                                    <span>🍴 {project.forks}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <span style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        backgroundColor: project.language === 'JavaScript' ? '#f1e05a' :
                                            project.language === 'Python' ? '#3572A5' :
                                                project.language === 'HTML' ? '#e34c26' :
                                                    project.language === 'CSS' ? '#563d7c' :
                                                        '#586069',
                                        display: 'inline-block'
                                    }}></span>
                                    <span>{project.language}</span>
                                </div>
                            </div>
                            <div style={{
                                fontSize: '12px',
                                color: '#656d76',
                                marginTop: '8px'
                            }}>
                                Updated {new Date(project.updatedAt).toLocaleDateString()}
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <div style={{
                        gridColumn: '1 / -1',
                        textAlign: 'center',
                        padding: '40px',
                        backgroundColor: '#fff',
                        border: '1px solid #d1d5db',
                        borderRadius: '8px'
                    }}>
                        <h3 style={{ color: '#24292f' }}>No projects found</h3>
                        <p style={{ color: '#656d76' }}>Try adjusting your search or filter criteria</p>
                    </div>
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '30px',
                    gap: '8px',
                    flexWrap: 'wrap',
                    padding: '0 10px'
                }}>
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        style={{
                            padding: 'clamp(6px, 2vw, 8px) clamp(8px, 2vw, 12px)',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            backgroundColor: currentPage === 1 ? '#f0f0f0' : '#0077be',
                            color: currentPage === 1 ? '#999' : 'white',
                            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                            fontSize: 'clamp(12px, 2.5vw, 14px)',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            style={{
                                padding: 'clamp(6px, 2vw, 8px) clamp(8px, 2vw, 12px)',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                backgroundColor: currentPage === page ? '#0077be' : 'white',
                                color: currentPage === page ? 'white' : 'black',
                                cursor: 'pointer',
                                fontSize: 'clamp(12px, 2.5vw, 14px)',
                                minWidth: 'clamp(32px, 5vw, 40px)'
                            }}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        style={{
                            padding: 'clamp(6px, 2vw, 8px) clamp(8px, 2vw, 12px)',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            backgroundColor: currentPage === totalPages ? '#f0f0f0' : '#0077be',
                            color: currentPage === totalPages ? '#999' : 'white',
                            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                            fontSize: 'clamp(12px, 2.5vw, 14px)',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        Next
                    </button>
                </div>
            )}
        </motion.div>
    );
};

export default Projects;
