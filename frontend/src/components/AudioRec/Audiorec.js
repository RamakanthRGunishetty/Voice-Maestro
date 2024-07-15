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

  useEffect(() => {
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log('Permission Granted');
        setIsBlocked(false);
      },
      () => {
        console.log('Permission Denied');
        setIsBlocked(true);
      }
    );
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
      .then(([buffer, blob]) => {
        setIsRecording(false);

        // Send the recorded audio blob to the server for conversion
        uploadAudio(blob);
      })
      .catch((e) => console.log(e));
  };

  const uploadAudio = async (audioBlob) => {
    const formData = new FormData();
    formData.append('audio', audioBlob);
    formData.append('instrument', 'violin'); // Replace with your instrument selection
  
    try {
      console.log('Uploading audio blob:', audioBlob);
  
      const response = await axios.post('http://localhost:5000/convert', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <span>
          {/* <button id='rec-mic'>
            Record now
          </button> */}
        </span>
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
          {/* <audio src={blobURL} controls="controls" /> there */}
        </span>
      </header>
    </div>
  );
};

export default AudioRec;
