import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col'
import Form from 'react-bootstrap/Form'


const Input = ({ name, handleChange, label, autoFocus, type, placeholder }) => {
    return (
        <Row className="center-element">
            <Col sm={6} md={6}>

                <Form.Group className="mb-3">
                    <Form.Label>{placeholder}</Form.Label>
                    <Form.Control
                        name={name}
                        onChange={handleChange}
                        required
                        fullWidth
                        label={label}
                        autoFocus={autoFocus}
                        type={type}
                    />

                </Form.Group>

            </Col>
        </Row>
    )
}

export default Input
