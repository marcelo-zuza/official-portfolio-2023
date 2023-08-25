import React from 'react'
import Icone from '../assets/img/programacaoWebInvert.png'


const PtNavbar = () => {
  return (
    <div>
        <header>
            <div className="flex fixed bg-black w-full px-3 md:px-20 py-3 font-BebasNeue tracking-widest">
                <div className="container flex items-center mx-auto">
                    <div>
                        <a href="#">
                           {/* <img className="w-20 md:w-125px" src="" alt="Spoitify" /> */}
                        </a>
                    </div>
                    <div className="flex justify-end flex-1 md:hidden text-white text-3xl">
                        <i className="fas fa-bars"></i>
                    </div>
                    <div className="hidden md:flex flex-1 -m-5">
                        <img className="h-12 w-12 -mx-14 -mt-0" src={Icone} alt="" />
                        <h1 className="text-white text-3xl font-extrabold ml-16 py-2">Marcelo Zuza</h1>
                    </div>

                    <div className="items-end flex-1 text-white font-bold hidden md:flex">
                        <nav className="flex-1">
                            <ul className="flex justify-end flex-1 md:-mr-10">
                                <li className="px-2">
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="#">home</a>
                                </li>
                                <li className="px-2">
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="#">sobre</a>
                                </li>
                                <li className="px-2">
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="#">linguagens</a>
                                </li>
                                <li className="px-2">
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="#">projetos</a>
                                </li>
                                <li className="px-2">
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="#">contato</a>
                                </li>
                                <li className="px-1">
                                    <span className="border-r border-white"></span>
                                </li>
                                <li className="px-1">
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="#">Linkedin</a>
                                </li>
                                <li className="px-1">
                                    <span className="border-r border-white"></span>
                                </li>
                                <li className="px-1">
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="#">GitHub</a>
                                </li>
                                <li className="pl-1">
                                    <span className="border-r border-white"></span>
                                </li>
                                <li className="px-1">
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="#">ENGLISH</a>
                                </li>
                                <li className="pl-1">
                                    <span className="border-r border-white"></span>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}

export default PtNavbar