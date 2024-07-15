from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import librosa
import soundfile as sf

app = Flask(__name__)
CORS(app)

OUTPUT_DIR = 'converted_audio'
os.makedirs(OUTPUT_DIR, exist_ok=True)

pitch_shift_amounts = {
    "guitar": -15,
    "nadaswaram": 34.648,
    "violin": -7,
    "saxophone": 20,
    "flute": 25,
    "banjo": 12.5,
    "drums": -25
}

@app.route('/convert', methods=['POST'])
def convert_to_instrument():
    if 'audio' not in request.files:
        return jsonify({"error": "No audio file provided"}), 400

    if 'instrument' not in request.form:
        return jsonify({"error": "No instrument selected"}), 400

    input_audio = request.files['audio']
    target_instrument = request.form['instrument']

    if input_audio.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if target_instrument not in pitch_shift_amounts:
        return jsonify({"error": "Invalid instrument"}), 400
    
    try:
        input_audio_path = os.path.join(OUTPUT_DIR, input_audio.filename)
        input_audio.save(input_audio_path)

        y, sr = librosa.load(input_audio_path)

        pitch_shift_amount = pitch_shift_amounts[target_instrument]
        y_shifted = librosa.effects.pitch_shift(y, sr=sr, n_steps=pitch_shift_amount)

        # Generate output file path
        output_file = f"output_{os.path.splitext(input_audio.filename)[0]}_{target_instrument}.wav"
        output_file_path = os.path.join(OUTPUT_DIR, output_file)

        # Save the synthesized audio
        sf.write(output_file_path, y_shifted, sr)

        # Return the path to the converted audio file
        return jsonify({"message": "Audio converted successfully", "output_file": output_file_path}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    print("Starting Flask server...")
    app.run(debug=False, port=5000)
