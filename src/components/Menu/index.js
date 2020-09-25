import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo_louvotes_1.png';

import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Louvores Acapela em Português" />
      </Link>

    </nav>
  );
}

export default Menu;
