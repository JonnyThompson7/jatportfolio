import React, { useState } from 'react';
import Modal from '../Modal';

function Portfolio() {
  const [portfolioPhotos] = useState([
    {
      picture: require('../../assets/runbuddy.JPG'),
      name: 'Run Buddy',
      description: 'This is a hypothetical website design for a company named Run Buddy. It was my first coding project',
      repo: 'https://github.com/JonnyThompson7/run-buddy',
      link: 'https://jonnythompson7.github.io/run-buddy/'
    },
    {
      picture: require('../../assets/runbuddy.JPG'),
      name: 'Run Buddy',
      description: 'This is a hypothetical website design for a company named Run Buddy. It was my first coding project',
      repo: 'https://github.com/JonnyThompson7/run-buddy',
      link: 'https://jonnythompson7.github.io/run-buddy/'
    },
    {
      picture: require('../../assets/runbuddy.JPG'),
      name: 'Run Buddy',
      description: 'This is a hypothetical website design for a company named Run Buddy. It was my first coding project',
      repo: 'https://github.com/JonnyThompson7/run-buddy',
      link: 'https://jonnythompson7.github.io/run-buddy/'
    },
    {
      picture: require('../../assets/runbuddy.JPG'),
      name: 'Run Buddy',
      description: 'This is a hypothetical website design for a company named Run Buddy. It was my first coding project',
      repo: 'https://github.com/JonnyThompson7/run-buddy',
      link: 'https://jonnythompson7.github.io/run-buddy/'
    },
    {
      picture: require('../../assets/runbuddy.JPG'),
      name: 'Run Buddy',
      description: 'This is a hypothetical website design for a company named Run Buddy. It was my first coding project',
      repo: 'https://github.com/JonnyThompson7/run-buddy',
      link: 'https://jonnythompson7.github.io/run-buddy/'
    },
    {
      picture: require('../../assets/runbuddy.JPG'),
      name: 'Run Buddy',
      description: 'This is a hypothetical website design for a company named Run Buddy. It was my first coding project',
      repo: 'https://github.com/JonnyThompson7/run-buddy',
      link: 'https://jonnythompson7.github.io/run-buddy/'
    },
  ])

  const [currentProject, setCurrentProject] = useState();
  const showModal = (image, i) => {
    setCurrentProject({ ...image, index: i });
    setIsModalOpen(!isModalOpen)
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1 className="portfolioTitle">Some of My Favorite Projects</h1>
      {isModalOpen && <Modal currentProject={currentProject} onClose={showModal} />}
      <section className="projectSection">
        {portfolioPhotos.map((image, i) => (
          <div>
            <h3 className="projectName">{image.name}</h3>
            <img
              src={image.picture}
              alt={image.name}
              className='appImage'
              key={image.name}
              onClick={() => showModal(image, i)}
            />
          </div>
        ))}
      </section>
    </div>
  )
};


export default Portfolio;


