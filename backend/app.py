from flask import Flask, request, jsonify
import openai
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

openai.api_key = "API_KEY_HERE"


@app.route("/chat", methods=["POST"])
def send_message():
    user_message = request.json["message"]
    ai_response = generate_ai_response(user_message)
    return jsonify({"response": ai_response})


def generate_ai_response(user_message):
    prompt = f"You: {user_message}\nAI:"

    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        temperature=0.7,
        max_tokens=128,
        top_p=1.0,
        frequency_penalty=0.0,
        presence_penalty=0.0,
    )

    ai_response = response.choices[0].text.strip()

    return ai_response


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=4500)
