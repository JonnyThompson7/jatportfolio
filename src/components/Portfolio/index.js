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
      picture: require('../../assets/doggypedia.JPG'),
      name: 'Doggypedia',
      description: "When the user lands on our website, they will see our search bar with some brief instructions. The user will search for breeds by their family such as hound, terrier, spaniel, etc. When the user begins to enter their breed, results based on their inputs will be displayed below the search bar. These results can be clicked to navigate immediately to their desired breed. Once a breed is clicked or searched, if the breed includes sub-breeds, the user will be shown a group of buttons for the various sub-breeds that are clickable. Once the sub-breed button is clicked, the website will display images of the breed as well as stats for the breed. If the breed does not have sub-breeds such as labrador or pitbull, they'll immediately be shown the images and stats for those breeds. If the breed or sub-breed is not found in our database, the user will be shown 5 interesting dog facts at random.",
      repo: 'https://github.com/AlexCourtney18/cocktail-doggo',
      link: 'https://alexcourtney18.github.io/cocktail-doggo/'
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


