import Icone from '../assets/img/programacaoWebInvert.png'
import { React, useState } from 'react';
import { Link } from 'react-router-dom';


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
                        <Link to="#">
                           {/* <img className="w-20 md:w-125px" src="" alt="Spoitify" /> */}
                        </Link>
                    </div>

                    <div className="flex px-4 py-4 md:flex flex-1 -m-5">
                        <img className="h-8 md:h-12 md:w-12 md:-mx-14 md:-mt-0" src={Icone} alt="" />
                        <Link to="/pt/">
                            <h1 className="text-white text-3xl font-extrabold md:ml-16 md:py-2 px-1">Marcelo Zuza</h1>
                        </Link>
                        <div className="flex justify-end flex-1 md:hidden text-white text-3xl">
                            <button onClick={openMenu}><i className="fas fa-bars"></i></button>
                            {isOpen && 
                                <ul className="text-xl px-4">
                                <li className="px-1">
                                    <Link className="text-sm md:text-xl" to="/pt/#home">home</Link>
                                </li>
                                <li className="px-2">
                                    <Link onClick={openMenu} className="text-sm md:text-xl" to="/pt/#about">sobre</Link>
                                </li>
                                <li className="px-2">
                                    <Link onClick={openMenu} className="text-sm md:text-xl" to="/pt/#languages">linguagens</Link>
                                </li>
                                <li className="px-2">
                                    <Link onClick={openMenu} className="text-sm md:text-xl" to="/pt/#projects">projetos</Link>
                                </li>
                                <li className="px-2">
                                    <Link onClick={openMenu} className="text-sm md:text-xl" to="/pt/#contact">contato</Link>
                                </li>
   
                                <li className="px-1">
                                    <Link onClick={openMenu} className="text-sm md:text-xl" to="https://www.linkedin.com/in/marcelo-zuza/">Linkedin</Link>
                                </li>

                                <li className="px-1">
                                    <Link onClick={openMenu} className="text-sm md:text-xl" to="https://github.com/marcelo-zuza">GitHub</Link>
                                </li>

                                <li className="px-1">
                                    <Link onClick={openMenu} className="text-sm md:text-xl" to="/en">ENGLISH</Link>
                                </li>

                                </ul>
                            }
                        </div>
                    </div>

                    <div className="items-end flex-1 text-white font-bold hidden md:flex">
                        <nav className="flex-1">
                            <ul className="flex justify-end flex-1 md:-mr-10">
                                <li className="px-2">
                                    <Link className="text-sm md:text-xl hover:text-green-500 duration-700" to="/pt/#home">home</Link>
                                </li>
                                <li className="px-2">
                                    <Link className="text-sm md:text-xl hover:text-green-500 duration-700" to="/pt/#about">sobre</Link>
                                </li>
                                <li className="px-2">
                                    <Link className="text-sm md:text-xl hover:text-green-500 duration-700" to="/pt/#languages">linguagens</Link>
                                </li>
                                <li className="px-2">
                                    <Link className="text-sm md:text-xl hover:text-green-500 duration-700" to="/pt/#projects">projetos</Link>
                                </li>
                                <li className="px-2">
                                    <Link className="text-sm md:text-xl hover:text-green-500 duration-700" to="/pt/#contact">contato</Link>
                                </li>
                                <li className="px-1">
                                    <span className="border-r border-white"></span>
                                </li>
                                <li className="px-1">
                                    <Link className="text-sm md:text-xl hover:text-green-500 duration-700" to="https://www.linkedin.com/in/marcelo-zuza/" target="_blank" rel="noopener noreferrer">Linkedin</Link>
                                </li>
                                <li className="px-1">
                                    <span className="border-r border-white"></span>
                                </li>
                                <li className="px-1">
                                    <Link className="text-sm md:text-xl hover:text-green-500 duration-700" to="https://github.com/marcelo-zuza" target="_blank" rel="noopener noreferrer">GitHub</Link>
                                </li>
                                <li className="pl-1">
                                    <span className="border-r border-white"></span>
                                </li>
                                <li className="px-1">
                                    <Link className="text-sm md:text-xl hover:text-green-500 duration-700" to="/en/">ENGLISH</Link>
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