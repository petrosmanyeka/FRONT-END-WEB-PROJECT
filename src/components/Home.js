import React from 'react'
import {Button} from '@material-ui/core';
import Row from 'react-bootstrap/Row'
import {Grid} from '@material-ui/core'
import Col from 'react-bootstrap/Col'
import jumbotron from "@material-ui/core"
import {Link} from '@material-ui/core'
import './Home.css'


import { Container } from 'react-bootstrap'
function Home() {
  return (
      <Grid className='grit'>
        <jumbotron>
          <h2>WELCOME TO MANYEKA BEE- KEEPING</h2>
          <p>This is my web site that will help people on bee-keeping</p>
          <Link to = "/Products">
          <Button bsStyle = "primary"> Products</Button>
        </Link>
        </jumbotron>
        <Row className ="show-grid">
        <Col xs = {12} sm ={4} className = "person-wrapper">
        <img src="photo/honey3.jpg" circle className ="profile-pic" />
        <h3>BEES</h3>
        <p>some discription</p>
        </Col>
        <Col xs = {12} sm ={4} className = "person-wrapper">
        <img src="photo/honey3.jpg" circle className ="profile-pic" />
        <h3>BEES ON THE BEHAVE</h3>
        <p>some discription</p>
        </Col>
        <Col xs = {12} sm ={4} className = "person-wrapper">
        <img src="photo/bees3.jpg" circle className ="profile-pic" />
        <h3>HoNEY</h3>
        <p>some discription</p>
        </Col>



        </Row>
        
      </Grid>
  
  )
}

export default Home