import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
