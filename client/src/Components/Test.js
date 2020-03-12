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
    Button

} from 'reactstrap';
import img from '../images/bg1.jpg'
import Flip from 'react-reveal/Flip';
import ScrollspyNav from "react-scrollspy-nav";


class NavBar extends Component {
    state = {
        isOpen: false,
        changeColor: true
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }
    listenScrollEvent = e => {
        if (window.scrollY < 400) {
            this.setState({ changeColor: true })
        } else {
            this.setState({ changeColor: false })
        }
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
                    <ScrollspyNav
                        scrollTargetIds={["section_1", "section_2", "section_3"]}
                        activeNavClass="is-active"
                        scrollDuration="1000"
                        componentTag='<NavLink/>'
                    // headerBackground="true"
                    >
                        <Navbar expand="md" dark className='fixed-top d-inline-block'
                            style={{ backgroundColor: this.state.changeColor ? 'transparent' : 'rgb(51,51,51)', transition: 'all .5s ease' }} >
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar className='text-center '>

                                <Nav className="mx-auto " navbar style={{ fontSize: '20px' }}>

                                    <NavItem >
                                        <NavLink style={{
                                            cursor: 'pointer'
                                        }} onClick={this.handleClick}
                                            href="/"
                                        >
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink style={{
                                            cursor: 'pointer'
                                        }}
                                            href="#section_1" >
                                            About
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink style={{
                                            cursor: 'pointer'
                                        }}
                                            href="#section_2">
                                            Portfolio
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink style={{
                                            cursor: 'pointer'
                                        }}
                                            href="#section_3" >
                                            Contact
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink style={{
                                            cursor: 'pointer'
                                        }} rel="noopener noreferrer" target='_blank' href="https://github.com/ertemishakk">GitHub</NavLink>
                                    </NavItem>
                                </Nav>

                            </Collapse>
                        </Navbar>
                    </ScrollspyNav>

                </div>

                <div
                    className='px-5'
                    style={{
                        minHeight: '100vh',
                        background: `url(${img}) center center fixed no-repeat`,
                        backgroundSize: 'cover',
                        paddingTop: '200px'
                    }}
                >
                    <Row className='pt-5 px-5'>
                        <Col className='text-center  main' >
                            <Flip left cascade>
                                <h1 className=' display-3 text-light font-weight-bold'>Ishak Ertem</h1>
                                <h5 className='text-white-50 shortdesc' style={{
                                    lineHeight: '35px'
                                }}>Self-taught Junior Front End Developer </h5>


                                <h5 className='text-white-50 shortdesc'>   I develop Full-Stack single page applications using
                                mern stack.</h5>

                                <h5 className='text-white-50 shortdesc'>Based in Melbourne</h5>
                                <Button outline color='warning' className='mt-2'>
                                    View my work
                                </Button><br />
                                <a rel="noopener noreferrer" target='_blank' href="https://www.facebook.com/ertemishakk">
                                    <i style={{
                                        cursor: 'pointer'
                                    }} className="fab fa-facebook-f fa-2x mr-3 text-light "></i>
                                </a>
                                <a rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/ishak-ertem-054b5b139">
                                    <i style={{
                                        cursor: 'pointer'
                                    }} className="fab fa-linkedin-in fa-2x  mr-3 text-light"></i>
                                </a>
                                <a rel="noopener noreferrer" target='_blank' href="https://twitter.com/ErtemIshak">
                                    <i style={{
                                        cursor: 'pointer'
                                    }} className="fab fa-twitter fa-2x  mr-3 text-light"></i>
                                </a>
                                <a rel="noopener noreferrer" target='_blank' href="https://www.instagram.com/ishakertem/?hl=en">
                                    <i style={{
                                        cursor: 'pointer'
                                    }} className="fab fa-instagram fa-2x  mr-3 text-light"></i>
                                </a>
                                <a rel="noopener noreferrer" target='_blank' href="https://github.com/ertemishakk">
                                    <i style={{
                                        cursor: 'pointer'
                                    }} className="fab fa-github fa-2x text-light"></i>
                                </a>
                            </Flip>
                        </Col>
                    </Row>
                </div>
            </div >
        )
    }
}
export default NavBar