import React from "react"
import AgrilandConnect from "../assets/portfolio/Argriland-Connect.png"
import Breathe from "../assets/portfolio/Breathe.png"
import CodeCard from "../assets/portfolio/Code_Card.png"
import WeatherApp from "../assets/portfolio/Weather_App.png" 
import TrafficViolationReportingSystem from "../assets/portfolio/TrafficViolationReportingSystem.png"
import SmartHomeAutmationSystem from "../assets/portfolio/Smart_Home_Autmation_System.png"
import Telemedicine from "../assets/portfolio/Telemedicine.png"
import githubstatsapps from "../assets/portfolio/githubstatsapps.png"
import SkillHive from "../assets/portfolio/SkillHive.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: AgrilandConnect,
      title: "Agriland-Connect",
      link: "https://agrilandconnect.com/",
    },
    {
      id: 2,
      src: Breathe,
      title: "Breathe",
      link: "https://www.breathehaus.com",
    },
    {
      id: 3,
      src: CodeCard,
      title: "Code_Card",
      link: "https://github.com/EndrexAkoto/Code_Card.git",
    },
    {
      id: 4,
      src: WeatherApp,
      title: "weather_application",
      link: "https://github.com/EndrexAkoto/weather_application.git",
    },
    {
      id: 5,
      src: TrafficViolationReportingSystem,
      title: "Traffic_Violation_Reporting_System",
      link: "https://github.com/EndrexAkoto/Traffic_Violation_Reporting_System.git",
    },
    {
      id: 6,
      src: SmartHomeAutmationSystem,
      title: "Smart_Home_Autmation_System",
      link: "https://github.com/EndrexAkoto/Smart_Home_Autmation_System.git",
    },
    {
      id: 7,
      src: Telemedicine,
      title: "Telemedicine",
      link: "https://github.com/EndrexAkoto/Telemedicine-.git",
    },
    {
      id: 8,
      src: githubstatsapps,
      title: "github_stats_apps",
      link: "https://github.com/EndrexAkoto/github_stats_app.git",
    },
    {
      id: 9,
      src: SkillHive,
      title: "SkillHive",
      link: "https://skillhive.netlify.app/",
    },
  ]

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, title, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt={title}
                  className="rounded-md duration-200 hover:scale-105"
                />
                <p className="text-center mt-2">{title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
