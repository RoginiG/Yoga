from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # Allow requests from React frontend

# Path to JSON data file
DATA_PATH = 'poses.json'

# Route for searching yoga poses by pain type
@app.route('/api/search')
def search_yoga():
    query = request.args.get('q', '').lower()
    with open(DATA_PATH) as f:
        poses = json.load(f)
    
    results = [pose for pose in poses if query in pose['pain_type'].lower()]
    return jsonify(results)

# Route for serving images from the static folder
@app.route('/images/<path:filename>')
def serve_image(filename):
    return send_from_directory('static', filename)  # <- matches your current folder structure

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)

