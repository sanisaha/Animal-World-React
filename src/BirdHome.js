import React from 'react';
import { Link } from 'react-router-dom';

const BirdHome = () => {
    return (
        <Link to='/bird' style={{backgroundImage:`url('https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60')`,
        backgroundSize:'cover',
        textDecoration:'none',
        color:'white'}}>
            <h2 style={{width:'100%',textAlign:'center'}}>Birds</h2>
        </Link>
    );
};

export default BirdHome;