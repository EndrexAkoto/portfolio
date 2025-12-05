import React from "react"
import HeroImage from "../assets/heroImage.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 pt-28"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center min-h-screen px-4 md:flex-row">
        {/* Text Section */}
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-3xl sm:text-5xl font-bold text-white">
            Full Stack Software Engineer & Robotics and IoT Developer
          </h1>

          <p className="text-gray-400 py-4 max-w-md">
            Experienced in full-stack development, IoT solutions, and network administration, 
            with a strong foundation in Information Technology and systems management. 
            Proficient in Python, JavaScript, TypeScript, React.js, HTML, CSS, and modern frameworks.
          </p>

          <p className="text-gray-400 pb-6 max-w-md">
            Skilled in designing, configuring, and maintaining secure networks with Cisco routers, switches, and firewalls. 
            Experienced in system analysis, database management, and building scalable, secure, and user-friendly applications. 
            Passionate about leveraging technology to drive innovation, efficiency, and business growth.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0 md:ml-8">
          <img
            src={HeroImage}
            alt="Endrex Martin Akoto"
            className="rounded-full mx-auto w-72 h-72 md:w-96 md:h-96 object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
