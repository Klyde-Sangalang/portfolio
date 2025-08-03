import { useState } from 'react';
import mywork_data from '../../assets/mywork_data.js';
import './MyWork.css';

const MyWork = () => {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const handleImageClick = (index) => {
    setZoomedIndex(zoomedIndex === index ? null : index);
  };

  return (
    <div id="mywork" className="mywork">
      <div className="mywork-title">
        <h1>My Work</h1>
        {/* <img src={theme_pattern} alt='Pattern' /> */}
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <img
            key={index}
            src={work.work_img}
            alt=""
            className={zoomedIndex === index ? 'zoomed' : ''}
            onClick={() => handleImageClick(index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </div>
      {/* <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow-Right" />
      </div> */}
    </div>
  );
};

export default MyWork;