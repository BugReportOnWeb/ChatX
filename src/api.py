from flask import Flask
from flask_restful import Api, Resource

from main import chatbot

app = Flask(__name__)
api = Api(app)

class Chatbot(Resource):
    def get(self, user_input):
        response = chatbot(user_input)
        return response;

api.add_resource(Chatbot, "/<user_input>")

if __name__ == "__main__":
    app.run()

