import profile_img from '../../assets/about_profile.svg';
import './About.css';

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            {/* <img src= {theme_pattern} alt='Pattern' /> */}
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={profile_img} alt='Profile' />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Fresh Computer Engineering graduate with internship experience in web development (WordPress, React) and freelance experience in mobile app development (Flutter, Firebase). Passionate about creating efficient, user-focused solutions and eager to grow in the tech industry.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>Python</p><hr style={{width: '60%'}}/></div>
                    <div className="about-skill"><p>React</p><hr style={{width: '50%'}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: '40%'}}/></div>
                    <div className="about-skill"><p>Flutter</p><hr style={{width: '60%'}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width: '55%'}}/></div>
                    <div className="about-skill"><p>C++</p><hr style={{width: '30%'}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            {/* <div className="about-achievement">
                <h1>1 Year</h1>
                <p>EXPERIENCE</p>
            </div>
            <hr /> */}
            <div className="about-achievement">
                <h1>4th PLACE</h1>
                <p>PYTHON CODING COMPETITON</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About