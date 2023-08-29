import React from 'react'
import { animateScroll as scroll } from 'react-scroll';

const HandleClick = () => {
    scroll.scrollTo(to, {
      duration: 2000, // Duração da animação em milissegundos
      delay: 500, // Atraso antes do início da animação
      smooth: 'easeInOutQuart', // Tipo de animação (pode ajustar para suas preferências)
    });
  };


export default HandleClick