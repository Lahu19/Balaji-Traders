
import './App.css'
import Login from './login/login';
import Register from './registration/regi';
import Dashbord from './Dashbord/dashbord';
import AddProduct from './addproducts/addproducts'
import Navbar from './navfoot/navbar';
import Footer from './navfoot/footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route path="/dashbord" element={<Dashbord />} />
        <Route path="/products" element={<AddProduct />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
