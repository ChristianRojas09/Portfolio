import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import Link from 'next/link';

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
          <h1 className="text-xl"></h1>
          <ul className="flex items-right">
             <Link href="/#aboutme"><li className="px-2">About</li></Link>
             <Link href="#experience"><li className="px-2">Experience</li></Link>
             <li className="px-2">Projects</li>
             <li className="px-2">Contact</li>
            <li>
              <script>
                function download() {
                  const URL
                }
              </script>
              <a className="bg-green-400 text-xl px-4 py-2 rounded-md ml-8" href="/public/ChristianRojasResume_22.pdf" target="_blank" rel="noopener noreferrer"><button>Resume</button></a>
            </li>
          </ul>
        </nav>
        <div className="text-gray-300"> 
        </div>
        <div className="text-gray-300 pl-6 pr-10 font-sans">
          <h4 className=" text-cyan-500 text-left">Hi, my name is</h4>
          <h1 className="text-6xl py-2 font-bold font-sans">Christian Rojas.</h1>
          <p className="text-md py-5 leading-8 font-sans pr-10">
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

        <section id="aboutme" className="text-gray-300 text-left bg-gray-800 min-h-screen pl-6 pr-6 font-sans">
          <div className="pr-10 font-sans">
            <h3 className="text-3xl py-1 font-bold">About Me</h3>
            <div className="pr-10 font-sans">
            <p className="text-md py-3 leading-8">Hi! my name is Christian. I have mostly grown up on the internet, having learned my first language (HTML) at 17 years old. The interest in software started when I was
            building small websites in my school computer lab because I loved the idea of being able to build anything I could think up.
            </p>
            <p className="text-md py-3 leading-8">Since then, I have built websites for myself, friends, and clients. Now, I am working with a <a className="text-cyan-500" href="https://www.logicalposition.com/">marketing agency</a> to provide web 
              solutions to clients. I focus on building accessible websites, while helping clients maintain 
              good rankings.
              </p>
            <p className="text-md py-3 leading-8">I am also a big lover of building web and mobile applications, most notably 
                using JavaScript, Node, Next, and React. I am a big fan of Python and C++ too, 
                using them to build robust applications.</p>
            <p className="text-md py-3 leading-8">Here are a few of the technologies I have been working on.</p>

            <div class="table pl-6">
            <div class="table-header-group">
              <div class="table-cell ">
              <li className="list-disc">JavaScript</li>
              </div>
              <div class="table-cell pl-12">
              <li className="list-disc">Node.js</li>
              </div>
            </div>
            <div class="table-column-group">
              <div class="table-colum">One Column</div>
              <div class="table-colum">Two Column</div>
            </div>
            <div class="table-row-group pl-5">
              <div class="table-row">
                <div class="table-cell">
                  <li className="list-disc">React</li></div>
                <div class="table-cell pl-12">
                <li className="list-disc">Next.js</li>
                </div>
              </div>
              <div class="table-row">
                <div class="table-cell">
                  <li className="list-disc">WordPress</li>
                </div>
                <div class="table-cell pl-12">
                <li className="list-disc">Tailwind</li>
                </div>
              </div>
              <div class="table-row">
                <div class="table-cell">
                  <li className="list-disc">Python</li>
                </div>
                <div class="table-cell pl-12">
                <li className="list-disc">SQL</li>
                </div>
              </div>
            </div>
          </div>


            </div>
          </div>
        </section>

        <section id="experience">

        </section>
      </main>
    </div>
  );
}
