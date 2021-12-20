import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessagesRef }) {
  const { user, Moralis } = useMoralis();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        () => {
          // there comes the message
        },
        (error) => {
          console.log(error.message);
        }
      );
    endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    setMessage("");
  };
  return (
    <form className="flex fixed bottom-10 max-w-2xl rounded-full border-4 border-blue-400 bg-black opacity-80 w-11/12 px-6 py-4 ">
      <input
        value={message}
        className=" flex-grow outline-none bg-transparent text-white placeholder-gray-500"
        placeholder={`Type your message here ${user.getUsername()}....`}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        onClick={sendMessage}
        className="font-bold  text-pink-500"
      >
        Send
      </button>
    </form>
  );
}

export default SendMessage;
