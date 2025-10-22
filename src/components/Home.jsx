import React from "react"
import HeroImage from "../assets/heroImage.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center min-h-screen px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl sm:text-5xl font-bold text-white">
            Full Stack Software Engineer & IoT Developer
          </h2>

          <p className="text-gray-400 py-6 max-w-md">
            Highly skilled in Full Stack Software Engineering and Network
            Administration with a strong background in Information Technology,
            IoT, and systems management. Proficient in Typescript, Python, JavaScript, HTML,
            CSS, React.js, and modern frameworks, while experienced in designing,
            configuring, and maintaining secure networks with Cisco routers,
            switches, and firewalls.
          </p>

          <p className="text-gray-400 pb-6 max-w-md">
            Proficient in software engineering principles, database management, and
            system analysis, with hands-on expertise in disaster recovery,
            network monitoring, and troubleshooting. Committed to leveraging
            networking expertise and development skills to build innovative,
            scalable, and secure solutions.
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

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full mx-auto w-72 h-72 md:w-96 md:h-96 object-cover shadow-lg"
          />

        </div>
      </div>
    </div>
  )
}

export default Home
