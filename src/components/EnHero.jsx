import React from 'react'
import Icone from '../assets/img/programacaoWebInvert.png'


const EnHero = () => {
  return (
    <div>
        <div className="bg-black w-full h-full py-16 px-2 md:p-18 font-BebasNeue tracking-widest">
            <div className="p-4 justify-center mb-2 md:mb-0">
                <h1 className="text-white text-6xl md:text-9xl text-center font-extrabold">MARCELO ZUZA's</h1>
                <h2 className="text-white text-3xl md:text-4xl text-center">Portfolio Home Page</h2>
                <div className="flex justify-center pt-4">
                        <img src={Icone} alt="icone" className="h-60 md:h-60 pl-6" />
                </div>
                <div className="flex justify-center py-2">
                    <a href="#" className="bg-green-500 text-white text-3xl px-8 py-4 rounded-full hover:bg-white hover:text-green-500 duration-700 hover:px-14">Start Here</a>
                </div>
            </div>
      </div>
    </div>
  )
}

export default EnHero