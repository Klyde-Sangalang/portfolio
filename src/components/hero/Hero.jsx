import AnchorLink from 'react-anchor-link-smooth-scroll';
import profile_img from '../../assets/profile_img.svg';
import './Hero.css';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className="hero-left">
        <div className="hero-img-bg">
          <img src={profile_img} alt='Profile' />
        </div>
      </div>
      <div className="hero-right">
        <h2>KLYDE VINCENT SANGALANG</h2>
        <h1><span>JR. SOFTWARE ENGINEER</span></h1>
        <p>
          I am an enthusiastic learner with a curious nature. I enjoy delving into new technologies and expanding my knowledge about them. Constantly seeking new challenges and opportunities, I strive to enhance my skills. I possess proficiency in both Web Development and Mobile Development.
        </p>
        <div className="hero-action">
  <AnchorLink className="hero-connect anchor-link" href="#contact" style={{textDecoration: 'none'}}>
    Connect With Me
  </AnchorLink>
  <a
    className="hero-resume"
    href="https://drive.usercontent.google.com/download?id=1UdIYlrvvJdtntBSld9Ax82PM6gIXrCF4&export=download&authuser=0&confirm=t&uuid=3bf3f39c-a20b-4ac2-b68d-84439aa8e5da&at=AN8xHoowNr5Epy3qRMNy35RR4q-C:1754236626846"
    download

    style={{textDecoration: 'none'}}
  >
    My Resume
  </a>
</div>
      </div>
    </div>
  )
}

export default Hero