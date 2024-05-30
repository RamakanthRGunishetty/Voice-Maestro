import React from 'react'
import './Workline.scss'
import Mp3Recorder from './AudioRec/Audiorec'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faMusic } from '@fortawesome/free-solid-svg-icons'

const Workline = (props) => {
  const hiddenFileInput = React.useRef(null)

  // Programatically click the hidden file input element
  // when the Button component is clicked

  const handleClick = (event) => {
    hiddenFileInput.current.click()
  }
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0]
    props.handleFile(fileUploaded)
  }

  return (
    <div
      className="Workline d-flex justify-content-center align-items-center"
      id="Workline"
    >
      <div className="col-md-6 col-lg-4">
        <div className="drop-card d-flex flex-column justify-content-center align-items-center">
          <h2
            className="mt-4"
            style={{
              color: '#eca644',
              fontWeight: 'inherit',
              fontFamily: 'Prompt',
            }}
          >
            Vocals to Music{' '}
            <span style={{ color: '#f18701' }} className="fa-music">
              <FontAwesomeIcon icon={faMusic} size="2xs" />
            </span>
            <span style={{ color: '#ff9e00' }} className="fa-music">
              <FontAwesomeIcon icon={faMusic} size="xs" pull="right" />
            </span>
            <span
              style={{ paddingLeft: '10px', color: '#ff9100' }}
              className="fa-music"
            >
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
                accept=".mp3"
                onChange={handleChange}
                style={{
                  display: 'none',
                }} /* Make the file input element invisible */
              />
            </button>
          </span>
          <h5 style={{ color: '#f4f4f4' }}>Or</h5>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Mp3Recorder />
        </div>
      </div>
    </div>
  )
}

export default Workline
