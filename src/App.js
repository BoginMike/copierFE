import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import SongList from './pages/SongsList/SongList';
import BooksList from './pages/Books/BooksList';
import AddSong from './pages/AddSong/AddSong';
import ProtectedRoute from './shared/components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/sign-up' element={<Signup />}></Route>
        <Route path='/songs-list' element={<ProtectedRoute><SongList /></ProtectedRoute>}></Route>
        <Route path='/books-list' element={<ProtectedRoute>< BooksList /></ProtectedRoute>}></Route>
        <Route path='/add-song' element={<ProtectedRoute>< AddSong /></ProtectedRoute>}></Route>
        <Route path='/' element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
