const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_TOKEN = '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';

async function fetchUserRepos() {
    const perPage = 100;
    let page = 1;
    let allRepos = [];
    try {
        while (true) {
            const url = `${GITHUB_API_BASE}/user/repos?per_page=${perPage}&page=${page}&sort=updated`;
            console.log(`Fetching page ${page} from GitHub API...`);
            const response = await fetch(url, {
                headers: {
                    'Authorization': `token ${GITHUB_TOKEN}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            if (!response.ok) {
                if (response.status === 403) {
                    throw new Error('Rate limit exceeded. Please try again later.');
                }
                throw new Error(`GitHub API error: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            console.log(`Page ${page}: Fetched ${data.length} repositories`);
            if (data.length === 0) {
                console.log('No more repositories to fetch.');
                break;
            }
            allRepos = allRepos.concat(data);
            console.log(`Total repositories so far: ${allRepos.length}`);
            if (data.length < perPage) {
                console.log('Reached the last page.');
                break;
            }
            page++;
        }
        console.log(`Total repositories fetched: ${allRepos.length}`);
        const mappedRepos = allRepos.map(repo => ({
            id: repo.id,
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            stargazers_count: repo.stargazers_count,
            forks_count: repo.forks_count,
            language: repo.language,
            updated_at: repo.updated_at,
            fork: repo.fork
        }));
        console.log('Mapped repositories:', mappedRepos);
        return mappedRepos;
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        throw error;
    }
}

export { fetchUserRepos };
