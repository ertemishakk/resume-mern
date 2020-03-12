import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Container, Col, Alert } from 'reactstrap';
import Slide from 'react-reveal/Slide';
import classnames from 'classnames'
import axios from 'axios'
import Spinner from './Spinner'

class Contact extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        errors: {},
        loading: false,
        success: ''
    }

    valueChanged = (e) => {
        this.setState({
            [e.target.name]: e.target.value,

        })
    }

    submitForm = (e) => {
        e.preventDefault();
        this.setState({
            loading: true
        })
        let data = this.state
        axios.post('/contact', data)
            .then(res => {
                this.setState({
                    success: res.data.success,
                    loading: false,
                    errors: {}
                })
            })
            .catch(err => {
                this.setState({
                    errors: err.response.data,
                    loading: false
                })
            })
    }
    render() {
        return (
            <div className='bg-dark py-5' id='contact'>
                <Container className='text-light py-5'>
                    <Slide right>
                        <h1 className='text-center'>Contact me</h1>
                        <Row>
                            <Col className='mx-3 mt-3'>
                                <h5 className='text-left'>You can hit me up if you have questions or just to say hi. Please use the form below. Cheers!</h5>
                            </Col>
                        </Row>
                        <Form className='mx-3 mt-3 mb-3' onSubmit={this.submitForm}>
                            <FormGroup>
                                <Label for="name">Name*</Label>
                                <Input type="text" value={this.state.name} name="name" placeholder="Name"
                                    onChange={this.valueChanged}
                                    className={classnames('', { 'is-invalid': this.state.errors.name })}
                                />
                                <div className='invalid-feedback'>{this.state.errors.name}</div>
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleEmail">Email*</Label>
                                <Input type="email" value={this.state.email} name="email" placeholder="Email"
                                    onChange={this.valueChanged}
                                    className={classnames('', { 'is-invalid': this.state.errors.email })}
                                />
                                <div className='invalid-feedback'>{this.state.errors.email}</div>
                            </FormGroup>

                            <FormGroup>
                                <Label for="subject">Subject*</Label>
                                <Input type="text" value={this.state.subject} name="subject" placeholder="Subject"
                                    onChange={this.valueChanged}
                                    className={classnames('', { 'is-invalid': this.state.errors.subject })}
                                />
                                <div className='invalid-feedback'>{this.state.errors.subject}</div>
                            </FormGroup>

                            <FormGroup>
                                <Label for="exampleText">Your message*</Label>
                                <Input type="textarea" rows={10} value={this.state.message} name="message" placeholder='Drop your message here'
                                    onChange={this.valueChanged}
                                    className={classnames('', { 'is-invalid': this.state.errors.message })}
                                />
                                <div className='invalid-feedback'>{this.state.errors.message}</div>
                            </FormGroup>
                            <FormGroup className='text-center'>
                                {this.state.loading && <Spinner />}
                            </FormGroup>
                            {this.state.success !== '' && this.state.success !== undefined &&
                                <Alert color='success'>{this.state.success}</Alert>

                            }
                            <Button color='success'>Send</Button>
                        </Form>
                    </Slide>
                </Container>
            </div>
        )
    }
}
export default Contact