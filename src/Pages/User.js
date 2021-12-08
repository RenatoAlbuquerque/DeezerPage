import React from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header'
import FavList from '../components/FavList'

const User = () => {
    return (
        <div>
            <Header/>
            <Link to="/">retornar a página inicial</Link>
            <FavList />
        </div>
    );
}

export default User;