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
      picture: require('../../assets/og.JPG'),
      name: 'Jonathan Thompson Portfolio',
      description: 'This was my first Portfolio, when you open the tab you will see the page title of "Portfolio" with 3 headers. Each header (About me, Work, and Contact Me) when clicked will take you to the section of the page containing information within that section. A little farther down on the page you will see my name, Jonathan Thompson, and my avatar who is bowing spanning the entire header.',
      repo: 'https://github.com/JonnyThompson7/PortfolioJT',
      link: 'https://jonnythompson7.github.io/PortfolioJT/'
    },
    {
      picture: require('../../assets/quiz.JPG'),
      name: 'Quick Quiz',
      description: 'In this project you will be taken to a site allowing you view scores or take a timed quiz with 5 questions all themed around JavaScript. If you choose to take the quiz the 90 second timer will begin and you have to answer the questions, but time is taken off for each wrong answer and if the timer hits 0, your run is over. Once all 5 questions have been answered, you are prompted with your score and the ability to add your name and score to scoreboard. After posting your score, you will be able to view all scores, clear all scores, or go back to the start where you can either view all scores again, or take the quiz!',
      repo: 'https://github.com/JonnyThompson7/quickquiz',
      link: 'https://jonnythompson7.github.io/quickquiz/'
    },
    {
      picture: require('../../assets/work.JPG'),
      name: 'Work Day Scheduler',
      description: 'Upon opening the page, you will be shown a color coded schedule for a 8 AM to 5 PM work day. There is a text box for every hour of the day where you can type the tasks you need to complete within the day. You will see a red textbox for the present hour, and everything in the future will be green and everything in the past will be in grey. Once the task is typed out make sure to click the save button since once it is clicked you will be able to leave or refresh the page, and your input will still be there!',
      repo: 'https://github.com/JonnyThompson7/schedulemeplease',
      link: 'https://jonnythompson7.github.io/schedulemeplease/'
    },
    {
      picture: require('../../assets/weather.JPG'),
      name: 'Weather Dashboard',
      description: 'Upon opening the page you will be brought to weather forecast search engine. You will be able to search a city, and have it weather display on the page. After completing your search, each city will get added to the search history. You will have a color prompting you about the UV index within your searched city, and you will also be able to see the 5 day forecast of the city with multiple weather measures.',
      repo: 'https://github.com/JonnyThompson7/weatherdash',
      link: 'https://jonnythompson7.github.io/weatherdash/'
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


