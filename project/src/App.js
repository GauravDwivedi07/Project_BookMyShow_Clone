//import logo from './logo.svg';
import './App.css';
//React Slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Routes,Route } from 'react-router-dom';
import  PlayPage from './Pages/PlayPage';
import  HomePage  from './Pages/HomePage';
import  MoviePage from './Pages/MoviePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage></HomePage>}/>
      <Route path='/movie/:id'  element={<MoviePage></MoviePage>}/>
      <Route path='/plays' element={<PlayPage></PlayPage>}/>
    </Routes>
    
  );
}

export default App;
