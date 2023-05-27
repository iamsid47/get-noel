import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function ChatInterface() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a POST request to the Flask app
    const response = await fetch("http://127.0.0.1:4500/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userInput }),
    });

    const responseData = await response.json();
    const { response: aiResponse } = responseData;

    // Update the messages state with the user message
    setMessages((prevMessages) => [
      ...prevMessages,
      { content: userInput, sender: "User" },
    ]);

    // Clear the user input
    setUserInput("");

    // Add a small delay before adding the AI response
    setTimeout(() => {
      // Update the messages state with the AI response
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: aiResponse, sender: "Noel" },
      ]);
    }, 1000); // Delay duration in milliseconds
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <section>
      <Navbar />
      <section className="grid grid-cols-2 min-h-screen">
        <div className="bg-gray-900 flex items-center justify-end">
          <div>
            <h1 className="text-9xl text-white text-right p-6 tracking-tighter">
              That's Noel In Action
            </h1>
          </div>
        </div>
        <div className="m-6 rounded-xl space-y-2 flex flex-col p-4 bg-gray-200 justify-around overflow-y-scroll overflow-x-hidden max-h-screen">
          <div className="bg-white px-3 py-1.5 rounded-xl text-center">
            <h1 className="text-sm text-gray-600">
              I'm Noel. Currently serving on behalf of Kulthe Media. At your
              service!
            </h1>
          </div>
          <div className="space-y-2 max-w-xl grid grid-cols-1 justify-center p-4 my-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex justify-between space-x-2 ${
                  message.sender === "User" ? "text-right" : "text-left"
                }`}
              >
                <h1
                  className={`px-3 py-1.5 rounded ${
                    message.sender === "User"
                      ? "bg-blue-700 text-white"
                      : "bg-white"
                  }`}
                >
                  {message.sender}
                </h1>
                <h1
                  className={` rounded-xl py-1.5 px-3 ${
                    message.sender === "User"
                      ? "text-right bg-blue-700 text-white"
                      : "text-left bg-white"
                  }`}
                >
                  {message.content}
                </h1>
              </div>
            ))}
          </div>

          <form
            className="flex justify-center space-x-2 sticky bottom-0"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="w-4/5 px-3 py-1.5 bg-gray-200 rounded-lg ring-2 ring-gray-500 focus:outline-none shadow-sm"
              placeholder="Ask me anything..."
              value={userInput}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center px-3 text-sm py-2.5 text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </section>
  );
}

export default ChatInterface;
