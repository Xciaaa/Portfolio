import './ProjectDetail.scss';
import { useParams, Link } from 'react-router-dom';
import projects from './projects';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <div className="project-detail">
        <p>Project not found.</p>
        <Link to="/Work">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="project-hero">
        <Link to="/Work" className="back-link">← Back to Projects</Link>
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-copy">
          <span className="project-category">{project.category.toUpperCase()}</span>
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="project-description">{project.description}</p>
        </div>
      </div>

      <section className="project-detail-block">
        <h2>Why it matters</h2>
        <p>{project.details}</p>
      </section>

      <section className="project-detail-block">
        <h2>Highlights</h2>
        <ul>
          {project.highlights.map((line) => (
            <li key={line}>{line}</li>
          ))}
          {project.demoUrl && (
          <a href={project.demoUrl} target='_blank' rel='noopener noreferrer' className='cta'>View Demo</a>
          )}
        </ul>
      </section>
    </div>
  );
};

export default ProjectDetail;
