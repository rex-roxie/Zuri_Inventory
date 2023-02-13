import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router';
import Login from './components/Login';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/home"} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
