from flask import Flask, render_template, request, jsonify
import bcrypt

app = Flask(__name__)


def hash_password(password):
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed

hashed_password = hash_password("474nxw41k3r5") 
with open('password.txt', 'wb') as file:
    file.write(hashed_password)


@app.route('/check_password', methods=['POST'])
def check_password():
    password = request.json.get('password')

    with open('password.txt', 'rb') as file:
        stored_password = file.read()

    if bcrypt.checkpw(password.encode('utf-8'), stored_password):
        authenticated = True
    else:
        authenticated = False

    return jsonify({'authenticated': authenticated})

if __name__ == '__main__':
    app.run(debug=True)
