import React from "react"

import Cisco from "../assets/Cisco.jpg"
import Cisco_banners from "../assets/Cisco_banners.png"
import ciscoccna from "../assets/ciscoccna.png"
import CISCO_cheat from "../assets/CISCO_cheat.jpg"
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import reactImage from "../assets/react.png"
import nextjs from "../assets/nextjs.png"
import graphql from "../assets/graphql.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import bootstrap from "../assets/Bootstrap_logo.png"
import python from "../assets/python.jpg"
import flask from "../assets/flask.png"
import express from "../assets/express.png"
import postgresql from "../assets/postgres.png"
import mysql from "../assets/mysql.png"
import sqlite from "../assets/sqllite.jpg"
import cpp from "../assets/cpp.jpg"
import arduino from "../assets/adruino.png"
import raspberryPi from "../assets/rasberry.png"
import edgeImpulse from "../assets/edgeimpulse.png"
import opencv from "../assets/opencv.png"

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-600" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-600" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-600" },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-600" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-600" },
    { id: 6, src: nextjs, title: "Next JS", style: "shadow-white" },
    { id: 7, src: graphql, title: "GraphQL", style: "shadow-pink-600" },
    { id: 8, src: github, title: "GitHub", style: "shadow-gray-600" },
    { id: 9, src: bootstrap, title: "Bootstrap", style: "shadow-purple-600" },
    { id: 10, src: python, title: "Python", style: "shadow-yellow-400" },
    { id: 11, src: flask, title: "Flask", style: "shadow-gray-500" },
    { id: 12, src: express, title: "Express.js", style: "shadow-gray-500" },
    { id: 13, src: postgresql, title: "PostgreSQL", style: "shadow-blue-500" },
    { id: 14, src: mysql, title: "MySQL", style: "shadow-blue-400" },
    { id: 15, src: sqlite, title: "SQLite", style: "shadow-gray-400" },
    { id: 16, src: cpp, title: "C++", style: "shadow-blue-400" },
    { id: 17, src: arduino, title: "Arduino", style: "shadow-blue-600" },
    { id: 18, src: raspberryPi, title: "Raspberry Pi", style: "shadow-red-600" },
    { id: 19, src: edgeImpulse, title: "Edge Impulse", style: "shadow-green-600" },
    { id: 20, src: opencv, title: "OpenCV", style: "shadow-green-400" },
    { id: 21, src: Cisco, title: "Cisco", style: "shadow-blue-500" },
    { id: 22, src: Cisco_banners, title: "Cisco Banner", style: "shadow-blue-400" },
    { id: 23, src: ciscoccna, title: "Cisco CCNA", style: "shadow-green-600" },
    { id: 24, src: CISCO_cheat, title: "Cisco Cheat Sheet", style: "shadow-gray-500" },
  ]

  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full md:min-h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">Experienced with various technologies</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
