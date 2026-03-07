# The simplest Python API server
from flask import Flask, jsonify, request

app = Flask(__name__)

# Simple GET endpoint
@app.route('/')
def home():
    return jsonify({"message": "Hello, World!"})

# GET with path parameter
@app.route('/user/<name>')
def get_user(name):
    return jsonify({"user": name})

# POST endpoint
@app.route('/data', methods=['POST'])
def post_data():
    data = request.get_json()
    return jsonify({"received": data}), 201

# GET with query parameters
@app.route('/search')
def search():
    query = request.args.get('q', 'default')
    return jsonify({"query": query})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
