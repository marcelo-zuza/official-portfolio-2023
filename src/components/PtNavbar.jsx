import Icone from '../assets/img/programacaoWebInvert.png'
import { React, useState } from 'react';


const PtNavbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const openMenu = () => {
        if(isOpen == false){
            setIsOpen(true)
        }else{
            setIsOpen(false)
        }
        
      };

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

                    <div className="flex px-4 py-4 md:flex flex-1 -m-5">
                        <img className="h-8 md:h-12 md:w-12 md:-mx-14 md:-mt-0" src={Icone} alt="" />
                        <a href="/pt/">
                            <h1 className="text-white text-3xl font-extrabold md:ml-16 md:py-2 px-1">Marcelo Zuza</h1>
                        </a>
                        <div className="flex justify-end flex-1 md:hidden text-white text-3xl">
                            <button onClick={openMenu}><i className="fas fa-bars"></i></button>
                            {isOpen && 
                                <ul className="text-xl px-4">
                                <li className="px-1">
                                    <a className="text-sm md:text-xl" href="/pt/#home">home</a>
                                </li>
                                <li className="px-2">
                                    <a onClick={openMenu} className="text-sm md:text-xl" href="/pt/#about">sobre</a>
                                </li>
                                <li className="px-2">
                                    <a onClick={openMenu} className="text-sm md:text-xl" href="/pt/#languages">linguagens</a>
                                </li>
                                <li className="px-2">
                                    <a onClick={openMenu} className="text-sm md:text-xl" href="/pt/#projects">projetos</a>
                                </li>
                                <li className="px-2">
                                    <a onClick={openMenu} className="text-sm md:text-xl" href="/pt/#contact">contato</a>
                                </li>
   
                                <li className="px-1">
                                    <a onClick={openMenu} className="text-sm md:text-xl" href="https://www.linkedin.com/in/marcelo-zuza/">Linkedin</a>
                                </li>

                                <li className="px-1">
                                    <a onClick={openMenu} className="text-sm md:text-xl" href="https://github.com/marcelo-zuza">GitHub</a>
                                </li>

                                <li className="px-1">
                                    <a onClick={openMenu} className="text-sm md:text-xl" href="/en/">ENGLISH</a>
                                </li>

                                </ul>
                            }
                        </div>
                    </div>

                    <div className="items-end flex-1 text-white font-bold hidden md:flex">
                        <nav className="flex-1">
                            <ul className="flex justify-end flex-1 md:-mr-10">
                                <li className="px-2">
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="/pt/#home">home</a>
                                </li>
                                <li className="px-2">
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="/pt/#about">sobre</a>
                                </li>
                                <li className="px-2">
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="/pt/#languages">linguagens</a>
                                </li>
                                <li className="px-2">
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="/pt/#projects">projetos</a>
                                </li>
                                <li className="px-2">
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="/pt/#contact">contato</a>
                                </li>
                                <li className="px-1">
                                    <span className="border-r border-white"></span>
                                </li>
                                <li className="px-1">
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="https://www.linkedin.com/in/marcelo-zuza/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                                </li>
                                <li className="px-1">
                                    <span className="border-r border-white"></span>
                                </li>
                                <li className="px-1">
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="https://github.com/marcelo-zuza" target="_blank" rel="noopener noreferrer">GitHub</a>
                                </li>
                                <li className="pl-1">
                                    <span className="border-r border-white"></span>
                                </li>
                                <li className="px-1">
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="/en/">ENGLISH</a>
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