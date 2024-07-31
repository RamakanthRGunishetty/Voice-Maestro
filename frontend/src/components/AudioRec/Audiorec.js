import React, { useState, useEffect } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import MicRecorder from 'mic-recorder-to-mp3';
import axios from 'axios';

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

const AudioRec = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [message, setMessage] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(() => {
        console.log('Permission Granted');
        setIsBlocked(false);
      })
      .catch(() => {
        console.log('Permission Denied');
        setIsBlocked(true);
      });
  }, []);

  const startRecording = () => {
    if (isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder.start()
        .then(() => {
          setIsRecording(true);
        })
        .catch((e) => console.error(e));
    }
  };

  const stopRecording = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(async ([buffer, blob]) => {
        setIsRecording(false);
        await uploadAudio(blob);
      })
      .catch((e) => console.log(e));
  };

  const uploadAudio = async (audioBlob) => {
    const formData = new FormData();
    formData.append('audio', audioBlob, 'recording.mp3');
    formData.append('instrument', 'violin'); // Replace with your instrument selection

    try {
      console.log('Uploading audio blob:', audioBlob);

      const response = await axios.post('http://localhost:5000/convert', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Server Response:', response.data);
      if (response.data && response.data.download_url) {
        setMessage(response.data.message);
        setDownloadUrl(response.data.download_url);

        // Automatically download the file
        const link = document.createElement('a');
        link.href = `http://localhost:5000${response.data.download_url}`;
        link.download = response.data.output_file;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.error('Invalid response data:', response.data);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <span>
          <button
            id="rec-mic"
            onClick={isRecording ? stopRecording : startRecording}
            disabled={isBlocked}
          >
            {isRecording ? 'Stop' : 'Record'}
            <span id="fa-mic">
              <FontAwesomeIcon icon={faMicrophone} />
            </span>
          </button>
        </span>
        {message && <p>{message}</p>}
        {downloadUrl && (
          <a href={downloadUrl} download>
            Download Converted Audio
          </a>
        )}
      </header>
    </div>
  );
};

export default AudioRec;
