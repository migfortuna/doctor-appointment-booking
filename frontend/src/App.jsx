import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyAppointments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import Profile from "./pages/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<NotFound />}>
      <Route index element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:speciality" element={<Doctors />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/appointments" element={<MyAppointments />} />
      <Route path="/appointment/:doctorId" element={<Appointment />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
