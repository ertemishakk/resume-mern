import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Slide from 'react-reveal'


class Education extends Component {
    render() {
        return (
            <div className='overflow-hidden bg-dark text-light'>
                <Row className=' py-5'>
                    <Col>
                        <Slide left>
                            <h5 className=' text-center font-weight-bold mx-3 my-3'
                            >EDUCATION</h5>
                        </Slide>
                    </Col>
                    <Col sm='8' className='text-left px-5'>
                        <Slide right>
                            <h4 className='my-3'>City University of New York, Baruch College</h4>
                            <h5 className='text-muted'>Computer Information Systems, Information Risk Management and Cyber Security</h5>
                        </Slide>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Education