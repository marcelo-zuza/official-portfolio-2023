import React from 'react'

const EnNavbar = () => {
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
                    <div className="items-end flex-1 text-white font-bold hidden md:flex">
                        <nav className="flex-1">
                            <ul className="flex justify-end flex-1">
                                <li className="px-4">
                                    <a className="hover:text-hoverspt md:text-xl" href="#">Premium</a>
                                </li>
                                <li className="px-4">
                                    <a className="hover:text-hoverspt text-sm md:text-xl" href="#">About</a>
                                </li>
                                <li className="px-4">
                                    <a className="hover:text-hoverspt text-sm md:text-xl" href="#">Services</a>
                                </li>
                                <li className="px-4">
                                    <span className="border-r border-white"></span>
                                </li>
                                <li className="px-4">
                                    <a className="hover:text-hoverspt text-sm md:text-xl" href="#">Pricing</a>
                                </li>
                                <li className="px-4">
                                    <a className="hover:text-hoverspt text-sm md:text-xl" href="#">About</a>
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