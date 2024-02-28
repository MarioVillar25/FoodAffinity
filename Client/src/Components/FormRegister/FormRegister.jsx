import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"

const initialValue = {
  name: "",
  email: "",
  password: "",
};

export const FormRegister = () => {
  const [register, setRegister] = useState(initialValue);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegister({ ...register, [name]: value });
  };

  const onSubmit = () => {
    if (!register.name || !register.email || !register.password) {
      setErrorMessage("Debes rellenar todos los campos");
    } else if (register.password.length < 2) {
      setErrorMessage("La contraseña debe tener al menos 2 caracteres");
    }else{
      console.log("register", register);
      axios
      .post("http://localhost:3000/users/register", register  )
      .then((res)=>{
        console.log("res", res);
        navigate("/login")
      })
      .catch((err)=>{
        console.log(err);
      })

      //llamada al back con axios

    }
  };

  return (
    <Form>
      <h2>Register</h2>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={register.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={register.password}
          onChange={handleChange}
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={register.name}
          onChange={handleChange}
          placeholder="Enter Name"
        />
      </Form.Group>
      <span className="errorMessage">{errorMessage}</span>
      <p>
        Estas registrado, <Link to="/login"> login aqui </Link>
      </p>

      <Button className="ms-1 me-1" onClick={onSubmit} variant="primary">
        Submit
      </Button>
      <Button
        className="ms-1 me-1"
        onClick={() => navigate("/")}
        variant="primary"
      >
        Cancel
      </Button>
    </Form>
  );
};
