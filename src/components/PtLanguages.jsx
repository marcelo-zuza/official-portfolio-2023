import React from 'react'
import JsIcon from '../assets/img/icons/js.png'
import HtmlIcon from '../assets/img/icons/html-5.png'
import CssIcon from '../assets/img/icons/css-3.png'
import GitIcon from '../assets/img/icons/git.png'
import MySqlIcon from '../assets/img/icons/mysql2.png'
import NodeIcon from '../assets/img/icons/nodejs.png'
import PostgreIcon from '../assets/img/icons/postgre.png'
import TailwindIcon from '../assets/img/icons/tailwind.png'
import ReactIcon from '../assets/img/icons/atom.png'

const PtLanguages = () => {
  return (
    <div>
        <div className="bg-green-500 h-12 md:h-114"></div>
        <div className="bg-black text-white md:-mt-20 md:-mb-20 font-BebasNeue tracking-widest">
            <div className="px-10 py-14 mx-0 md:m-20 md:px-6 md:py-14rounded-xl">
                <div className="text-4xl bg-green-200 text-black border rounded-2xl px-6 py-10">
                    <h1 className="py-4">linguagens e tecnologias</h1>
                    <p className="px-6 md:px-8 text-xl">linguagens, framewors e tecnologias que domino</p>
                    {/* Desktop Items */}
                    <ul className="hidden md:flex flex-1 px-0 pt-8 pb-6 justify-center">
                      <li className="px-4 py-2 md:py-0">
                        <a href="">
                          <img className="w-16 md:w-28" src={JsIcon} alt="" />
                        </a>
                      </li>
                      <li className="px-4 py-2 md:py-0">
                        <a href="#">
                          <img className="w-16 md:w-28"  src={HtmlIcon} alt="" />
                        </a>
                      </li>
                      <li className="px-4 py-2 md:py-0">
                        <a href="">
                          <img className="w-16 md:w-28"  src={CssIcon} alt="" />
                        </a>
                      </li>
                      <li className="px-4 py-2 md:py-0">
                        <a href="">
                          <img className="w-16 md:w-28" src={ReactIcon} alt="" />

                        </a>
                      </li>
                      <li className="px-4 py-2 md:py-0">
                        <a href="#" >
                          <img className="w-16 md:w-28" src={NodeIcon} alt="" />
                        </a>
                      </li>
                    </ul>

                    <ul className="hidden md:flex flex-1 px-0 pt-8 pb-6 justify-center">
                      <li className="px-4 py-2 md:py-0">
                        <a href="">
                          <img className="w-16 md:w-28" src={TailwindIcon} alt="" />
                        </a>
                      </li>
                      <li className="px-4 py-2 md:py-0">
                        <a href="#">
                          <img className="w-16 md:w-28"  src={MySqlIcon} alt="" />
                        </a>
                      </li>
                      <li className="px-4 py-2 md:py-0">
                        <a href="">
                          <img className="w-16 md:w-28"  src={PostgreIcon} alt="" />
                        </a>
                      </li>
                      <li className="px-4 py-2 md:py-0">
                        <a href="">
                          <img className="w-16 md:w-28" src={GitIcon} alt="" />
                        </a>
                      </li>

                    </ul>
                    {/* Mobile Items */}
                    <ul className="grid grid-cols-2 py-8 md:hidden">
                      <li className="px-4 py-2 md:py-0">
                          <a href="">
                            <img className="w-16 md:w-28" src={JsIcon} alt="" />
                          </a>
                        </li>
                        <li className="px-4 py-2 md:py-0">
                          <a href="#">
                            <img className="w-16 md:w-28"  src={HtmlIcon} alt="" />
                          </a>
                        </li>
                        <li className="px-4 py-2 md:py-0">
                          <a href="">
                            <img className="w-16 md:w-28"  src={CssIcon} alt="" />
                          </a>
                        </li>
                        <li className="px-4 py-2 md:py-0">
                          <a href="">
                            <img className="w-16 md:w-28" src={ReactIcon} alt="" />
                          </a>
                        </li>
                        <li className="px-4 py-2 md:py-0">
                          <a href="#" >
                            <img className="w-16 md:w-28" src={NodeIcon} alt="" />
                          </a>
                        </li>
                        <li className="px-4 py-2 md:py-0">
                          <a href="">
                            <img className="w-16 md:w-28" src={TailwindIcon} alt="" />
                          </a>
                        </li>
                        <li className="px-4 py-2 md:py-0">
                          <a href="#">
                            <img className="w-16 md:w-28"  src={MySqlIcon} alt="" />
                          </a>
                        </li>
                        <li className="px-4 py-2 md:py-0">
                          <a href="">
                            <img className="w-16 md:w-28"  src={PostgreIcon} alt="" />
                          </a>
                        </li>
                        <li className="px-4 py-2 md:py-0">
                          <a href="">
                            <img className="w-16 md:w-28" src={GitIcon} alt="" />
                          </a>
                        </li>
                    </ul>

                </div>



            </div>
        </div>
        <div className="bg-green-500 h-12 md:h-114"></div>

    </div>
  )
}

export default PtLanguages