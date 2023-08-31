import React from 'react'
import PtNavbar from './PtNavbar'
import PtFooter from './PtFooter'

import Example from '../assets/img/example.png'
import AmazonExample from '../assets/img/amazonExample.png'
import ExampleAdivinhe from '../assets/img/example-adivinhe.png'
import SpotifyExample from '../assets/img/example-spotify.png'

const PtProjectsPage = () => {
  return (
    <div>
        <PtNavbar />
          <div className="pb-24 px-10"></div>
          <div className="bg-white text-black font-BebasNeue tracking-widest md:py-16">
            <div className="bg-green-200 px-3 py-2 my-8 mx-8 md:mx-20 md:-my-8 md:px-6 md:py-8 md:bg-green-200 hover:shadow-2xl duration-700 rounded-xl">
                <div className="flex justify-center text-6xl">
                    <h1 className="py-4 underline">Projetos</h1>
                </div>
                <p className="flex justify-center px-6 md:px-8 text-2xl">Meus projetos</p>

      
                <div className="grid grid-cols-1 md:grid-cols-3">

                  {/* CARD MODEL */}
  {/*
               <div className="py-6 col-span-1  bg-white my-4 px-2 mx-8 content-center border border-black rounded-xl hover:shadow-2xl duration-500">
                    <img className="h-40" src={} alt="example" />
                    <p className="text-xl py-2">Lorem ipsum dolor sit amet consectetur</p>
                    <div className="flex content-center justify-center py-2">
                      <a href="#" className="bg-black text-white mx-2 px-3 md:py-2 md:px-4 hover:bg-white hover:text-black duration-700 border hover:border-black rounded-xl">Ver</a>
                      <a href="#" className="bg-black text-white mx-2 px-3 md:py-2 md:px-4 hover:bg-white hover:text-black duration-700 border  hover:border-black rounded-xl">Git Hub</a>
                    </div>
                  </div>
  */}
                  {/* CARD MODEL */}

                  <div className="py-6 col-span-1  bg-white my-4 px-2 mx-8 content-center border border-black rounded-xl hover:shadow-2xl duration-500">
                    <img className="h-40" src="https://marcelo-zuza.github.io/imovi-architecture/img/banner-1.jpg" alt="example" />
                    <p className="text-xl py-2">Página feita para um escritório de Arquitetura</p>
                    <div className="flex content-center justify-center py-2">
                      <a href="https://marcelo-zuza.github.io/imovi-architecture/" className="bg-black text-white mx-2 px-3 md:py-2 md:px-4 hover:bg-white hover:text-black duration-700 border hover:border-black rounded-xl">Ver</a>
                      <a href="https://github.com/marcelo-zuza/imovi-architecture" className="bg-black text-white mx-2 px-3 md:py-2 md:px-4 hover:bg-white hover:text-black duration-700 border  hover:border-black rounded-xl">Git Hub</a>
                    </div>
                  </div>

                  <div className="py-6 col-span-1  bg-white my-4 px-2 mx-8 content-center border border-black rounded-xl hover:shadow-2xl duration-500">
                    <img className="h-40" src={AmazonExample} alt="example" />
                    <p className="text-xl py-2">Clone da Página da Amazon</p>
                    <div className="flex content-center justify-center py-2">
                      <a href="https://marcelo-zuza.github.io/marketplace-clone/" className="bg-black text-white mx-2 px-3 md:py-2 md:px-4 hover:bg-white hover:text-black duration-700 border hover:border-black rounded-xl">Ver</a>
                      <a href="https://github.com/marcelo-zuza/marketplace-clone" className="bg-black text-white mx-2 px-3 md:py-2 md:px-4 hover:bg-white hover:text-black duration-700 border  hover:border-black rounded-xl">Git Hub</a>
                    </div>
                  </div>

                  <div className="py-6 col-span-1  bg-white my-4 px-2 mx-8 content-center border border-black rounded-xl hover:shadow-2xl duration-500">
                    <img className="h-40" src={ExampleAdivinhe} alt="example" />
                    <p className="text-xl py-2">Jogo de adivinhar a palavra letra a letra</p>
                    <div className="flex content-center justify-center py-2">
                      <a href="https://marcelo-zuza.github.io/adivinhe-a-palavra/" className="bg-black text-white mx-2 px-3 md:py-2 md:px-4 hover:bg-white hover:text-black duration-700 border hover:border-black rounded-xl">Ver</a>
                      <a href="https://github.com/marcelo-zuza/adivinhe-a-palavra" className="bg-black text-white mx-2 px-3 md:py-2 md:px-4 hover:bg-white hover:text-black duration-700 border  hover:border-black rounded-xl">Git Hub</a>
                    </div>
                  </div>

                  <div className="py-6 col-span-1  bg-white my-4 px-2 mx-8 content-center border border-black rounded-xl hover:shadow-2xl duration-500">
                    <img className="h-40" src={SpotifyExample} alt="example" />
                    <p className="text-xl py-2">Clone da página principal do Spotify</p>
                    <div className="flex content-center justify-center py-2">
                      <a href="https://marcelo-zuza.github.io/spotify-clone/" className="bg-black text-white mx-2 px-3 md:py-2 md:px-4 hover:bg-white hover:text-black duration-700 border hover:border-black rounded-xl">Ver</a>
                      <a href="https://github.com/marcelo-zuza/spotify-clone" className="bg-black text-white mx-2 px-3 md:py-2 md:px-4 hover:bg-white hover:text-black duration-700 border  hover:border-black rounded-xl">Git Hub</a>
                    </div>
                  </div>

                </div>
            </div>
            <div className="px-6 md:grid grid-cols-2 ">

            </div>
        </div>
        <PtFooter />
    </div>
  )
}

export default PtProjectsPage