import React, { useRef } from 'react';
import Resume from '../../assets/Resume Shubham Jindal.pdf'
import './styles.css'

const DownloadButton = () => {
  const downloadLinkRef = useRef(null);

  const handleDownloadClick = () => {
    downloadLinkRef.current.click();
  };

  return (
    <div className='pdf-container'>
      <a href={Resume} ref={downloadLinkRef} style={{ display: 'none' }} download>
        Download PDF
      </a>
      <button className='pdf-download-btn' onClick={handleDownloadClick}>View Resume</button>
    </div>
  );
};

export default DownloadButton;

