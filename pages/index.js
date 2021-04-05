
import React, { useState, useEffect } from "react"
import Layout from "../components/Layout";
import Card from "../components/Card";
import { FiArrowDown, FiSend, FiMapPin } from "react-icons/fi";
import {
  DiReact, DiCss3, DiJsBadge, DiHtml5, DiSass,
  DiWordpress, DiGit, DiJavascript1
} from "react-icons/di";
import { SiTailwindcss, SiNextDotJs, SiFirebase } from "react-icons/si";

import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle
} from 'react-icons/ai'

import {
  FaDev
} from 'react-icons/fa'
import Image from 'next/image'

function Home() {
  // const [language, setLanguage] = useState([
  //   "Hello", "Bonjour", "Guten tag", "Namaste", "Salve", "Hola", "Assalamo aleikum"
  // ]);

  useEffect(() => {
    console.log('ddd')
  }, [])

  let lang = [
    "Hello", "Bonjour", "Guten tag", "Namaste", "Salve", "Hola", "Assalamo aleikum"
  ]



  return (
    <Layout>

      <div className="md:container px-3 py-10">
        <div className="min-h-screen">
          <h1 className="text-3xl font-bold"><span>Helloo!</span> <br /> My Name is Sandeep.</h1>
          <h2 className="md:text-8xl text-5xl leading-10 uppercase py-4 font-bold mt-4">Creative Frontend Dev.</h2>
          <div className="text-gray-400 uppercase py-4 flex justify-start gap-40 items-center flex-wrap">
            <h2 className="text-3xl mt-4 font-bold flex items-center gap-1">Based in Bangalore <FiMapPin /></h2>
            <h2 className="text-3xl mt-4 font-bold relative">Availability
              <span className="relative inline-flex ml-4 rounded-full h-7 w-7 bg-green-500">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              </span>
            </h2>
          </div>
        </div>

        <div className=" flex justify-between items-center flex-wrap">
          <div className="md:max-w-lg mb-4">
            <h2 className="text-xl my-8">I CURRENTLY WORK IN K12 TECHNO SERVICES.</h2>
            <p className="text-gray-400 text-lg mb-4">Hi folks, I am a creative frontend developer, writing code and moving pixels in the www.</p>
            <p className="text-gray-400 text-lg">I spent years developing design systems for clients along with other creative projects. <br />My goal as a developer is to write less code more efficiently, combining the power of reusable components with modern frameworks (React, Nextjs, Svelte). <br/>Additionally, I always strive to include new and innovative interactions to enhance the user experience.</p>
          </div>
          <div>
            <Image
              src="/dp.jpeg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>

        </div>

        <div className="min-h-screen mt-10 flex justify-center items-center flex-wrap flex-col">
          <h1 className="md:text-9xl text-5xl font-bold mb-20"><span className="text-gray-400">20</span><span className="-ml-6 text-red-400">-</span>FOLIO</h1>
          {/* all the list of projects  */}
          <div className="flex flex-wrap gap-8 justify-center items-center">
            {/* <div className="">
              <h3>OMS - ERP Software</h3>
              <p>About providing services to the clients</p>
            </div> */}
            <Card
              title='OMS - ERP Software'
              tech="Reactjs, React-Redux, material-ui, python."
              description='Software that school organizations use to manage day-to-day
              business activities such as Acdemics, Finance, Marketing, Digital
              marketing etc.'
            />
            <Card
              title='Always On Learning'
              tech="Reactjs, React-Redux, Material-ui, python."
              description='B2C Software that is being used to conduct online classes,
              expert tutoring, offline courses, etc.'
            />
            <Card
              title='CVBOX'
              tech="Reactjs, React-Redux, Bootstrap, python."
              description='Teacher hiring platform, with performance analysis, mcq test,
              audio tests, etc.'
            />
            <Card
              title='ORCHIDS International School'
              tech='Wordpress | Nextjs'
              description='Static site which is used to showcase the school features,
              infrastrutures, Admisson forms and to generate leads for
              various branches.'
            />
          </div>
        </div>


        {/* some misc features to site */}

        <div className="min-h-screen text-xl font-bold flex justify-left items-center md:flex-row flex-wrap">
          <div className="flex-none">
            <p>WAKE UP.</p>
            <p>KICK ASS.</p>
            <p className="text-gray-300">REPEAT.</p>
          </div>

          <div className="text-6xl flex justify-center items-center flex-col gap-4 flex-grow flex-wrap p-10">
            <h2 className="text-4xl mb-4">Stack</h2>
            <div className="flex gap-10 flex-wrap">
              
              <SiNextDotJs />
              <DiJavascript1 style={{ color: "#FFFF00" }} />
              <DiReact className="animate-spin-slow" style={{ color: "#61dbfb" }} />
              <DiHtml5 style={{ color: "#ffa500" }} />
              <SiTailwindcss  style={{ color: "#008080" }} />
              
            </div>
            <div className="flex gap-10 flex-wrap">
              <DiCss3 style={{ color: "#24a0ed" }} />
              <DiSass style={{ color: "#ff4767" }} /> 
              <DiWordpress  style={{ color: "#00749C" }} />
              <DiGit  style={{ color: "#f34f29" }} />
              <SiFirebase  style={{ color: "#FF8A65" }} />
            </div>
          </div>
          
        </div>
        <div className="min-h-screen text-xl font-bold flex justify-center items-left flex-col">
          <div className="flex gap-4 mb-4 text-2xl cursor-pointer">
            <a href="https://www.instagram.com/_iamsandeep/" target="_blank"><AiFillInstagram /></a>
            <a href="https://www.linkedin.com/in/sandeep-s-8a172894/" target="_blank"><AiFillLinkedin /></a>
            <a href="https://github.com/san9845" target="_blank"><AiFillGithub /></a>
            <a href="https://twitter.com/san__js" target="_blank"><AiFillTwitterCircle /></a>
            <a href="https://dev.to/san__js" target="_blank"><FaDev /></a>
          </div>
          <p>Say Hello,</p>
          <p className="md:text-8xl xs: text-4xl  flex items-center gap-4"><a href="mailto:iamsk14@live.com">IAMSK14@LIVE.COM </a><FiSend /></p>
          <a href="./Sandeep2021-portfolio.pdf" download><p className="animate-bounce mt-4 flex items-center gap-1">Download Resume <FiArrowDown /></p></a>
        </div>
      </div>
    </Layout>
  )
}

export default Home