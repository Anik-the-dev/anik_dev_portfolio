import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Menu from './common/Menu';
import Home from './Pages/MyHome/Home';
import './css/style.css';
import { ToastContainer} from 'react-toastify'
import Contact from './Pages/MyHome/Contact';
import Portfolio from './Pages/MyHome/Portfolio';
import About from './Pages/MyHome/About';
import Details from './Pages/MyHome/Details';
import Footer from './common/Footer';
import Details2 from './Pages/MyHome/Details2';
import Details3 from './Pages/MyHome/Details3';
import Achievements from './Pages/MyHome/Achievements';
import Blog from './Pages/Blog';
function App() {
  return (
    <div>
      <Menu></Menu>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<Achievements/>} />
         <Route path='/blog' element={<Blog/>} />
         <Route path='/projects' element={<Portfolio/>} />
         <Route path='/details1' element={<Details/>} />
         <Route path='/details2' element={<Details2/>} />
         <Route path='/details3' element={<Details3/>} />
         <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>


    </div>
  );
}

export default App;
