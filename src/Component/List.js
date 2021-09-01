import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'

const List = ({films}) => {
    <Link to="/add"> <h1>Movie Add</h1></Link> 
    return (
        <div className="movie-list">
            {films.map(
            (elmt) => <Cart movie={elmt}/>
         )}   
        </div>
    )
}

export default List
