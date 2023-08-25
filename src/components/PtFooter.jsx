import React from 'react'

const PtFooter = () => {
  return (
    <div>
        <footer className="bg-black text-white font-BebasNeue tracking-widest py-14">
            <div className="flex justify-center">
              <p className="px-6 text-xl md:text-2xl">copyright <span className="text-green-500 font-bold">Marcelo Zuza&copy;</span> 2023</p>
            </div>
            <div>
              <ul className="flex justify-center flex-1">
                <li className="px-2">
                  <a className="text-sm md:text-xl hover:underline duration-700" href="#">Linkedin</a>
                </li>
                <li className="px-1">
                  <span className="border-r border-white"></span>
                </li>
                <li className="px-2">
                  <a className="text-sm md:text-xl hover:underline duration-700" href="#">Git Hub</a>
                </li>
                <li className="px-1">
                  <span className="border-r border-white"></span>
                </li>
                <li className="px-2">
                  <a className="text-sm md:text-xl hover:underline duration-700" href="#">Fale comigo</a>
                </li>
              </ul>
            </div>
        </footer>
    </div>
  )
}

export default PtFooter