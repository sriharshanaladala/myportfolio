import React, { useState } from 'react';

const AddProjectForm = ({ onAddProject }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [skills, setSkills] = useState('');
    const [repoLink, setRepoLink] = useState('');
    const [liveUrl, setLiveUrl] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [lastUpdateDate, setLastUpdateDate] = useState('');
    const [pictures, setPictures] = useState([{ url: '', description: '' }]);

    const handlePictureChange = (index, field, value) => {
        const newPictures = [...pictures];
        newPictures[index][field] = value;
        setPictures(newPictures);
    };

    const addPictureField = () => {
        setPictures([...pictures, { url: '', description: '' }]);
    };

    const removePictureField = (index) => {
        const newPictures = pictures.filter((_, i) => i !== index);
        setPictures(newPictures);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newProject = {
            id: Date.now(),
            title,
            description,
            skills: skills.split(',').map(s => s.trim()),
            repoLink,
            liveUrl,
            startDate,
            endDate,
            lastUpdateDate,
            pictures,
            category: 'custom' // default category for user added projects
        };
        onAddProject(newProject);
        // Reset form
        setTitle('');
        setDescription('');
        setSkills('');
        setRepoLink('');
        setLiveUrl('');
        setStartDate('');
        setEndDate('');
        setLastUpdateDate('');
        setPictures([{ url: '', description: '' }]);
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
            <h2>Add New Project</h2>
            <div>
                <label>Project Title:</label><br />
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} required style={{ width: '100%' }} />
            </div>
            <div>
                <label>Description:</label><br />
                <textarea value={description} onChange={e => setDescription(e.target.value)} required style={{ width: '100%' }} />
            </div>
            <div>
                <label>Skills (comma separated):</label><br />
                <input type="text" value={skills} onChange={e => setSkills(e.target.value)} style={{ width: '100%' }} />
            </div>
            <div>
                <label>Repository Link:</label><br />
                <input type="url" value={repoLink} onChange={e => setRepoLink(e.target.value)} style={{ width: '100%' }} />
            </div>
            <div>
                <label>Live URL:</label><br />
                <input type="url" value={liveUrl} onChange={e => setLiveUrl(e.target.value)} style={{ width: '100%' }} />
            </div>
            <div>
                <label>Start Date:</label><br />
                <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
            </div>
            <div>
                <label>End Date:</label><br />
                <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
            </div>
            <div>
                <label>Last Update Date:</label><br />
                <input type="date" value={lastUpdateDate} onChange={e => setLastUpdateDate(e.target.value)} />
            </div>
            <div>
                <label>Pictures:</label>
                {pictures.map((pic, index) => (
                    <div key={index} style={{ marginBottom: '10px', border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
                        <input
                            type="url"
                            placeholder="Picture URL"
                            value={pic.url}
                            onChange={e => handlePictureChange(index, 'url', e.target.value)}
                            style={{ width: '100%', marginBottom: '5px' }}
                        />
                        <textarea
                            placeholder="Description for this picture"
                            value={pic.description}
                            onChange={e => handlePictureChange(index, 'description', e.target.value)}
                            style={{ width: '100%' }}
                        />
                        {pictures.length > 1 && (
                            <button type="button" onClick={() => removePictureField(index)} style={{ marginTop: '5px' }}>
                                Remove Picture
                            </button>
                        )}
                    </div>
                ))}
                <button type="button" onClick={addPictureField}>Add Another Picture</button>
            </div>
            <button type="submit" style={{ marginTop: '20px', padding: '10px 20px' }}>Add Project</button>
        </form>
    );
};

export default AddProjectForm;
