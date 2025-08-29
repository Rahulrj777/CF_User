import React, { useEffect } from "react";

const ChatBot = () => {
  useEffect(() => {
    // Initialize the Botpress chatbot widget when the component is mounted
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.com/webchat/inject.js";  // URL of the Botpress webchat widget
    script.async = true;
    script.onload = () => {
      window.botpressWebChat.init({
        host: "http://localhost:3000",  // Botpress server URL (change this to your Botpress server URL)
        botId: "72d8c134-648e-43d8-b095-d72c2df67319",  // Replace with your Botpress bot ID
      });
    };
    document.body.appendChild(script);

    // Clean up the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;  // This component does not need to render any JSX
};

export default ChatBot;
