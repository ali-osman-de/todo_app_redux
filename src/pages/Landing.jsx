import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import AddTodo from '../components/AddTodo'
import Todos from '../components/Todos'
import Navigator from '../components/Navigator'
import Footer from '../components/Footer'
import Completed from '../components/Completed'
import Doing from '../components/Doing'

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
                    <Col xs="4">
                        <h2 className='fw-light'>
                            ToDo
                        </h2>
                        <Todos />
                    </Col>
                    <Col xs="4">
                        <h2 className='fw-light'>
                            Doing
                        </h2>
                        <Doing />
                    </Col>
                    <Col xs="4">
                        <h2 className='fw-light'>
                            Completed
                        </h2>
                        <Completed />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Landing