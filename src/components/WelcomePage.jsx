import React from 'react'
import { Link } from 'react-router-dom'
import Icone from '../assets/img/programacaoWebInvert.png'

const WelcomePage = () => {
  return (
    <div>
        <div className="bg-black w-full h-full pt-10 pb-28 px-2 md:pb-24 md:py-16 font-BebasNeue tracking-widest">
            <div className="p-4 justify-center -mb-3 md:mb-0">
                <h2 className="text-white text-3xl md:text-5xl text-center">Full-Stack Web Developer</h2>
                <h1 className="text-white text-6xl md:text-9xl md:-mb-4 text-center font-extrabold">MARCELO ZUZA's</h1>
                <h2 className="text-white text-2xl md:text-3xl text-center">Portfolio Home Page</h2>
                <div className="flex justify-center pt-4">
                    <img src={Icone} alt="icone" className="w-20 md:w-32" />
                </div>
            </div>
            <div className="grid md:grid-cols-2 px-12 border-white rounded-full md:border-none">
                <div className="col-span-1 my-5 md:p-0 md:m-0 md: border-white rounded-full">
                    <p className="text-white text-center text-5xl md:text-6xl mb-5 font-extrabold">WELCOME!</p>
                    <div className="flex justify-center -m-2">
                        <Link to="/en" className="bg-green-500 text-white text-2xl px-6 py-4 md:px-10 rounded-full hover:bg-white hover:text-green-500 duration-700 hover:px-14">ENGLISH</Link>
                    </div>
                </div>
                <div className="col-span-1 my-5 md:py-0 md:m-0 md: border-white rounded-full">
                    <p className="text-white text-center text-5xl md:text-6xl mb-5 font-extrabold">BEM-VINDO!</p>
                    <div className="flex justify-center -m-2">
                    <Link to="/pt" className="bg-green-500 text-white text-2xl px-6 py-4 md:px-10 rounded-full hover:bg-white hover:text-green-500 duration-700 hover:px-14">PORTUGUÊS</Link>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default WelcomePage