import React from 'react'
import { Link } from 'react-router-dom'

const PtFooter = () => {
  return (
    <div>
        <div className="bg-white h-16 py-4 md:py-16"></div>
        <footer className="bg-black text-white font-BebasNeue tracking-widest py-14">
            <div className="flex justify-center">
              <p className="px-6 text-xl md:text-2xl">copyright <span className="text-green-500 font-bold">Marcelo Zuza&copy;</span> 2023</p>
            </div>
            <div>
              <ul className="flex justify-center flex-1">
                <li className="px-2">
                  <Link className="text-sm md:text-xl hover:underline duration-700" to="https://www.linkedin.com/in/marcelo-zuza/" target="_blank" rel="noopener noreferrer">Linkedin</Link>
                </li>
                <li className="px-1">
                  <span className="border-r border-white"></span>
                </li>
                <li className="px-2">
                  <Link className="text-sm md:text-xl hover:underline duration-700" to="https://github.com/marcelo-zuza" target="_blank" rel="noopener noreferrer">Git Hub</Link>
                </li>
                <li className="px-1">
                  <span className="border-r border-white"></span>
                </li>
                <li className="px-2">
                  <Link className="text-sm md:text-xl hover:underline duration-700" to="/pt/#contact">Fale comigo</Link>
                </li>
              </ul>
            </div>
        </footer>
    </div>
  )
}

export default PtFooter