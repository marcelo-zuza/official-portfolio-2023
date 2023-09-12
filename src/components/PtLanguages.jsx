import React from 'react'
import { Link } from 'react-router-dom'

import JsIcon from '../assets/img/icons/js.png'
import HtmlIcon from '../assets/img/icons/html-5.png'
import CssIcon from '../assets/img/icons/css-3.png'
import GitIcon from '../assets/img/icons/git.png'
import MySqlIcon from '../assets/img/icons/mysql2.png'
import NodeIcon from '../assets/img/icons/nodejs.png'
import PostgreIcon from '../assets/img/icons/postgre.png'
import TailwindIcon from '../assets/img/icons/tailwind.png'
import ReactIcon from '../assets/img/icons/atom.png'
import TsIcon from '../assets/img/icons/Typescript_logo.png'

const PtLanguages = () => {
  return (
    <div id="languages">
        <div className="bg-green-500 h-12 md:h-114"></div>
        <div className="bg-black text-white md:-mt-20 md:-mb-20 font-BebasNeue tracking-widest">
            <div className="px-10 py-14 mx-0 md:m-20 md:px-6 md:py-14rounded-xl">
                <div className="text-4xl bg-green-200 text-black border rounded-2xl px-6 py-10">
                    <h1 className="py-4">linguagens e tecnologias</h1>
                    <p className="px-6 md:px-8 text-xl">linguagens, framewors e tecnologias que domino</p>
                    {/* Desktop Items */}
                    <ul className="hidden md:flex flex-1 px-0 pt-8 pb-6 justify-center">
                      <li className="px-4 py-2 md:py-0">
                        <Link to="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"  target="_blank" rel="noopener noreferrer">
                          <img className="w-16 md:w-28" src={JsIcon} alt="" />
                        </Link>
                      </li>
                      <li className="px-4 py-2 md:py-0">
                        <Link to="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                          <img className="w-16 md:w-28"  src={HtmlIcon} alt="" />
                        </Link>
                      </li>
                      <li className="px-4 py-2 md:py-0">
                        <Link to="https://developer.mozilla.org/pt-BR/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                          <img className="w-16 md:w-28"  src={CssIcon} alt="" />
                        </Link>
                      </li>
                      <li className="px-4 py-2 md:py-0">
                        <Link to="https://react.dev/" target="_blank" rel="noopener noreferrer">
                          <img className="w-16 md:w-28" src={ReactIcon} alt="" />

                        </Link>
                      </li>
                      <li className="px-4 py-2 md:py-0">
                        <Link to="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                          <img className="w-16 md:w-28" src={NodeIcon} alt="" />
                        </Link>
                      </li>
                    </ul>

                    <ul className="hidden md:flex flex-1 px-0 pt-8 pb-6 justify-center">
                      <li className="px-4 py-2 md:py-0">
                        <Link to="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                          <img className="w-16 md:w-28" src={TsIcon} alt="" />
                        </Link>
                      </li>
                      <li className="px-4 py-2 md:py-0">
                        <Link to="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                          <img className="w-16 md:w-28" src={TailwindIcon} alt="" />
                        </Link>
                      </li>
                      <li className="px-4 py-2 md:py-0">
                        <Link to="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
                          <img className="w-16 md:w-28"  src={MySqlIcon} alt="" />
                        </Link>
                      </li>
                      <li className="px-4 py-2 md:py-0">
                        <Link to="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
                          <img className="w-16 md:w-28"  src={PostgreIcon} alt="" />
                        </Link>
                      </li>
                      <li className="px-4 py-2 md:py-0">
                        <Link to="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                          <img className="w-16 md:w-28" src={GitIcon} alt="" />
                        </Link>
                      </li>

                    </ul>
                    {/* Mobile Items */}
                    <ul className="grid grid-cols-2 py-8 items-center place-items-center md:hidden">
                      <li className="px-4 py-2 md:py-0">
                          <Link to="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript">
                            <img className="w-16 md:w-28" src={JsIcon} alt="" />
                          </Link>
                        </li>
                        <li className="px-4 py-2 md:py-0">
                          <Link to="https://www.typescriptlang.org/">
                            <img className="w-16 md:w-28"  src={TsIcon} alt="" />
                          </Link>
                        </li>
                        <li className="px-4 py-2 md:py-0">
                          <Link to="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
                            <img className="w-16 md:w-28"  src={HtmlIcon} alt="" />
                          </Link>
                        </li>
                        <li className="px-4 py-2 md:py-0">
                          <Link to="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
                            <img className="w-16 md:w-28"  src={CssIcon} alt="" />
                          </Link>
                        </li>
                        <li className="px-4 py-2 md:py-0">
                          <Link to="https://react.dev/">
                            <img className="w-16 md:w-28" src={ReactIcon} alt="" />
                          </Link>
                        </li>
                        <li className="px-4 py-2 md:py-0">
                          <Link to="https://nodejs.org/" >
                            <img className="w-16 md:w-28" src={NodeIcon} alt="" />
                          </Link>
                        </li>
                        <li className="px-4 py-2 md:py-0">
                          <Link to="https://tailwindcss.com/">
                            <img className="w-16 md:w-28" src={TailwindIcon} alt="" />
                          </Link>
                        </li>
                        <li className="px-4 py-2 md:py-0">
                          <Link to="https://www.mysql.com/">
                            <img className="w-16 md:w-28"  src={MySqlIcon} alt="" />
                          </Link>
                        </li>
                        <li className="px-4 py-2 md:py-0">
                          <Link to="https://www.postgresql.org/">
                            <img className="w-16 md:w-28"  src={PostgreIcon} alt="" />
                          </Link>
                        </li>
                        <li className="px-4 py-2 md:py-0">
                          <Link to="https://git-scm.com/">
                            <img className="w-16 md:w-28" src={GitIcon} alt="" />
                          </Link>
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