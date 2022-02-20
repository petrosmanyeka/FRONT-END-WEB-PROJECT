import React,{Component} from "react";
import {Grid,Image,Col, Row} from 'react-bootstrap';
import './Products.css';
 export default class Products extends Component{
     render(){
         return(
             <div>
                 <Image src='/'className ="header-image"/>
            <Grid>
                   <h2>Products</h2>
                   <Row>
                        
                       <Col xs={12}sm={8}className='main-section'>
                           <p>the passage of products</p>
                       </Col>
                       <Col xs={12} sm={4} className="sidebar-section">
                           <Image src="/"/>
                           <p>some description</p>
                       </Col>
                 </Row>

            </Grid>
             </div>

         )
     }
 }