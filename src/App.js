import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import History from './Components/About/History/History';
import Gallery from './Components/About/Gallery/Gallery';
import Todolist from './Components/Todolist/Todolist';
import Notfound from './Components/Notfound/Notfound';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} >
            <Route index element={<History />} />
            <Route path='history' element={<History />} />
            <Route path='gallery' element={<Gallery />} />
          </Route>
          <Route path='/todolist' element={<Todolist />} >
          </Route>
          <Route path='/notfound' element={<Notfound />} />
          <Route
            path='*'
            element={<Navigate to="notfound" />}
            />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
