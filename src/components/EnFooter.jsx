import React from 'react'

const EnFooter = () => {
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
                  <a className="text-sm md:text-xl hover:underline duration-700" href="https://www.linkedin.com/in/marcelo-zuza/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                </li>
                <li className="px-1">
                  <span className="border-r border-white"></span>
                </li>
                <li className="px-2">
                  <a className="text-sm md:text-xl hover:underline duration-700" href="https://github.com/marcelo-zuza" target="_blank" rel="noopener noreferrer">Git Hub</a>
                </li>
                <li className="px-1">
                  <span className="border-r border-white"></span>
                </li>
                <li className="px-2">
                  <a className="text-sm md:text-xl hover:underline duration-700" href="/en/#contact">Contact</a>
                </li>
              </ul>
            </div>
        </footer>
    </div>
  )
}

export default EnFooter