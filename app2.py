from flask import Flask, render_template,url_for, request, redirect, Response
from flask_socketio import SocketIO, emit, send


app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

if __name__ == '__main__':
    app.run(debug=True)


@socketio.on('message')
def handle_message(message):
    print('received message: ' + message)


@app.route('/')
def ping():
    socketio.emit('ping event', {'data': 42}, namespace='/chat')