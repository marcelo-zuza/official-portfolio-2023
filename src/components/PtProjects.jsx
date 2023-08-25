import React from 'react'

const PtProjects = () => {
  return (
    <div>
        <div className="bg-white text-black font-BebasNeue tracking-widest md:py-16">
            <div className="bg-green-200 px-3 py-2 my-16 mx-8 md:m-20 md:px-6 md:py-14 md:bg-green-200 hover:shadow-2xl duration-700 rounded-xl">
                <div className="flex text-4xl">
                    <h1 className="py-4">PROJETOS</h1>
                </div>
                <p className="px-6 md:px-8 text-xl">Conheça projetos, aplicações e layouts deesenvolvidos por mim:</p>
                <div className="flex justify-center pt-10 pb-6 md:pb-0">
                    <a href="#" className="bg-green-500 text-white text-2xl px-8 py-4 rounded-full hover:bg-white hover:text-green-500 duration-700 hover:px-14">Projetos</a>
                </div>
            </div>            
        </div>
    </div>
  )
}

export default PtProjects