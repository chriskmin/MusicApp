from flask import Flask, request, jsonify
import librosa
import numpy as np

app = Flask(__name__)

@app.route('/beat_drop', methods=['POST'])
def beat_drop():
    audio_file = request.files['file']
    beat_drop_time = find_beat_drop(audio_file)  # Assuming find_beat_drop() is the function you implemented earlier
    return jsonify({'beat_drop_time': beat_drop_time})

if __name__ == '__main__':
    app.run(port=5000)