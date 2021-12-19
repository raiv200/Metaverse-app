import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUserName from "./ChangeUserName";

function Header() {
  const { user } = useMoralis();

  return (
    <div className="sticky mx-5 md:mx-0top-0 mt-5 p-5 z-50 text-sky-600 bg-gradient-to-b from-gray-600  to-fuchsia-900 border-b-2 border-pink-700 rounded-xl shadow-lg shadow-purple-600">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-28 w-28 hidden lg:inline-grid">
          <Image
            className="rounded-full"
            objectFit="cover"
            src="https://links.papareact.com/3pi"
            layout="fill"
          />
        </div>
        {/* Avatar Component  */}
        <div className=" col-span-4 text-left lg:text-center space-y-2">
          <div className="relative h-40 w-40 lg:mx-auto ring-fuchsia-900 ring-8 rounded-full">
            {/* Avatar  */}
            <Avatar />
          </div>
          {/* Welcome Message */}

          <h1 className="text-3xl text-rose-500">
            Welcome to the Vikas Rai's METAVERSE APP.
          </h1>
          {/* Username */}
          <h2 className="text-5xl  text-fuchsia-500 font-bold truncate">
            {user.getUsername()}
          </h2>

          {/* Change User Name Component  */}
          <ChangeUserName />
        </div>
      </div>
    </div>
  );
}

export default Header;
