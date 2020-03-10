import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Container, Col } from 'reactstrap';

class Contact extends Component {
    render() {
        return (
            <div className='bg-dark py-5' id='contact'>
                <Container className='text-light py-5'>
                    <h1 className='text-center'>Contact me</h1>
                    <Row>
                        <Col className='mx-3 mt-3'>
                            <h5 className='text-left'>You can hit me up if you have questions or just to say hi. Please use the form below. Cheers!</h5>
                        </Col>
                    </Row>
                    <Form className='mx-3 mt-3'>
                        <FormGroup>
                            <Label for="name">Name*</Label>
                            <Input type="text" name="email" id="name" placeholder="Name" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleEmail">Email*</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="subject">Subject*</Label>
                            <Input type="text" name="email" id="subject" placeholder="Subject" />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleText">Your message*</Label>
                            <Input type="textarea" rows={10} name="text" id="exampleText" placeholder='Drop your message here' />
                        </FormGroup>

                        <Button color='success'>Submit</Button>
                    </Form>

                </Container>
            </div>
        )
    }
}
export default Contact