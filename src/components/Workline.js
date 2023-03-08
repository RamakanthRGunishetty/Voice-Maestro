import React from 'react'
import './Workline.css'
import Mp3Recorder from './AudioRec/Audiorec'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

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
    <div className="Workline" id="Workline" fluid>
      <div className="Work-Container">
        <div className="drop-card">
          <h2>Vocals to Music</h2>
          <span>Instanly ,convert vocals to any instrumental tones</span>
          <span>
            <button
              onClick={handleClick}
              className="btn-upload"
              bg-gradient-primary
              text-white
            >
              Upload a file
              <span id="fa-fold">
                <FontAwesomeIcon icon={faFolder} />
              </span>
            </button>
            <input
              type="file"
              ref={hiddenFileInput}
              accept=".mp3"
              onChange={handleChange}
              style={{
                display: 'none',
              }} /* Make the file input element invisible */
            />
          </span>
          <h4>Or</h4>
          <center>
            <Mp3Recorder />
          </center>
        </div>
      </div>
    </div>
  )
}

export default Workline
