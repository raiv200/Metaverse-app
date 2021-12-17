import Head from 'next/head';
import Login from '../components/Login';
import {useMoralis} from "react-moralis";

export default function Home() {

  const {isAuthenticated ,logout} = useMoralis();

  if(!isAuthenticated) return <Login />;
  return (
    <div className="bg-black w-full h-screen flex flex-col space-y-10 items-center p-60">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h1 className="text-6xl text-emerald-400 font-bold ">Welcome to my <span className="tracking-wider uppercase">Metaverse App.</span></h1>
    <button onClick={logout} className="bg-teal-500 text-2xl hover:bg-teal-300 hover:text-gray-800 p-4 w-48  rounded-lg font-semibold text-white">Logout</button>
    </div>
  )
}
