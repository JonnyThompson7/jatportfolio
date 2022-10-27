function About() {
  return (
    <section className='about'>
      <h3 className='aboutTitle'>Who am I?</h3>
      <div className='aboutCard'>
        <img className='pfp' src={require('../../assets/pog.JPG')}></img>
        <p className='aboutMe'>
          Jonny Thompson. I am a Full Stack Web Developer from Wisconsin. This is my Portfolio. Please Enjoy...
          - Front End Enjoyer
          - Languages/Skills - Js, HTML, CSS, React, Node, Express, MySQL, NoSQL, MERN stack, PWAs,
          - Driven, Attentive, Flexible, Punctual
          - Struggles with Confidence, poor pacing
          - Experience with deadlines, team enviroments, office manner,
          From this point on, I will only be typing filler words and nonsense as I need to eventually
          write a longer paragraph about me, but I currently do not know what to write about, how to write it,
          and what is actually important for my introduction. I wanted to type this filler so I could get a better
          layout with my styles. The short paragraph I had looked funky with such a small paragraph so I figured that
          if I typed a longer one, it would look more appealing.
        </p>

      </div>
    </section>
  )
}

export default About;