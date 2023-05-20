import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = (props) => {
  const searchFilterAnimal = props.animalData.filter(animal => {
    return animal.name.includes(props.searchInput)
  })
  const searchFilterBird = props.birdData.filter(bird => {
    return bird.name.includes(props.searchInput)
  })

    return (
    <nav className='navbar'>
        <div className="navbar-brand">
        <NavLink to="/">Animal World</NavLink>
      </div>
  <ul className="navbar-menu">
    <li className="navbar-item"><NavLink to='/'>Home</NavLink></li>
    <li className="navbar-item"><NavLink to="/animal">Animal {searchFilterAnimal.length}</NavLink></li>
    <li className="navbar-item"><NavLink to="/bird">Bird {searchFilterBird.length}</NavLink></li>
    <li className="navbar-item"><NavLink to="/about">About</NavLink></li>
  </ul>
</nav>
    );
};

export default Navbar;