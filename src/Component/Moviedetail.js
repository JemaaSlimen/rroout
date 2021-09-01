import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Moviedetail = ({movies}) => {
    const {x} = useParams();
    const [movie, setMovie] = useState({})
 useEffect(() => {
        setMovie  (movies.find(elmt=>elmt.id===Number(x)))
       
    }, [])
    return (
        <div>
            {/* {match.params.x} */}
          {   
               <h1>{ movie.desc } </h1>
              
            }
          
        </div>
    )
}

export default Moviedetail
