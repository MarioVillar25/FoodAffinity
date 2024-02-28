import React, { useContext, useEffect, useState } from 'react'
import { FoodContext } from '../../Context/FoodProvider';
import { Button, Col, Row } from "react-bootstrap";
import "./userProfile.scss"


export const UserProfile = () => {
  const {user} = useContext(FoodContext)
  const [show, setShow] = useState(false);
  const [travels, setTravels] = useState([])

  const handleClose = () => {
    setShow(!show)
  }








  return (
    <Row>
      <Col>

      <h2>Hola {user?.name}</h2>

      <Row>
        <Col sm={12} md={6}  >
        <div className='profileMain'>
            <p>name: {user?.name}</p>
            <p>lastname: {user?.lastname}</p>
            <p>address: {user?.address}</p>
            <p>city: {user?.user_city}</p>
          </div>
          <Button variant='success'
          
          onClick={handleClose}>
            Add Food
          </Button>
        </Col>
        <Col sm={12} md={6}  >
          <div className='imgProfile'>

            {user?.user_img ?

            <img src="" alt="" />

            :

            <img src="/assets/images/user.png" alt="" />


            }
            

          </div>





      
        
        
        </Col>
      </Row>
      </Col>
    </Row>
  )
}
