import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

function Messages() {
  const MINS_DUARTIONS = 1440;

  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);

  const { data, loading, error } = useMoralisQuery("Messages", (query) =>
    query
      .ascending("createdAt")
      .greaterThan(
        "createdAt",
        new Date(Date.now() - 1000 * 60 * MINS_DUARTIONS)
      ),
      [],
      {
        live: true,
      }
  );

  return (
    <div className="pb-56 ">
      <div className="my-5">
        <ByMoralis
          style={{
            width: "200px",
            height: "60px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </div>
      <div className="space-y-10 p-9 mr-5 ml-5 max-w-2xl lg:max-w-4xl lg:mx-auto bg-gradient-to-b rounded-2xl shadow-md shadow-sky-200 from-rose-500 to-fuchsia-800">
        {/* Each Message  */}
       {data.map((message) => (
         <Message key ={message.id} message={message} />
       ))}
      </div>

      <div className="flex justify-center">
        {/* Send Message  */}
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>

      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
        <p>You are up to date {user.getUsername}🎉.</p>
      </div>
    </div>
  );
}

export default Messages;
