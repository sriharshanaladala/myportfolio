import { fetchUserRepos } from '../utils/githubApi';

// Cache key for localStorage
const CACHE_KEY = 'github_projects_cache';
const CACHE_DURATION = 1000 * 60 * 60 * 24 * 30; // 30 days (monthly)

// Function to get cached data
function getCachedData() {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < CACHE_DURATION && timestamp <= Date.now()) {
            return data;
        }
    }
    return null;
}

// Function to set cached data
function setCachedData(data) {
    const cache = {
        data,
        timestamp: Date.now()
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
}



// Fallback static projects in case API fails
const fallbackProjects = [
    {
        id: 437773948,
        title: 'Portfolio',
        description: 'A modern, responsive portfolio website built with React, showcasing projects, skills, and experience.',
        github: 'https://github.com/sriharshanaladala/portfolio',
        demo: null,
        category: 'web',
        stars: 0,
        forks: 0,
        language: 'JavaScript',
        updatedAt: '2023-11-15T10:30:00Z'
    },
    {
        id: 437774123,
        title: 'React Weather App',
        description: 'A weather application built with React that displays current weather and forecasts using a weather API.',
        github: 'https://github.com/sriharshanaladala/react-weather-app',
        demo: null,
        category: 'web',
        stars: 1,
        forks: 0,
        language: 'JavaScript',
        updatedAt: '2023-11-14T15:45:00Z'
    },
    {
        id: 437774456,
        title: 'Task Manager',
        description: 'A task management application with features like adding, editing, and deleting tasks, built with modern web technologies.',
        github: 'https://github.com/sriharshanaladala/task-manager',
        demo: null,
        category: 'web',
        stars: 2,
        forks: 1,
        language: 'JavaScript',
        updatedAt: '2023-11-13T09:20:00Z'
    },
    {
        id: 437774789,
        title: 'E Commerce Platform',
        description: 'A full-stack e-commerce platform with user authentication, product catalog, and payment integration.',
        github: 'https://github.com/sriharshanaladala/e-commerce-platform',
        demo: null,
        category: 'web',
        stars: 3,
        forks: 2,
        language: 'JavaScript',
        updatedAt: '2023-11-12T14:10:00Z'
    },
    {
        id: 437775012,
        title: 'Blog Website',
        description: 'A blog website with content management system, built with React and Node.js backend.',
        github: 'https://github.com/sriharshanaladala/blog-website',
        demo: null,
        category: 'web',
        stars: 1,
        forks: 0,
        language: 'JavaScript',
        updatedAt: '2023-11-11T11:55:00Z'
    }
];

// Static GitHub repos data (provided by user)
const staticGithubRepos = [
    {
        "id": 437773948,
        "name": "aniyomi",
        "description": "Unofficial fork of Tachiyomi for anime",
        "fork": true,
        "html_url": "https://github.com/sriharshanaladala/aniyomi",
        "stargazers_count": 0,
        "forks_count": 0,
        "language": "Kotlin",
        "updated_at": "2021-12-13T07:23:26Z"
    },
    {
        "id": 762630657,
        "name": "best-choice-for-the-best",
        "description": null,
        "fork": false,
        "html_url": "https://github.com/sriharshanaladala/best-choice-for-the-best",
        "stargazers_count": 1,
        "forks_count": 1,
        "language": "JavaScript",
        "updated_at": "2024-02-27T04:11:40Z"
    },
    {
        "id": 559332021,
        "name": "bookreader",
        "description": null,
        "fork": false,
        "html_url": "https://github.com/sriharshanaladala/bookreader",
        "stargazers_count": 1,
        "forks_count": 0,
        "language": "Python",
        "updated_at": "2024-02-24T08:52:38Z"
    },
    {
        "id": 710857938,
        "name": "build-your-own-x",
        "description": "Master programming by recreating your favorite technologies from scratch.",
        "fork": true,
        "html_url": "https://github.com/sriharshanaladala/build-your-own-x",
        "stargazers_count": 0,
        "forks_count": 0,
        "language": null,
        "updated_at": "2023-10-27T15:28:13Z"
    },
    {
        "id": 710858496,
        "name": "coding-interview-university",
        "description": "A complete computer science study plan to become a software engineer.",
        "fork": true,
        "html_url": "https://github.com/sriharshanaladala/coding-interview-university",
        "stargazers_count": 0,
        "forks_count": 0,
        "language": null,
        "updated_at": "2023-10-27T15:29:22Z"
    },
    {
        "id": 707050751,
        "name": "data_structures_in_python",
        "description": null,
        "fork": false,
        "html_url": "https://github.com/sriharshanaladala/data_structures_in_python",
        "stargazers_count": 0,
        "forks_count": 0,
        "language": "Python",
        "updated_at": "2023-10-19T06:07:26Z"
    },
    {
        "id": 440367699,
        "name": "day18",
        "description": null,
        "fork": false,
        "html_url": "https://github.com/sriharshanaladala/day18",
        "stargazers_count": 1,
        "forks_count": 0,
        "language": "Python",
        "updated_at": "2021-12-21T22:33:14Z"
    },
    {
        "id": 440805108,
        "name": "day19",
        "description": null,
        "fork": false,
        "html_url": "https://github.com/sriharshanaladala/day19",
        "stargazers_count": 1,
        "forks_count": 0,
        "language": "Python",
        "updated_at": "2021-12-22T11:17:23Z"
    },
    {
        "id": 440731715,
        "name": "dot_art",
        "description": null,
        "fork": false,
        "html_url": "https://github.com/sriharshanaladala/dot_art",
        "stargazers_count": 1,
        "forks_count": 0,
        "language": "Python",
        "updated_at": "2021-12-22T11:17:26Z"
    },
    {
        "id": 753935250,
        "name": "E-CommerceWebsite",
        "description": "A sample of E-CommerceWebsite using HTML, CSS, JavaScript and API",
        "fork": true,
        "html_url": "https://github.com/sriharshanaladala/E-CommerceWebsite",
        "stargazers_count": 0,
        "forks_count": 0,
        "language": null,
        "updated_at": "2024-02-07T04:12:53Z"
    }
    // Add more repos as needed from the full JSON
];

// Function to get projects data
export async function getProjectsData() {
    // Check cache first
    const cached = getCachedData();
    if (cached) {
        return cached;
    }

    try {
        // Fetch from GitHub API
        const githubRepos = await fetchUserRepos();
        // Filter out repos that are forks
        const filteredRepos = githubRepos.filter(repo =>
            !repo.fork &&
            !repo.name.toLowerCase().includes('fork')
        );

        // Map to project structure
        const projects = filteredRepos.map(repo => (
            {
                id: repo.id,
                title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), // Convert kebab-case to Title Case
                description: repo.description || 'No description available',
                github: repo.html_url,
                demo: null, // GitHub API doesn't provide demo links
                category: 'web',
                stars: repo.stargazers_count,
                forks: repo.forks_count,
                language: repo.language || 'Unknown',
                updatedAt: repo.updated_at
            }));

        // Cache the data
        setCachedData(projects);

        return projects;
    } catch (error) {
        console.error('Failed to load static GitHub repos:', error);
        return fallbackProjects;
    }
}

// For backward compatibility, export a promise that resolves to projects
const projectsPromise = getProjectsData();
export default projectsPromise;
