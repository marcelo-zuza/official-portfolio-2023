import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

const SmoothScrollLink = ({ to, text }) => {
  const handleClick = () => {
    scroll.scrollTo(to, {
      duration: 1000, // Duração da animação em milissegundos
      delay: 0, // Atraso antes do início da animação
      smooth: 'easeInOutQuart', // Tipo de animação (pode ajustar para suas preferências)
    });
  };

  return (
    <Link to={`#${to}`} onClick={handleClick}>
      {text}
    </Link>
  );
};

export default SmoothScrollLink;
