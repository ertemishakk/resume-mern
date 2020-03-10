import React, { Component } from 'react'
import { Row, Col, Progress } from 'reactstrap'
import Slide from 'react-reveal'

class Skills extends Component {
    render() {
        return (
            <div className='overflow-hidden bg-dark text-light pb-5'>
                <Row className=' py-5'>
                    <Col>
                        <Slide left>
                            <h5 className=' text-center font-weight-bold mx-3 my-3'
                            >SKILLS</h5>
                        </Slide>
                    </Col>
                    <Col sm='8' className='text-left px-5 mr-5 pl-5'>
                        <Slide right>
                            <div className='pl-5'>
                                <h5>ReactJS</h5>
                                <Progress value={60} />
                                <h5 className='mt-2'>Nodejs</h5>
                                <Progress value={40} />
                                <h5 className='mt-2'>Expressjs </h5>
                                <Progress value={35} />
                                <h5 className='mt-2'>MongoDB</h5>
                                <Progress value={50} />
                                <h5 className='mt-2'>Reactstrap</h5>
                                <Progress value={60} />
                            </div>
                        </Slide>
                    </Col>

                </Row>


            </div>
        )
    }
}
export default Skills