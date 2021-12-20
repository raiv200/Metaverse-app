import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

function Message({ message }) {
  const { user } = useMoralis();
  const isUserMessage = message.get("ethAddress") === user.get("ethAddress");
  return (
    <div
      className={`relative flex items-end space-x-4 realtive ${
        isUserMessage && "justify-end"
      }`}
    >
      <div className={`relative w-8 h-8 ${isUserMessage && "order-last ml-2"}`}>
        <Avatar username={message.get("username")} />
      </div>
      <div
        className={`flex space-x-4 rounded-lg p-3 ${
          isUserMessage
            ? "rounded-br-none bg-rose-800"
            : "rounded-bl-none bg-blue-700"
        }`}
      >
        <p className={`${isUserMessage ? 'text-pink-200' : 'text-sky-200'}`}>{message.get("message")}</p>
      </div>
      {/* time stamp  */}

      <p className={`absolute -bottom-5 text-xs font-semibold ${
          isUserMessage ? "text-rose-300" : "text-sky-300"
        }`}
      >
        {message.get("username")}
      </p>
    </div>
  );
}

export default Message;
