import { auth } from "../config.js";
import {useContext} from "react";
import {UserContext} from "../App.jsx";
export default function ChatMessage(props) {
  const user=useContext(UserContext);
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
  return (
    <>
      <div className={`${user.uid===uid? " ml-auto flex-row-reverse " : "mr-auto "} message
       ${messageClass} m-2 flex max-w-[80%]   w-fit }`}>
        <img
          className={`${user.uid===uid? "ml-2" : "mr-2"} 
          w-6 h-6 flex flex-wrap  rounded-full`}
          src={
            photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
          }
        />
          <div className={`${user.uid===uid? "pl-2 ml-auto flex-row-reverse bg-gray-700" : "mr-auto pr-2 bg-sky-700"} 
          message rounded-2xl px-2 py-0.5 m-1}`}>
        <p className="text-1xl">{text}</p>
          </div>
      </div>
    </>
  );
}
