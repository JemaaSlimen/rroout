import { useState } from "react";
import "./App.css";
import List from "./Component/List";
import { moviesData } from "./movieData";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Component/Search";
import AddMovie from "./Component/AddMovie";
import { BrowserRouter,Route, Switch} from 'react-router-dom'
import Moviedetail from "./Component/Moviedetail";


function App(props) {
  const [movies, setMovies] = useState(moviesData);
  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  const [search, setSearch] = useState("");
  const handleSearch = (input) => {
    setSearch(input);
  };
  const [rate, setRate] = useState(1);
  const handleRate = (rating) => {
    setRate(rating);
  };

  return (
    <BrowserRouter>  
    <div className="App">
      <Search handleSearch={handleSearch} handleRate={handleRate} />
<Switch>
    
  <Route path="/" exact render={()=> <List {...props} films={movies.filter((elt) =>
          elt.name.toLowerCase().includes(search.toLowerCase().trim()) 
          &&elt.rating>=rate
        )}
      /> }/> 
      <Route path="/add" render={(props)=> <AddMovie {...props} handleAdd={handleAdd} />} ></Route>
      <Route path="/moviedetails/:x" render={() => <Moviedetail  movies={movies}  />  }/>     
 </Switch>

     

    </div>
    </BrowserRouter>
  );
}

export default App;
