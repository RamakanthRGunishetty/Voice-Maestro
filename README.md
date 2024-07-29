# Voice Maestro

Voice Maestro is an innovative real-time audio processing system that converts live human vocals into musical instrument sounds. This project showcases the integration of digital signal processing techniques and deep learning models into a user-friendly React interface.

## Features

- **Real-Time Vocal to Instrument Conversion:** Uses advanced digital signal processing and deep learning to transform live vocal input into musical instrument sounds.
- **User-Friendly Interface:** A React-based front-end ensures an accessible and seamless user experience.
- **Pitch Transfer:** Utilizes the librosa Python library for precise pitch transfer.

## Demo Video

**Watch the demo video to see Voice Maestro in action:**

[![Voice Maestro Demo](./workline.png)](./react-app.mp4)

## Installation

To run this project locally, follow these steps:

### Prerequisites

- React.js
- SASS(Syntactically Awesome Stylesheet)
- Node.js and npm
- Python Flask
- librosa

### Steps

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/RamakanthRGunishetty]/Voice-Maestro.git
   cd Voice-Maestro
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

I welcome contributions to enhance Voice Maestro. To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.


## Contact

For questions or feedback, please reach out to me at [ramakanthrg2003@gmail.com](mailto:ramakanthrg2003@gmail.com).
