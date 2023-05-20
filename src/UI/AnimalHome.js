import React from 'react';
import { Link } from 'react-router-dom';

const AnimalHome = () => {
    return (
        <Link to='/animal' style={{backgroundImage: `url('https://images.unsplash.com/photo-1543946207-39bd91e70ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60')`,
        backgroundSize:'cover',
        textDecoration:'none',
        color:'white'}}>
            <h2 style={{width:'100%',textAlign:'center'}}>Animals</h2>
        </Link>
    );
};

export default AnimalHome;