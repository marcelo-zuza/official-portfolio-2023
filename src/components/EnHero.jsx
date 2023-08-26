import React from 'react'
import Icone from '../assets/img/programacaoWebInvert.png'


const EnHero = () => {
  return (
    <div>
        <div className="bg-black w-full h-full py-16 px-2 md:p-18 font-BebasNeue tracking-widest">
            <div className="p-4 justify-center mb-2 md:mb-0">
                <h2 className="text-white text-3xl md:text-5xl text-center">Full-Stack Web Developer</h2>
                <h1 className="text-white text-6xl md:text-9xl -mb-1 md:-mb-4 text-center font-extrabold">MARCELO ZUZA's</h1>
                <h2 className="text-white text-2xl md:text-3xl text-center">Portfolio Home Page</h2>
                <div className="flex justify-center py-6 md:py-0 md:pt-0 md:-mt-4">
                        <img src={Icone} alt="icone" className="h-60 md:h-60 pl-6" />
                </div>
                <div className="flex justify-center py-2 pb-20">
                    <a href="#about" className="bg-green-500 text-white text-3xl px-8 py-4 rounded-full hover:bg-white hover:text-green-500 duration-700 hover:px-14">Start Here</a>
                </div>
            </div>
          </div>  
    </div>
  )
}

export default EnHero