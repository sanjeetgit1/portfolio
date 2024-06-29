
import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './components/home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/contact/Contact';
import Login from './components/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser, loadUser } from './actions/user';
import AdminPanel from './components/Admin/AdminPanel';
import Timeline from './components/Admin/Timeline';

 


function App() {

  const dispatch= useDispatch();

const {isAuthenticated}= useSelector((state)=> state.login);
const {loading}= useSelector((state)=>state.user);

  useEffect(()=>{
    dispatch(getUser());
    dispatch(loadUser());
  },[dispatch]);

  return (
    <Router>
      {loading ?<div>Loading</div>:(
        <>
        <Header/>
        <Routes>
  
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/account" element={isAuthenticated ? <AdminPanel/> :<Login/>}/>
         
         
          <Route path="/admin/timeline" element={isAuthenticated ? <Timeline/> :<Login/>}/>
         
         
    </Routes>
    <Footer/>
        </>
        
      )}
    </Router>
  
  );
}

export default App;
