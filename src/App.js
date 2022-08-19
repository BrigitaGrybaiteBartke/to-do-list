import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Todolist from './Components/Todolist/Todolist';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/todolist' element={<Todolist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
