import React, { Component } from 'react';
import {Grid,Col,Image} from 'react-bootstrap';
import './Market.css';
export default class extends Component{
    render(){
        return(
            <div>
               <Image src='/'className='header-image'/>
               <Grid>
                   <Col xs ={12} smOffset ={8}>
                       <Image src='/'className='about-profile-pic' rounded/>
                       <h3>manyeka bee</h3>
                       <p>some description</p>
                   </Col>
               </Grid>
            </div>
        )
    }
}
