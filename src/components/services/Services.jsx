import Services_Data from '../../assets/services_data';
import './Services.css';

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            {/* <img src={theme_pattern} alt='Pattern' /> */}
        </div>
        <div className="services-container">
            {Services_Data.map((services, index) => {
                return <div key={index} className="services-format">
                    <h3>{services.srv_no}</h3>
                    <h2>{services.srv_name}</h2>
                    <p>{services.srv_desc}</p>
                    {/* <div className="services-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="Arrow-Right" />
                    </div> */}
                </div>
            })}
        </div>
    </div>
  )
}

export default Services