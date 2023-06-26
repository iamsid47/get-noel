import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function ChatInterface() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://34.204.127.0:5010/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userInput }),
    });

    const responseData = await response.json();
    const { response: aiResponse } = responseData;

    setMessages((prevMessages) => [
      ...prevMessages,
      { content: userInput, sender: "User" },
    ]);

    setUserInput("");

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { content: aiResponse, sender: "Noel" },
      ]);
    }, 1000);
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <section>
      <Navbar />
      <section className="flex flex-col lg:grid lg:grid-cols-2">
        <div className="bg-gray-900 flex items-center justify-center lg:justify-end">
          <div>
            <h1 className="text-4xl font-semibold lg:text-9xl text-white text-right p-3 lg:p-6 tracking-tight lg:hidden">
              That's Noel In Action
            </h1>
            <h1 className="text-4xl font-semibold md:text-5xl lg:text-9xl text-white text-right p-3 lg:p-6 tracking-tight hidden lg:inline-block">
              That's Noel <br />
              In Action <span className="hidden lg:inline-block">&rarr;</span>
            </h1>
          </div>
        </div>
        <div className="m-6 rounded-xl space-y-2 flex flex-col p-4 bg-gray-200 justify-around  h-[640px]">
          <div className="bg-white px-3 py-1.5 rounded-xl text-center">
            <h1 className="text-md lg:text-xl font-semibold text-gray-600">
              I'm Noel. Currently serving on behalf of Kulthe Media. At your
              service!
            </h1>
          </div>
          <div className="overflow-y-scroll overflow-x-hidden h-[480px] text-lg">
            <div className="space-y-2  grid grid-cols-1 justify-center p-4 my-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex justify-between space-x-2 ${
                    message.sender === "User" ? "text-right" : "text-left"
                  }`}
                >
                  <p
                    className={`px-3 py-1.5 rounded my-1 ${
                      message.sender === "User"
                        ? "bg-blue-700 text-white"
                        : "bg-white"
                    }`}
                  >
                    {message.sender}
                  </p>
                  <p
                    className={` rounded-xl py-1.5 px-3 my-1 ${
                      message.sender === "User"
                        ? "text-right bg-blue-700 text-white"
                        : "text-left bg-white"
                    }`}
                  >
                    {message.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <form
            className="flex justify-center space-x-2 sticky bottom-0 pt-1"
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
