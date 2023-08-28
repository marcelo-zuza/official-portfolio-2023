import React from 'react'

const EnAbout = () => {
  return (
    <div id="about">
        <div className="bg-green-500 h-12 md:h-16"></div>
        <div className="bg-white text-black font-BebasNeue tracking-widest md:py-16">
            <div className="bg-green-200 px-3 py-2 my-16 mx-8 md:m-20 md:px-6 md:py-14 md:bg-green-200 hover:shadow-2xl duration-700 rounded-xl">
                <div className="flex text-4xl">
                    <h1 className="py-4">About Me</h1>
                </div>
                <p className="px-6 md:px-8 text-xl">As a full-stack  React/Node developer, I have the skills to handle both the backend and frontend aspects of web development. I am proficient in Node.js, which allows me to build robust and scalable backend systems, handle data management, and implement complex business logic. On the frontend, I excel in React.js, creating interactive and responsive user interfaces with reusable components for a seamless user experience. By combining these technologies, I can develop dynamic and efficient web applications that deliver a delightful and functional user experience.</p>
            </div>
            <div className="px-6 md:grid grid-cols-2 ">

            </div>
        </div>
    </div>
  )
}

export default EnAbout