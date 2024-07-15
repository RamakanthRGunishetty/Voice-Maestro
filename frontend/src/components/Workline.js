import React, { useRef, useState ,useEffect} from 'react';
import './Workline.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faMusic } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Mp3Recorder from './AudioRec/Audiorec'; // Assuming Mp3Recorder is in './AudioRec/Audiorec'

const Workline = () => {
  const hiddenFileInput = useRef(null);
  const [audioBlob, setAudioBlob] = useState(null); // State to hold recorded audio blob

  // Function to handle file upload
  const handleFileUpload = async (event) => {
    const fileUploaded = event.target.files[0];
    try {
      await uploadFile(fileUploaded);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  // Function to handle recorded audio upload
  const handleAudioUpload = async (blob) => {
    try {
      await uploadFile(blob);
    } catch (error) {
      console.error('Error uploading recorded audio:', error);
    }
  };

  // Generic function to upload file (either from file input or recorded audio)
  const uploadFile = async (fileOrBlob) => {
    const formData = new FormData();
    formData.append('audio', fileOrBlob);
    formData.append('instrument', 'violin'); // Replace 'banjo' with selected instrument

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    try {
      // Upload file to Flask server
      const response = await axios.post('http://localhost:5000/convert', formData, config);

      // Play the converted audio file (if needed)
      const audioElement = new Audio(response.data.output_file);
      audioElement.play();
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  // Handle click event to open file dialog
  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  // Handle recorded audio from Mp3Recorder
  const handleRecordedAudio = (blob) => {
    setAudioBlob(blob);
  };

  // Trigger upload when recorded audio is ready
  useEffect(() => {
    if (audioBlob) {
      handleAudioUpload(audioBlob);
    }
  }, [audioBlob]);

  return (
    <div className="Workline d-flex justify-content-center align-items-center" id="Workline">
      <div className="col-md-6 col-lg-4">
        <div className="drop-card d-flex flex-column justify-content-center align-items-center">
          <h2 className="mt-4" style={{ color: '#eca644', fontWeight: 'inherit', fontFamily: 'Prompt' }}>
            " Vocals to Music " 
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
                accept=".mp3, .wav"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
            </button>
          </span>
          <h5 style={{ color: '#f4f4f4' }}>Or</h5>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Mp3Recorder onRecorded={handleRecordedAudio} /> {/* Pass callback to handle recorded audio */}
        </div>
      </div>
    </div>
  );
};

export default Workline;
