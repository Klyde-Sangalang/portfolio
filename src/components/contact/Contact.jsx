import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import mail_icon from '../../assets/mail_icon.svg';
import './Contact.css';

const Contact = () => {
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f29f4f7a-5932-4de8-b23d-be826e62ec1f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
        alert("Message sent successfully!");
        event.target.reset();
    }
  };


  return (
    <div className="contact" id="contact">
        <div className="contact-title">
            <h1>Get In Touch</h1>
            {/* <img src={themepattern} alt='Pattern' /> */}
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm always available to discuss your project and help you with your challenges.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="Mail" />
                        <p>sangalangklyde@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="Call" />
                        <p>63+ 936-312-1273</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="Location" />
                        <p>Mabalacat, Pampanga, Philippines</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" placeholder='Enter your name' />
                
                <label htmlFor="email">Your Email</label>
                <input type="email" name="name" id="email" placeholder='Enter your email' />

                <label htmlFor="message">Your Message</label>
                <textarea name="message" rows={8} placeholder='Enter your message'></textarea>

                <button type='submit' className="contact-submit">Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact