import React from 'react';
import { Link } from 'react-router-dom';

const BirdHome = () => {
    return (
        <Link to='/bird' style={{backgroundImage:`url('https://images.unsplash.com/photo-1614116233448-ba0c93ac3e82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fGVhZ2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60')`,
        backgroundSize:'cover',
        textDecoration:'none',
        color:'white'}}>
            <h2 style={{width:'100%',textAlign:'center'}}>Birds</h2>
        </Link>
    );
};

export default BirdHome;