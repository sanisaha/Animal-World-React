import React from 'react';
import { Link } from 'react-router-dom';

const AnimalHome = () => {
    return (
        <Link to='/animal' style={{backgroundImage: `url('https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zm94fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60')`,
        backgroundSize:'cover',
        textDecoration:'none',
        color:'white'}}>
            <h2 style={{width:'100%',textAlign:'center'}}>Animals</h2>
        </Link>
    );
};

export default AnimalHome;