import React, { Component } from 'react';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css'

export default class CustomNavbar extends Component{
    render(){
        return(
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">HONEY BEES</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem enventKey = {1}componentClass = {Link} to="/">
                            Home
                        </NavItem>
                        <NavItem enventKey = {2}componentClass = {Link} to="/Products">
                            Products
                        </NavItem>
                        <NavItem enventKey = {3}componentClass = {Link} to="/Market">
                            Market
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}
