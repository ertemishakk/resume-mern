import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap'
import me from '../images/me.png'
import axios from 'axios'
import fileDownload from 'js-file-download'
import Slide from 'react-reveal'


class About extends Component {
    downloadResume = (e) => {
        axios.get('/download', { responseType: 'arraybuffer' })
            .then(res => {
                fileDownload(res.data, 'resume.pdf')
            })
    }

    render() {

        return (
            <div className='bg-dark text-light text-center py-5' id='about'>
                <Row className='no-gutters pt-5'>
                    <Col md='4' className=''>
                        <Slide left>
                            <img src={me} alt='self portrait' className='rounded-circle my-auto px-3 py-3' style={{ height: '200px' }} />
                        </Slide>
                    </Col>
                    <Col className='px-5'>
                        <Slide right>
                            <h1 className='text-left'>About me</h1>
                            <h5 className='text-white-50 text-left'>
                                I grew up in the beautiful city of Istanbul. I moved to New York after
                                finishing high school and started going to uni at Baruch College.
                                I majored in Computer Information Systems and after graduating from uni
                                I moved to Canada for further studies. Currently I live in Melbourne.
                                I create websites using MERN stack.
                                To reach my resume, click on the button below.
                       </h5>
                            <Button outline color="success" className='mt-3 float-left'
                                onClick={this.downloadResume}
                            >Download CV/Resume</Button>
                        </Slide>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default About