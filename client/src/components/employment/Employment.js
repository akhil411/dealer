import React, { useEffect, useState } from 'react';
import { Button, Form, Radio, Modal } from 'semantic-ui-react';


const Employment = ({
    history,
}) => {

    function handleProceedNext() {
        history.push('/application/financial');
    }

    function handleProceedPrev() {
        history.push('/application/residential');
    }

    return (
        <Modal
            closeOnEscape={false}
            closeOnDimmerClick={false}
            open={true}
            dimmer="blurring"
            className="application-section"
        >
            <Modal.Header>Employment Details</Modal.Header>

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

export default Employment;
