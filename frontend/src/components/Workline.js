import React, { useRef } from 'react';
import './Workline.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faMusic } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import AudioRec from './AudioRec/Audiorec'; // Import your AudioRec component

const Workline = () => {
  const hiddenFileInput = useRef(null);

  const handleFileUpload = async (event) => {
    const fileUploaded = event.target.files[0];
    const formData = new FormData();
    formData.append('audio', fileUploaded);
    formData.append('instrument', 'violin'); // Replace with your instrument selection

    try {
      const response = await axios.post('http://localhost:5000/convert', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data && response.data.download_url) {
        downloadFile(response.data.download_url, response.data.output_file);
      } else {
        console.error('Invalid response data:', response.data);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const downloadFile = (url, filename) => {
    const link = document.createElement('a');
    link.href = `http://localhost:5000${url}`;
    link.download = filename || 'converted_audio.mp3'; // Specify the default filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="Workline d-flex justify-content-center align-items-center">
      <div className="col-md-6 col-lg-4">
        <div className="drop-card d-flex flex-column justify-content-center align-items-center">
          <h2 className="mt-4" style={{ color: '#eca644', fontWeight: 'inherit', fontFamily: 'Prompt' }}>
            Vocals to Music
            <span style={{ color: '#f18701' }} className="fa-music">
              <FontAwesomeIcon icon={faMusic} size="2xs" />
            </span>
            <span style={{ color: '#ff9e00' }} className="fa-music">
              <FontAwesomeIcon icon={faMusic} size="xs" pull="right" />
            </span>
            <span style={{ paddingLeft: '10px', color: '#ff9100' }} className="fa-music">
              <FontAwesomeIcon icon={faMusic} size="2xs" />
            </span>
          </h2>
          <span className="descript mt-4" style={{ color: '#f4f4f4' }}>
            Instantly, convert vocals to any instrumental tones
          </span>
          <span className="mt-3">
            <button onClick={handleClick} className="btn" id="rec-mic">
              Upload a file
              <span id="fa-fold">
                <FontAwesomeIcon icon={faFolder} />
              </span>
              <input
                type="file"
                ref={hiddenFileInput}
                accept=".wav, .mp3"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
            </button>
          </span>
          <h5 style={{ color: '#f4f4f4' }}>Or</h5>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <AudioRec />
        </div>
      </div>
    </div>
  );
};

export default Workline;
