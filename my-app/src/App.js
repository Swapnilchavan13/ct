import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Component/Navbar';
import { Im } from './Component/Im';
import { Home } from './Component/Home';
import { History1 } from './Component/History';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Im />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/history1" element={<History1 />}></Route>
    </Routes>
    </div>
  );
}

export default App;
