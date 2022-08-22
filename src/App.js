import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import Todolist from './Components/Todolist/Todolist';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/todolist' element={<Todolist />} />
          <Route path='notfound' element={<Notfound />} />
          <Route
            path='*'
            element={<Navigate to="notfound" />}
            />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
