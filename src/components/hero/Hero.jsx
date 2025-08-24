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
        
        <div className="hero-action">
  <a href='#contact' className='hero-connect' style={{textDecoration: 'none'}}>
    Connect With Me
  </a>
  <a
    className="hero-resume"
    href="https://drive.usercontent.google.com/download?id=1DQZwplatCMAlDjU9Hj15Jvve1LyMlDcs&export=download&authuser=0&confirm=t&uuid=425278bb-333e-4d1d-8d8f-7b526222d6cb&at=AN8xHooJVzJbYs35W9aeNrJw346K:1755801117998"
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
