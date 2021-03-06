import React, {Component} from 'react';
import {Button, Form, Modal} from "react-bootstrap";


class EditModalPost extends Component {


    state = {
        id: this.props.id,
        title: this.props.title,
        body: this.props.body
    };

    handleOnClose = () => {
        this.props.onClose();

    }
    handleSavePost = () => {
        this.props.onHandleSubmit(this.props.id,
            this.state.title !== '' ? this.state.title : this.props.title,
            this.state.body !== '' ? this.state.body : this.props.body)
        this.handleOnClose()

    }

    handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {


        return (
            <div>
                <Modal show={this.props.show} onHide={this.handleOnClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="postTitle">
                                <Form.Label>Post Title</Form.Label>
                                <Form.Control
                                    name="title"
                                    onChange={this.handleInputChange}
                                    defaultValue={this.props.title}
                                    placeholder="Enter Title Here."/>
                            </Form.Group>

                            <Form.Group controlId="postText">
                                <Form.Label></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    defaultValue={this.props.body}
                                    rows="3"
                                    onChange={this.handleInputChange}
                                    name="body"/>
                            </Form.Group>

                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleOnClose}>
                    Close
                </Button>

                        <Button variant="primary"  onClick={this.handleSavePost}>
                            Save Changes
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default EditModalPost;