
import './styles/App.css';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import Login from './pages/Login';
import StudentInfo from './pages/StudentInfo';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Hometest from './pages/Hometest';
import Testinfo from './pages/Testinfo';

function App() {


  return (
    <div className="App">
       <BrowserRouter>
       <NavBar/>
      <Routes>
   
        <Route path="/login" element={<Login />}>
        

       
          </Route>
          <Route path="/studentinfo" element={<StudentInfo />} />
          <Route path="/hometest" element={<Hometest />} />
          <Route path="/testinfo" element={<Testinfo />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
