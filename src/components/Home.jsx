import React, { Component } from 'react';
import {Jumbotron,Grid,Row,Image,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'; 

export default class Home extends Component{
    render(){
        return(
           <Grid>
               <Jumbotron>
                   <h2>Welcome to beekeeping</h2>
                   <p>This is how we keep bees </p>
                   <Link to = '/Products'>
                   <Button  baStyle = "primary">Products</Button>
               </Link> 
               </Jumbotron>
               <Row className='show-grid text-center'>
                   <col xs= {12} sm={4} className ="person-wrapper">
                       <Image src='/'circle className='profile-pic'/>
                       <h3>Bees</h3>
                       <p>sone description</p>
                   
                   </col>
                   <col xs= {12} sm={4} className ="person-wrapper">
                       <Image src='/'circle className='profile-pic'/>
                       <h3>Bees</h3>
                       <p>sone description</p>
                   
                   </col>
                   <col xs= {12} sm={4} className ="person-wrapper">
                       <Image src='/'circle className='profile-pic'/>
                       <h3>Bees</h3>
                       <p>sone description</p>
                   
                   </col>



               </Row>
              
           </Grid>
        )
    }
}