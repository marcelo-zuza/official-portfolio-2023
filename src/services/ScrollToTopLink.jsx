import React from 'react'
import { animateScroll } from 'react-scroll'


const ScrollToTopLink = () => {

    animateScroll.scrollToTop({
        duration: 0, // Duração da animação em milissegundos
        smooth: 'easeInOutQuad', // Efeito de rolagem suave
      });
}

export default ScrollToTopLink