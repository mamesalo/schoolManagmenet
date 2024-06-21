import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./views/Home";
import SignIn from "./views/SignIn";

import LoginIn from "./layouts/LoginIn";
import Admin from "./layouts/Admin";
import Dashboard from "./pages/admin/Dashboard";
import Announcement from "./pages/admin/Announcement";
import Assignments from "./pages/admin/Assignments";
import Attendance from "./pages/admin/Attendance";
import Classes from "./pages/admin/Classes";
import EventCalender from "./pages/admin/EventCalender";
import Exam from "./pages/admin/Exam";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginIn />} loader={() => "student"}>
        <Route index element={<SignIn />} loader={() => "student"} />
        <Route path="student" element={<SignIn />} loader={() => "student"} />
        <Route path="teacher" element={<SignIn />} loader={() => "teacher"} />
        <Route path="admin" element={<SignIn />} loader={() => "admin"} />
      </Route>
      <Route path="/admin" element={<Admin />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="announcement" element={<Announcement />} />
        <Route path="assignment" element={<Assignments />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="classes" element={<Classes />} />
        <Route path="event" element={<EventCalender />} />
        <Route path="exam" element={<Exam />} />
      </Route>
    </Route>
  )
);
const App = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
