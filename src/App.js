import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import SongList from './pages/SongsList/SongList';
import BooksList from './pages/Books/BooksList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/sign-up' element={<Signup />}></Route>
        <Route path='/songs-list' element={<SongList />}></Route>
        <Route path='/books-list' element={< BooksList/>}></Route>
        <Route path='/' element={<div>Sagar</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
