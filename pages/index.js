import Head from 'next/head';
import Login from '../components/Login';
import {useMoralis} from "react-moralis";
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {

  const {isAuthenticated ,logout} = useMoralis();

  if(!isAuthenticated) return <Login />;
  return (
    <div className=" h-screen overflow-y-scroll bg-gradient-to-b from-gray-900 to-fuchsia-900">
      <Head>
        <title>METAVERSE BY VIKAS RAI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="flex justify-between items-center py-4 px-5 ">
    <h1 className="text-3xl text-rose-700 font-bold ">Welcome to my <span className="tracking-wider uppercase">Metaverse App.</span></h1>
    <button onClick={logout} className="bg-teal-500 text-xl z-50 hover:bg-teal-300 hover:text-gray-800 py-2 px-1 w-28  rounded-lg font-semibold text-white">Logout</button>
    </div>
    

      <div className="max-w-screen-xl mx-auto">
        {/* Header  */}
        <Header />
        {/* Message */}
        <Messages />
      </div>

    
    
    </div>
  )
}
