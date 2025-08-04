import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
                {/* <img src={footer_logo} alt="Footer-Logo" /> */}
                
            </div>
            <div className="footer-top-right">
                {/* <p>I am a Junior Software Engineer based in Philippines.</p> */}
                {/* <div className="footer-email-input">
                    <img src={user_icon} alt="User-Icon" />
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div> */}
                
            </div>
            
        </div>
        <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">Copyright © 2025 Klyde Sangalang</p>
                {/* <div className="footer-bottom-right">
                </div> */}
            </div>
    </div>
  )
}

export default Footer
