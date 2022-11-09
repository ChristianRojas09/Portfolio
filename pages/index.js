import Head from 'next/head'
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Christian Rojas Portfolio</title>
        <meta name="description" content="Welcome to my portfolio!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="bg-gray-800 min-h-screen"> 
        <nav className="py-10 mb-12 flex justify-between pr-3">
          <h1 className="text-xl text-black"></h1>
          <ul className="flex items-right">
             <li className="px-2">About</li>
             <li className="px-2">Experience</li>
             <li className="px-2">Projects</li>
             <li className="px-2">Contact</li>
            <li>
              <a className="bg-green-400 text-xl px-4 py-2 rounded-md ml-8" href='#'>Resume</a>
            </li>
          </ul>
        </nav>
        <div className="text-gray-300"> 
        </div>
        <div className="text-gray-300 pl-6 pr-6">
          <h4 className=" text-cyan-500 text-left">Hi, my name is</h4>
          <h1 className="text-4xl py-2 font-medium">Christian Rojas</h1>
          <p className="text-md py-5 leading-8">
            I'm a software developer with a passion for building applications that 
            are accessible to all users. My experience ranges from web development, 
            to mobile and web application development. Currently, 
            I am building web solutions for Logical Position.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-15 py-3 text-gray-600">
          <a className="hover:animate-pulse delay-10000000" href="https://linkedin.com/in/christian-rojas09"><AiFillLinkedin/></a>
          <a className="hover:animate-pulse delay-10000000" href="https://github.com/CHRISTIANROJAS09"><AiFillGithub/></a>
        </div>
        </section>

        <section className="text-black text-center p-10 bg-gray-800 min-h-screen">
          <h3 className="text-3xl py-1">About Me</h3>
          <p className="text-md py-3 leading-8">Over the years, I have cultivated my 
          development skills in these languages:</p>
          <div>
            <div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
