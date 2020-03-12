import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import lodos from '../images/lodos.png'
import resume from '../images/resume.png'
import Flip from 'react-reveal/Flip';


class Portfolio extends Component {
    render() {
        return (
            <div className=' py-5' id='portfolio'>
                <Row className='mx-auto'>
                    <h1 className='mx-auto pb-5 py-5'>Recent Projects </h1>
                </Row>
                <Row className='justify-content-center text-center'>
                    <Col md='12' className='projects '>
                        <Flip top>
                            <div className='box'>
                                <a target='_blank' rel="noopener noreferrer" href='https://github.com/ertemishakk/lodos.git'>
                                    <img className='img-fluid shadow-lg' src={lodos} alt="lodos"
                                        style={{
                                            height: '200px',
                                            width: '250px'
                                        }}
                                    />
                                    <div className="overlay">
                                        <div className="text">Lodos</div>
                                    </div>
                                </a>
                            </div>
                        </Flip>
                    </Col>
                    <Col md='12' className='projects '>
                        <Flip top>
                            <div className='box '>
                                <a target='_blank' rel="noopener noreferrer" href='https://github.com/ertemishakk/resume-mern.git'>
                                    <img className='img-fluid shadow-lg' src={resume} alt="fullstack-resume"
                                        style={{
                                            height: '200px',
                                            width: '250px'
                                        }}
                                    />
                                    <div className="overlay">
                                        <div className="text">Fullstack Resume</div>
                                    </div>
                                </a>
                            </div>
                        </Flip>

                    </Col>
                    {/* <Col md='12' className='projects '>
                        <Flip top>
                            <div className='box'>
                                <a target='_blank' rel="noopener noreferrer" href='https://github.com/ertemishakk/lodos.git'>
                                    <img className='img-fluid shadow-lg' src={lodos} alt="lodos" />
                                    <div className="overlay">
                                        <div className="text">Lodos</div>
                                    </div>
                                </a>
                            </div>
                        </Flip>

                    </Col>
                    <Col md='12' className='projects '>
                        <Flip top>
                            <div className='box'>
                                <a target='_blank' rel="noopener noreferrer" href='https://github.com/ertemishakk/lodos.git'>
                                    <img className='img-fluid shadow-lg' src={lodos} alt="lodos" />
                                    <div className="overlay">
                                        <div className="text">Lodos</div>
                                    </div>
                                </a>
                            </div>
                        </Flip>

                    </Col>
                    <Col md='12' className='projects '>
                        <Flip top>
                            <div className='box'>
                                <a target='_blank' rel="noopener noreferrer" href='https://github.com/ertemishakk/lodos.git'>
                                    <img className='img-fluid shadow-lg' src={lodos} alt="lodos" />
                                    <div className="overlay">
                                        <div className="text">Lodos</div>
                                    </div>
                                </a>
                            </div>
                        </Flip>

                    </Col> */}


                </Row>
            </div>
        )
    }
}
export default Portfolio