import React from 'react'
import Row from 'react-bootstrap/Row'
import {Grid} from '@material-ui/core'
import Col from 'react-bootstrap/Col'
import './Products.css'

function Products() {
  return (
    <div className='mapoto'>
     <img src="photo/bees2.jpg" className="header-image" />
     <Grid>
     <h2>our Products</h2>
     <Row>
       <Col xs = {12} sm={8} className = "main-section "  >
         <p> some discription</p>
       </Col>

       <Col xs = {12} sm={4} className = "sidebar-section "  >
         <img src="photo/harv1.jpg"/>
         <p>some discrip</p>
       </Col>
     </Row>
     </Grid>

    </div>
  )
}

export default Products