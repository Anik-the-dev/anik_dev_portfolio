import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Menu from './common/Menu';
import Home from './Pages/MyHome/Home';
import './css/style.css'
function App() {
  return (
    <div>
      <Menu></Menu>
      <Routes>
         <Route path='/' element={<Home/>} />
      </Routes>


    </div>
  );
}

export default App;
