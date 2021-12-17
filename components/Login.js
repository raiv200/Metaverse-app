import Image from "next/image";
import {useMoralis} from "react-moralis";

function Login() {
    const {authenticate} =useMoralis();
  return (
     <div className="bg-black relative text-white">
        <h1>This is Login Page.</h1>

       <div className="flex flex-col absolute z-50 h-4/6 w-full items-center space-y-5 justify-center">
         {/* papafam logo */}
         <Image 
         className="object-cover rounded-full"
          src="https://links.papareact.com/3pi"
          width={200}
          height={200}
          />

        {/* login button */}
        <button onClick={authenticate} className="bg-purple-700 p-3 rounded-lg animate-pulse font-semibold text-white">Login to METAVERSE</button>
       </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
