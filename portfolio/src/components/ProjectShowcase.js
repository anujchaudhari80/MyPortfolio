import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectShowcase = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects')  // Adjust the API endpoint
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching project data:', error);
      });
  }, []);

  return (
    <div className="project-showcase">
      <h2>Project Showcase</h2>
      <div className="project-cards">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
