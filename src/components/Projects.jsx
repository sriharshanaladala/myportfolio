import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import projectsData from '../data/projectsData';
import AddProjectForm from './AddProjectForm';

const Projects = () => {
    // State for projects list, search, filters, and pagination
    const [projects, setProjects] = useState(projectsData);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 3;

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
    React.useEffect(() => {
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

    // Handler to add new project from form
    const handleAddProject = (newProject) => {
        setProjects(prevProjects => [newProject, ...prevProjects]);
    };

    return (
        <motion.div
            style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1>My Works</h1>

            {/* Add Project Form - only show in development */}
            {process.env.NODE_ENV !== 'production' && <AddProjectForm onAddProject={handleAddProject} />}

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
                    <button
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
                    </button>
                ))}
            </div>

            {/* Projects List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {currentProjects.length > 0 ? (
                    currentProjects.map(project => (
                        <motion.div
                            key={project.id}
                            style={{
                                padding: '15px',
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                backgroundColor: '#f0f8ff'
                            }}
                            whileHover={{ scale: 1.02, boxShadow: '0 6px 12px rgba(0,0,0,0.15)' }}
                        >
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginBottom: '10px'
                            }}>
                                {getCategoryIcon(project.category)}
                                <h2 style={{ margin: '0 0 0 10px' }}>
                                    <a href={`/projects/${project.id}`} style={{ color: '#0077be', textDecoration: 'none' }}>
                                        {project.title}
                                    </a>
                                </h2>
                            </div>
                            <p>{project.description}</p>
                            <div style={{ marginTop: '10px' }}>
                                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px', color: '#0077be' }}>
                                    GitHub
                                </a>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{ color: '#0077be' }}>
                                    Live Demo
                                </a>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <div style={{ textAlign: 'center', padding: '40px' }}>
                        <h3>No projects found</h3>
                        <p>Try adjusting your search or filter criteria</p>
                    </div>
                )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '30px',
                    gap: '10px'
                }}>
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        style={{
                            padding: '8px 12px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            backgroundColor: currentPage === 1 ? '#f0f0f0' : '#0077be',
                            color: currentPage === 1 ? '#999' : 'white',
                            cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
                        }}
                    >
                        Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            style={{
                                padding: '8px 12px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                backgroundColor: currentPage === page ? '#0077be' : 'white',
                                color: currentPage === page ? 'white' : 'black',
                                cursor: 'pointer'
                            }}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        style={{
                            padding: '8px 12px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            backgroundColor: currentPage === totalPages ? '#f0f0f0' : '#0077be',
                            color: currentPage === totalPages ? '#999' : 'white',
                            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
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
