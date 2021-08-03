import React, { useEffect, useState } from 'react';
import { Button, Form, Radio, Modal } from 'semantic-ui-react';


const Documents = ({
    history,
}) => {

    function handleProceedNext() {
        localStorage.removeItem('questionAndAnswer');
        localStorage.removeItem('oppInfo');
        history.push('/');
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
            <Modal.Header>Documents</Modal.Header>

            <Form className="application-form">

            </Form>
            <Modal.Actions>
                <Button positive onClick={handleProceedPrev} style={{ float: 'left' }}>
                    Prev
                </Button>
                <Button positive onClick={handleProceedNext}>
                    Submit
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default Documents;
