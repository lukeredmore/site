import Me from '../assets/me.jpeg'

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <p>Greetings! My name is Luke, and I'm thrilled you've stumbled on my little website.</p>
        <p>I'm a developer, engineer, tinkerer, and lifelong learner. My interests are pretty widespread, but I've tried to capture the 
          highlights on my <a href='/projects'>Projects</a> page. To summarize, I'm an electrical engineer by training with interests in both software and hardware development. Recently, I've become enamored with compilers, wireless communication, and digital/mixed-signal logic design. I love writing code, but I love deleting code even more :)</p>
          <p>Outside of the direct tech-y stuff, I am also interested in the collective responsibility we all hold in an ever-changing digital world, or <a href="https://scienceandsociety.duke.edu/learn/undergraduate-programs/ss-certificate/digital-intelligence/" target="_blank">Digital Intelligence</a> as we called it in undergrad. As a natural consequence, I try to place security, privacy, and sustainability at the forefront of anything I create.</p>
        <p>And outside of all <em>that</em>, I'm just a curious chap about the world we live in and our place in it. I love math games, crossword puzzles, hiking, weightlifting, traveling, writing, and simply learning.</p>

        
       
      </div>
      <img src={Me} alt='Luke Redmore' className='me' />
      <p className='closing'>You can find me on <a href="https://github.com/lukeredmore" target="_blank">GitHub</a>, <a href="https://www.linkedin.com/in/luke-redmore" target="_blank">LinkedIn</a>, or by email at <a href="mailto:luke.redmore@gmail.com" target="_blank">luke.redmore@gmail.com</a>. In real life, I'm bouncing around Binghamton NY, Durham NC, and Seattle WA. Feel free to get in touch!</p>
    </div>
  )
}

export default Home
