import Head from 'next/head'
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin} from 'react-icons/ai'
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
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl text-black">logo?</h1>
          <ul className="flex items-center">
             <li className="px-2">About</li>
             <li className="px-2">Experience</li>
             <li className="px-2">Projects</li>
             <li className="px-2">Contact</li>
            <li>
              <a className="bg-green-400 text-xl px-4 py-2 rounded-md ml-8" href='#'>Resume</a>
            </li>
          </ul>
        </nav>
        <div className="text-black text-center p-10"> 
        <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Hello World!')
            .callFunction(() => {
              console.log('String typed out!');
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              console.log('All strings were deleted');
            })
            .start();
        }}
      />
        </div>
        <div className="text-black text-center p-10">
          <h2 className="text-2xl py-2 font-medium">Developer and Designer</h2>
          <p className="text-md py-5 leading-8">
            Developer with a passion for building applications that benefit the user. My experience ranges from web development, to mobile and web application development.
          </p>
        </div>
        <div className="text-5xl flex justify-center gap-15 py-3 text-gray-600">
          <AiFillLinkedin/>
        </div>
        </section>

        <section className="text-black text-center p-10 bg-gray-800 min-h-screen">
          <h3 className="text-3xl py-1">My skills</h3>
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
