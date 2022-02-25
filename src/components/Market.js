import React from 'react'
import Row from 'react-bootstrap/Row'
import {Grid} from '@material-ui/core'
import Col from 'react-bootstrap/Col'
import './Market.css';

 function Market() {
  return (
    <div>
      <img src= "photo/bees2.jpg" className='header-image'/>
      <Grid>
        <Col xs = {12} sm ={8} smOffset={2}>

          <img src="photo/honey1.jpg" className ="about-profili-pic"/>
          <h3>The Bees</h3>
          <p>so discription</p>
        
        </Col>
      </Grid>
    </div>
  )
}
export default Market;
