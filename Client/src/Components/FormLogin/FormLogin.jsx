import React, { useContext, useState } from 'react'
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"
import { FoodContext } from '../../Context/FoodProvider';
import { saveLocalStorage } from '../../Utils/Utils';

const initialValue = {
  email: "",
  password: ""

}

export const FormLogin = () => {
  const [login, setLogin] = useState(initialValue)
  const [loginMessage, setLoginMessage] = useState("");
  const {setToken, setUser} = useContext(FoodContext);
  const navigate = useNavigate();


  const handleChange = (e) => {
    const {name, value} = e.target;
    setLogin({...login, [name] : value });
 

  }

  const onSubmit = () => {

    if(!login.email || !login.password){
      setLoginMessage("Debes rellenar todos los campos")
    }else{

      axios
      .post("http://localhost:3000/users/login", login)
      .then((res)=>{
        saveLocalStorage("token", res.data.token)
        setUser(res.data.user)
        setToken(res.data.token)
        navigate("/userProfile");
      })
      .catch((err)=>{
        if(err.response.status === 500){
          setLoginMessage("Error interno de servidor")
        }else{
          setLoginMessage("Usuario no autorizado")
        }
        console.log(err);
      })



    }





  }


  return (
    <Form>
    <h2>Login</h2>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control
        type="text"
        name="email"
        value={login.email}
        onChange={handleChange}
        placeholder="Enter email"
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        name="password"
        value={login.password}
        onChange={handleChange}
        placeholder="Password"
      />
    </Form.Group>



    <span className="errorMessage">{loginMessage}</span>
    <p>
     No estas registrado? <Link to="/register"> vete aqui </Link>
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

  )
}
