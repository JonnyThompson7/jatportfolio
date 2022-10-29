import { FaBook } from 'react-icons/fa'

function Resume() {
  const resumeDoc = require('../../assets/resume.docx')
  return (
    <section>
      <h2 className="resumeTitle">Resume and Proficiencies</h2>
      <div className="resumeContainer">
        <div className="resumeCard">
          <h3>Click Here to Download my Resume</h3>
          <p><a href={resumeDoc} target='_blank'>
            <FaBook className='book' />
          </a></p>
          <div>

          </div>
        </div>
        <div className="resumeCard">
          <h3>Proficiencies in Web Development</h3>

          <h4>Front End</h4>
          <li>JavaScript</li>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>React</li>
          
          <h4>Back End</h4>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>MySQL/Sequelize</li>
          <li>NoSQL</li>

          <li>MongoDB/Mongoose</li>
        </div>
      </div>
    </section>
  )
}

export default Resume; 