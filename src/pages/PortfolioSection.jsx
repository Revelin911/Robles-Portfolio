//this section shows links to my projects with pictures
import { useState } from 'react';
import '../App';

const projects = [
  {
    title: 'Dad-A-Base',
    tech: 'MERN Stack',
    img: '',
    repo: 'https://github.com/tlesner/Dad-A-Base.git',
  },
  {
    title: 'Test',
    tech: 'MERN Stack',
    img: 'Test',
    repo: '#',
  },
  {
    title: 'Test',
    tech: 'JavaScript/CSS/HTML',
    img: 'Test',
    repo: '#',
  },
  {
    title: 'Test',
    tech: 'Node/IoT',
    img: 'Test',
    repo: '#',
  },
];
function PortfolioSection() {
    
    const [hoveredIndex, setHoveredIndex] = useState(null);
    return (

        <div>Portfolio Projects...

    <section className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`portfolio-card ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              <img src={project.img} alt={project.title} />
              <div className="overlay">
                <h3>{project.title}</h3>
                <p>{project.tech}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default PortfolioSection;