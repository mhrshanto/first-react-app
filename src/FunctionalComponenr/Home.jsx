import React from 'react';
import './Home.css';

function Home(props) {
    return (
        <h1 className='information'>My name is {props.name}, I'm {props.age} and I'm a {props.profession} </h1>
    )
}

export default Home;