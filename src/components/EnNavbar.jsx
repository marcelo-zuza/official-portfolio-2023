import { React, useState } from 'react'
import Icone from '../assets/img/programacaoWebInvert.png'


const EnNavbar = () => {

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
                                    <a className="text-sm" href="/pt/#home">home</a>
                                </li>
                                <li className="px-2">
                                    <a onClick={openMenu} className="text-sm" href="/en/#about">About</a>
                                </li>
                                <li className="px-2">
                                    <a onClick={openMenu} className="text-sm" href="/en/#languages">Languages</a>
                                </li>
                                <li className="px-2">
                                    <a onClick={openMenu} className="text-sm" href="/en/#projects">Projects</a>
                                </li>
                                <li className="px-2">
                                    <a onClick={openMenu} className="text-sm" href="/en/#contact">Contact</a>
                                </li>
   
                                <li className="px-1">
                                    <a onClick={openMenu} className="text-sm" href="https://www.linkedin.com/in/marcelo-zuza/">Linkedin</a>
                                </li>

                                <li className="px-1">
                                    <a onClick={openMenu} className="text-sm" href="https://github.com/marcelo-zuza">GitHub</a>
                                </li>

                                <li className="px-1">
                                    <a onClick={openMenu} className="text-sm" href="/pt/">Portuguese</a>
                                </li>

                                </ul>
                            }
                        </div>
                    </div>

                    <div className="items-end flex-1 text-white font-bold hidden md:flex">
                        <nav className="flex-1">
                            <ul className="flex justify-end flex-1 md:-mr-10">
                                <li className="px-2">
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="/en/#home">home</a>
                                </li>
                                <li className="px-2">
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="/en/#about">About</a>
                                </li>
                                <li className="px-2">
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="/en/#languages">Languages</a>
                                </li>
                                <li className="px-2">
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="/en/#projects">Projects</a>
                                </li>
                                <li className="px-2">
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="/en/#contact">Contact</a>
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
                                    <a className="text-sm md:text-xl hover:text-green-500 duration-700" href="/pt/">PORTUGUESE</a>
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

export default EnNavbar