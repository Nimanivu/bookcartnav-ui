import logo from './logo.svg';
import './App.css';
import Addbook from './components/Addbook';
import Searchbook from './components/Searchbook';
import Deletebook from './components/Deletebook';
import Viewallbook from './components/Viewallbook';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

    <Routes>
      <Route path="/"element= { <Addbook /> } />
      <Route path="/search"element= { <Searchbook /> } />
      <Route path="/Delete"element= { <Deletebook /> } />
      <Route path="/view"element= { <Viewallbook /> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
