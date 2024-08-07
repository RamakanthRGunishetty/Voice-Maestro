from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
import librosa
import soundfile as sf

app = Flask(__name__)
CORS(app)

OUTPUT_DIR = os.path.join('converted_audio')
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
        print(f"Saved input audio to {input_audio_path}")

        y, sr = librosa.load(input_audio_path)

        pitch_shift_amount = pitch_shift_amounts[target_instrument]
        y_shifted = librosa.effects.pitch_shift(y, sr=sr, n_steps=pitch_shift_amount)

        output_file = f"output_{os.path.splitext(input_audio.filename)[0]}_{target_instrument}.wav"
        output_file_path = os.path.join(OUTPUT_DIR, output_file)
        print(f"Saving converted audio to {output_file_path}")

        sf.write(output_file_path, y_shifted, sr)
        print(f"Converted audio saved as {output_file_path}")

        download_url = f"/converted_audio/{output_file}"

        return jsonify({"message": "Audio converted successfully", "output_file": output_file, "download_url": download_url}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/converted_audio/<filename>', methods=['GET'])
def download_file(filename):
    print(f"Request to download file {filename}")
    return send_from_directory(OUTPUT_DIR, filename, as_attachment=True)

if __name__ == '__main__':
    print("Starting Flask server...")
    app.run(debug=True, port=5000)
