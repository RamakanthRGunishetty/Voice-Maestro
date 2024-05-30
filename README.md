# Voice Maestro

Voice Maestro is an innovative real-time audio processing system that converts live human vocals into musical instrument sounds. This project showcases the integration of digital signal processing techniques and deep learning models into a user-friendly React interface.

## Features

- **Real-Time Vocal to Instrument Conversion:** Uses advanced digital signal processing and deep learning to transform live vocal input into musical instrument sounds.
- **User-Friendly Interface:** A React-based front-end ensures an accessible and seamless user experience.
- **Pitch Transfer:** Utilizes the librosa Python library for precise pitch transfer.

## Demo Video

Watch the demo video to see Voice Maestro in action:

[![Voice Maestro Demo](./react-app.p4)](./react-app.p4)

> Note: Replace `path/to/thumbnail.jpg` with the path to the thumbnail image of your video and `path/to/demo_video.mp4` with the path to your actual video file. If you plan to upload the video to a platform like YouTube, use the YouTube link here.

## Installation

To run this project locally, follow these steps:

### Prerequisites

- Node.js and npm
- Python and pip
- librosa library
- React.js
- SASS

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/voice-maestro.git
   cd voice-maestro
   ```

2. **Install Node.js dependencies:**

   ```bash
   npm install
   ```

3. **Install Python dependencies:**

   ```bash
   pip install librosa
   ```

4. **Run the development server:**

   ```bash
   npm start
   ```

## Usage

1. Open your web browser and navigate to `http://localhost:3000`.
2. Use your microphone to sing or speak. The system will convert your vocal input into the selected musical instrument sound in real-time.

## Technical Details

### Real-Time Vocal to Instrument Conversion

The core functionality of Voice Maestro involves converting live vocal input into instrument sounds. This is achieved using a combination of digital signal processing (DSP) techniques and deep learning models. The `librosa` library is used for pitch extraction and transformation.

### React Integration

The React front-end ensures a smooth and interactive user experience. The real-time audio processing is seamlessly integrated into the React interface, allowing users to easily interact with the system and customize their experience.

## Contributing

We welcome contributions to enhance Voice Maestro. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.


## Contact

For questions or feedback, please reach out to us at [your.email@example.com](mailto:ramakanthrg2003@gmail.com).
