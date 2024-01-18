import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import AddTodo from '../components/AddTodo'
import Todos from '../components/Todos'
import Navigator from '../components/Navigator'
import Footer from '../components/Footer'

function Landing() {
    return (
        <>
            <Navigator />
            <Container>
                <Row className='d-flex justify-content-center mt-5'>
                    <Col xs="6">
                        <AddTodo />
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row className='d-flex justify-content-center mt-5 text-center'>
                    <Col xs="6">
                        <h2 className='fw-light'>
                            Your List Below
                        </h2>
                        <Todos />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Landing