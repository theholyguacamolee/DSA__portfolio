from flask import Flask, jsonify, request
from flask_cors import CORS
from dsa.linked_list import LinkedList
from dsa.geometry import calculate_circle_area, calculate_triangle_area
from dsa.string_ops import to_uppercase
from dsa.infix_to_postfix import infix_to_postfix, validate_infix

app = Flask(__name__)
CORS(app)

# Store linked list instances per session (simple in-memory storage)
linked_lists = {}

@app.route('/')
def home():
    return jsonify({'message': 'Flask backend is running!'})

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok', 'message': 'DSA backend ready'})

# Circle Area
@app.route('/api/circle/area', methods=['POST'])
def circle_area():
    data = request.json
    radius = data.get('radius', 0)
    area = calculate_circle_area(radius)
    return jsonify({'area': area})

# Triangle Area
@app.route('/api/triangle/area', methods=['POST'])
def triangle_area():
    data = request.json
    base = data.get('base', 0)
    height = data.get('height', 0)
    area = calculate_triangle_area(base, height)
    return jsonify({'area': area})

# Uppercase
@app.route('/api/uppercase', methods=['POST'])
def uppercase():
    data = request.json
    text = data.get('text', '')
    result = to_uppercase(text)
    return jsonify({'result': result})

# Infix to Postfix
@app.route('/api/infix-to-postfix', methods=['POST'])
def convert_infix():
    data = request.json
    infix = data.get('infix', '')
    
    is_valid, error_msg = validate_infix(infix)
    if not is_valid:
        return jsonify({'error': error_msg}), 400
    
    try:
        postfix = infix_to_postfix(infix)
        return jsonify({'postfix': postfix, 'infix': infix})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Linked List - Insert at Beginning
@app.route('/api/linkedlist/insert-beginning', methods=['POST'])
def insert_beginning():
    data = request.json
    session_id = data.get('session_id', 'default')
    value = data.get('value')
    
    if session_id not in linked_lists:
        linked_lists[session_id] = LinkedList()
    
    linked_lists[session_id].insert_at_beginning(value)
    items = linked_lists[session_id].to_array()
    return jsonify({'items': items})

# Linked List - Insert at End
@app.route('/api/linkedlist/insert-end', methods=['POST'])
def insert_end():
    data = request.json
    session_id = data.get('session_id', 'default')
    value = data.get('value')
    
    if session_id not in linked_lists:
        linked_lists[session_id] = LinkedList()
    
    linked_lists[session_id].insert_at_end(value)
    items = linked_lists[session_id].to_array()
    return jsonify({'items': items})

# Linked List - Remove at Beginning
@app.route('/api/linkedlist/remove-beginning', methods=['POST'])
def remove_beginning():
    data = request.json
    session_id = data.get('session_id', 'default')
    
    if session_id not in linked_lists:
        return jsonify({'error': 'No linked list found'}), 404
    
    removed = linked_lists[session_id].remove_at_beginning()
    items = linked_lists[session_id].to_array()
    return jsonify({'removed': removed, 'items': items})

# Linked List - Remove at End
@app.route('/api/linkedlist/remove-end', methods=['POST'])
def remove_end():
    data = request.json
    session_id = data.get('session_id', 'default')
    
    if session_id not in linked_lists:
        return jsonify({'error': 'No linked list found'}), 404
    
    removed = linked_lists[session_id].remove_at_end()
    items = linked_lists[session_id].to_array()
    return jsonify({'removed': removed, 'items': items})

# Linked List - Search
@app.route('/api/linkedlist/search', methods=['POST'])
def search():
    data = request.json
    session_id = data.get('session_id', 'default')
    value = data.get('value')
    
    if session_id not in linked_lists:
        return jsonify({'found': False})
    
    found = linked_lists[session_id].search(value)
    return jsonify({'found': found})

# Linked List - Clear
@app.route('/api/linkedlist/clear', methods=['POST'])
def clear_list():
    data = request.json
    session_id = data.get('session_id', 'default')
    
    if session_id in linked_lists:
        linked_lists[session_id] = LinkedList()
    
    return jsonify({'items': []})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
