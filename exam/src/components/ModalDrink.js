import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
export class ModalDrink extends Component {
    render() {
        return (
            <div>
                <>
                    <Button variant="primary" onClick={this.props.handleShow}>
                       
                    </Button>

                    <Modal show={this.props.show} onHide={this.props.handleClose}>

                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">

                                    <Form.Control type="text" placeholder="Update Drink Name" />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                   
                                    <Form.Control type="text" placeholder="Update Drink Description" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.props.handleClose}>
                                Close
                            </Button>
                        
                        </Modal.Footer>


                    </Modal>
                </> 
            </div>
        )
    }
}

export default ModalDrink
