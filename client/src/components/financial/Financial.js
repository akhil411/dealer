import React, { useEffect, useState } from 'react';
import { Button, Form, Radio, Modal } from 'semantic-ui-react';


const Financial = ({
    history,
}) => {

    function handleProceedNext() {
        history.push('/application/documents');
    }

    function handleProceedPrev() {
        history.push('/application/employment');
    }

    return (
        <Modal
            closeOnEscape={false}
            closeOnDimmerClick={false}
            open={true}
            dimmer="blurring"
            className="application-section"
        >
            <Modal.Header>Financial Details</Modal.Header>

            <Form className="application-form">

            </Form>
            <Modal.Actions>
                <Button positive onClick={handleProceedPrev} style={{ float: 'left' }}>
                    Prev
                </Button>
                <Button positive onClick={handleProceedNext}>
                    Next
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default Financial;
