import React from 'react'
import PtNavbar from './PtNavbar'
import PtFooter from './PtFooter'

const PtProjectsPage = () => {
  return (
    <div>
        <PtNavbar />
          <div className="py-14 px-10"></div>
          <div className="bg-white text-black font-BebasNeue tracking-widest md:py-16">
            <div className="bg-green-200 px-3 py-2 my-16 mx-8 md:m-20 md:px-6 md:py-14 md:bg-green-200 hover:shadow-2xl duration-700 rounded-xl">
                <div className="flex text-4xl">
                    <h1 className="py-4">Projetos</h1>
                </div>
                <p className="px-6 md:px-8 text-xl">Meu projetos</p>
            </div>
            <div className="px-6 md:grid grid-cols-2 ">

            </div>
        </div>
        <PtFooter />
    </div>
  )
}

export default PtProjectsPage