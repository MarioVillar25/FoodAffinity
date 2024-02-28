import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Home } from "../Pages/home/Home";
import { Register } from "../Pages/Auth/Register/Register";
import { Login } from "../Pages/Auth/Login/Login";
import { UserProfile } from "../Pages/UserProfile/UserProfile";
import { NavbarApp } from "../Components/Navbar/NavbarApp";
import { EditUser } from "../Pages/EditUser/EditUser";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <NavbarApp />
        </nav>
      </header>

      <Container fluid>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/editUser" element={<EditUser/>}    />
          </Routes>
        </main>
      </Container>
    </BrowserRouter>
  );
};
