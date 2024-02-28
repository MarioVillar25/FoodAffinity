import React, { useContext } from "react";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FoodContext } from "../../Context/FoodProvider";
import { deleteLocalStorage } from "../../Utils/Utils";

export const NavbarApp = () => {
  const {user, setUser, setToken} = useContext(FoodContext);
  const navigate = useNavigate();
  const logOut = () => {
    deleteLocalStorage("token");
    setUser();
    setToken();
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary p-3">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Food Affinity
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              About
            </Nav.Link>
          </Nav>

          {!user ? (
            <div className="d-flex gap-2">
              <Button
                onClick={() => navigate("/register")}
                variant="outline-success"
              >
                Register
              </Button>
              <Button
                onClick={() => navigate("/login")}
                variant="outline-success"
              >
                Login
              </Button>
            </div>
          ) : (
            <div>
                   <Button onClick={()=>navigate("/editUser")} variant="outline-success">
                Edit Profile
              </Button>
              <Button onClick={logOut} variant="outline-success">
                LogOut
              </Button>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
