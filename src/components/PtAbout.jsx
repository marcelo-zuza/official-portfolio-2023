import React from 'react'

const PtAbout = () => {
  return (
    <div id="about">
        <div className="bg-green-500 h-12 md:h-16"></div>
        <div className="bg-white text-black font-BebasNeue tracking-widest md:py-16">
            <div className="bg-green-200 px-3 py-2 my-16 mx-8 md:m-20 md:px-6 md:py-14 md:bg-green-200 hover:shadow-2xl duration-700 rounded-xl">
                <div className="flex text-4xl">
                    <h1 className="py-4">QUEM SOU</h1>
                </div>
                <p className="px-6 md:px-8 text-xl">Sou um Desenvolvedor Web e meu trabalho é criar e manter sites e aplicativos para a internet.  Minhas principais responsabilidades incluem escrever código limpo e eficiente em linguagens de programação como Javascript, HTML e CSS; e usar frameworks e bibliotecas populares como Node.JS e React.JS. Eu também trabalho com bancos de dados relacionais, como MySQL e PostgreSQL, para armazenar informações e garantir que os sites e aplicativos funcionem corretamente.</p>
            </div>
            <div className="px-6 md:grid grid-cols-2 ">

            </div>
        </div>
    </div>
  )
}

export default PtAbout