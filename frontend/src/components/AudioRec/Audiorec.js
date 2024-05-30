import React, { useState, useEffect } from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
import MicRecorder from 'mic-recorder-to-mp3'

const Mp3Recorder = new MicRecorder({ bitRate: 128 })

const AudioRec = () => {
  const [isRecording, setIsRecording] = useState(false)
  // const [blobURL, setBlobURL] = useState('')
  const [isBlocked, setIsBlocked] = useState(false)

  useEffect(() => {
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log('Permission Granted')
        setIsBlocked(false)
      },
      () => {
        console.log('Permission Denied')
        setIsBlocked(true)
      },
    )
  }, [])

  const startRecording = () => {
    if (isBlocked) {
      console.log('Permission Denied')
    } else {
      Mp3Recorder.start()
        .then(() => {
          setIsRecording(true)
        })
        .catch((e) => console.error(e))
    }
  }

  const stopRecording = () => {
    Mp3Recorder.stop()
      .getMp3()
      .then(([buffer, blob]) => {
        // const blobURL = URL.createObjectURL(blob)
        // setBlobURL(blobURL)    //there
        setIsRecording(false)

        // Save the recorded file to the database here
        // Example: fetch('/api/save-audio', { method: 'POST', body: blob })
      })
      .catch((e) => console.log(e))
  }

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
  )
}

export default AudioRec
