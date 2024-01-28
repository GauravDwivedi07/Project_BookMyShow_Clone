//import logo from './logo.svg';
import './App.css';

//Axios

import axios from 'axios';
//React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Routes
import { Routes, Route } from 'react-router-dom';

//Pages
import PlayPage from './Pages/PlayPage';
import HomePage from './Pages/HomePage';
import MoviePage from './Pages/MoviePage';



//axios
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = "c9c56bab3cda44b67a6a320e1bdfad10";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage></HomePage>} />
      <Route path='/movie/:id' element={<MoviePage></MoviePage>} />
      <Route path='/plays' element={<PlayPage></PlayPage>} />
    </Routes>

  );
}

export default App;
