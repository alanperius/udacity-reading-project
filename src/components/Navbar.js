import React from 'react'
import {NavLink, Link} from "react-router-dom";
import {IoMdAddCircleOutline} from "react-icons/io";
import { IconContext } from "react-icons";
import { Container, Row, Col } from 'react-bootstrap';
import LoadingBar from "react-redux-loading-bar"


export default function Navbar() {
    return (
        <div>
            <div className='banner fixed-top'>
                <LoadingBar style={{ backgroundColor: 'white', height: '5px', margin: '1px'}} />
                <Container >
                    <Row>
                        <Col></Col>
                        <Col xs={6}>
                            <Link to='/' exact className=""> <span className="title" >Reading Project</span></Link>
                        </Col >
                        <Col>
                            <Link to='/new' exact activeClassName='active'>
                                <IconContext.Provider value={{ color: "white", className: "global-class-name", size:"3em"}}>
                                    <IoMdAddCircleOutline/>
                                </IconContext.Provider>
                            </Link>

                        </Col>
                    </Row>

                </Container>
            </div>
        </div>

    )
}