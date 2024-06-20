import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home";
import ChooseUser from "./components/ChooseUser";
import TeacherSignIn from "./components/TeacherSignIn";
import StudentSignIn from "./components/StudentSignIn";
import AdminSignIn from "./components/AdminSignIn";
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/choose_user" element={<ChooseUser />} />

      <Route path="/teacher_login" element={<TeacherSignIn />} />
      <Route path="/student_login" element={<StudentSignIn />} />
      <Route path="/admin_login" element={<AdminSignIn />} />
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
