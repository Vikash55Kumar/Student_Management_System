import { useState } from 'react'
import {ToastContainer} from "react-toastify"
import Nav from './component/Navbar/Nav'
import { Foot } from './component/Footer/Foot'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './component/Home/Home';
import UserLogin from './component/Login-Signup/UserLogin';
import UserSignup from './component/Login-Signup/UserSignup';
import Courses from './component/Course/Courses';
import CourseType from './component/Course/CourseType';
import StudentList from './component/Course/StudentList';
import H1 from './component/Home/H1';
import AdminLogin from './component/Login-Signup/AdminLogin';

function App() {


  return (
    <>
      <ToastContainer 
        position="top-center"  // This will show the toast in the center of the screen
        autoClose={3000}  // Toast will disappear after 4 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
          <Nav/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/userLogin" element={<UserLogin />} />
            <Route path="/userSignup" element={<UserSignup />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
             <Route path="/courses" element={<Courses />} />
            <Route path="/courseType" element={<CourseType />} />
            <Route path="/studentList" element={<StudentList />} />
            <Route path="/h1" element={<H1 />} />
          </Routes>
          <Foot />
      </Router>
    </>
  );
}

export default App
