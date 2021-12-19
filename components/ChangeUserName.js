import { useMoralis } from "react-moralis";

function ChangeUserName() {
    const {setUserData , isUserUpdating ,useError ,user} =useMoralis();

     const setUserName = () => {
         const username= prompt(
             `Enter the new user name:(current:${user.getUsername()})`
         );
         if(!username) return;
         setUserData({
             username:username
         });
     };
    return (
        <div className="text-gray-50  text-md absolute top-5 right-10">
        <button disabled={isUserUpdating} onClick={setUserName} className="bg-rose-400 hover:bg-rose-600 hover:text-sky-100 px-4 py-2 font-medium rounded-lg">Change your Username</button>
            
        </div>
    )
}

export default ChangeUserName
