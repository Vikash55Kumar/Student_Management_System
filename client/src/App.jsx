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
            {/* <Route path="/progress" element={<Progress />} />
            <Route path="/dashboard/student" element={isAuthenticated && userType === "student" ? <StudentDashboard student={student?.data} /> : <StudentLogin /> } />
            <Route path="/dashboard/teacher" element={isAuthenticated && userType === "teacher" ? <TeacherDashboard teacher={teacher?.data} section={section?.data} assignment={assignment?.data} studentWork={studentWork?.data} /> : <TeacherLogin /> } />
            <Route path="/dashboard/admin" element={isAuthenticated && userType === "teacher" ? <AdminDashboard /> : <AdminLogin />} /> */}
            <Route path="/userLogin" element={<UserLogin />} />
            <Route path="/userSignup" element={<UserSignup />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
             <Route path="/courses" element={<Courses />} />
            <Route path="/courseType" element={<CourseType />} />
            <Route path="/studentList" element={<StudentList />} />
            <Route path="/h1" element={<H1 />} />

            {/* <Route path="/teacher/login" element={<TeacherLogin />} /> */}
            {/* <Route path="/teacher/signup" element={<TeacherSingUp />} />  */}

            {/* <Route path="/createAssignment" element={<CreateAssignment />} /> */}

          </Routes>
          <Foot />
      </Router>
    </>
  );
}

export default App