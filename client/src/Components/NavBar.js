import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Col,
    Row,

} from 'reactstrap';
import img from '../images/bgphoto.jpg'
import Flip from 'react-reveal/Flip';
import ScrollIntoView from 'react-scroll-into-view'


class NavBar extends Component {
    state = {
        isOpen: false,
    }

    toggle = (e) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div className='overflow-hidden' id='main'>
                <div>
                    <Navbar expand="md" dark className='fixed-top bg-dark' >
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar className='text-center'>
                            <Nav className="mx-auto " navbar style={{ fontSize: '20px' }}>
                                <NavItem >
                                    <NavLink style={{
                                        cursor: 'pointer'
                                    }} className='text-light' onClick={this.handleClick}>
                                        <ScrollIntoView selector='#main'>
                                            Home
                                        </ScrollIntoView>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{
                                        cursor: 'pointer'
                                    }} className='text-light' >
                                        <ScrollIntoView selector='#about'>
                                            About
                                        </ScrollIntoView>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink style={{
                                        cursor: 'pointer'
                                    }} className='text-light'>
                                        <ScrollIntoView selector='#portfolio'>
                                            Portfolio
                                        </ScrollIntoView>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{
                                        cursor: 'pointer'
                                    }} className='text-light' >
                                        <ScrollIntoView selector='#contact'>
                                            Contact
                                        </ScrollIntoView>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink style={{
                                        cursor: 'pointer'
                                    }} className='text-light' rel="noopener noreferrer" target='_blank' href="https://github.com/ertemishakk">GitHub</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
                <div
                    className='px-5'
                    style={{
                        minHeight: '100vh',
                        background: `url(${img}) no-repeat top center`,
                        backgroundSize: 'cover',
                        paddingTop: '200px'
                    }}
                >
                    <Row className='pt-5 px-5'>
                        <Col className='text-center  main' >
                            <Flip left cascade>
                                <h1 className=' display-3 text-light font-weight-bold'>I'm Ishak Ertem.</h1>
                                <h5 className='text-white-50 shortdesc' style={{
                                    lineHeight: '35px'
                                }}>Hi there and welcome to my page. I'm a self-taught Junior Front End Developer based
                                                                                                                                                                                                                                                                                                                                                                                                                        in Melbourne. I currently develop Full-Stack single page applications using
                                mern stack.</h5> <br />
                                <i style={{
                                    cursor: 'pointer'
                                }} className="fab fa-facebook-f fa-2x mr-3 text-light "></i>
                                <i style={{
                                    cursor: 'pointer'
                                }} className="fab fa-linkedin-in fa-2x  mr-3 text-light"></i>
                                <i style={{
                                    cursor: 'pointer'
                                }} className="fab fa-google fa-2x  mr-3 text-light"></i>
                                <i style={{
                                    cursor: 'pointer'
                                }} className="fab fa-instagram fa-2x  mr-3 text-light"></i>
                                <i style={{
                                    cursor: 'pointer'
                                }} className="fab fa-github fa-2x text-light"></i>
                            </Flip>
                        </Col>
                    </Row>

                    <Row className='down text-center text-light mr-auto mt-5'>
                        <Col>
                            <i style={{
                                cursor: 'pointer'
                            }} className="far fa-arrow-alt-circle-down fa-2x"></i>
                        </Col>
                    </Row>


                </div>
            </div >
        )
    }
}
export default NavBar