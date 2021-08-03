import React, { useEffect, useReducer } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react';
import './customerInfoModal.scss';
import { connect } from 'react-redux';
import { getQuickQuote } from "../../redux/actions/applicationActions";
import API from '../../api/userAPI';
import { isLoading } from "../../redux/actions/loadingActions";
import { toast } from 'react-toastify';

function modalReducer(state, action) {
    switch (action.type) {
        case 'WANT_CUSTOMER_INFO': {
            return {
                ...state,
                wantCustomerInfo: action.payload,
            };
        }
        case 'CUSTOMER_INFO': {
            return {
                ...state,
                [action.field]: action.payload,
                error: {}
            };
        }
        case 'ERRORS': {
            return {
                ...state,
                error: action.payload,
            };
        }
        default:
            return state;
    }
}

const initialState = {
    wantCustomerInfo: false,
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    error: {},
};

const CustomerInfoModal = ({
    getQuickQuote,
    modalClose,
    history,
    isLoading,
}) => {
    const [state, dispatch] = useReducer(modalReducer, initialState);
    const { wantCustomerInfo, firstName, middleName, lastName, email, phone, dob, error } = state;

    function isFormvalid() {
        const errors = {};

        if (!email) {
            errors.email = "*Email is required";
        } else {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailRegex.test(email)) {
                errors.email = "*Invalid Email";
            };
        }

        if (!firstName) {
            errors.firstName = "*FirstName is required";
        }

        if (!lastName) {
            errors.lastName = "*LastName is required";
        }

        if (!phone) {
            errors.phone = "*Phone is required";
        }

        dispatch({ type: 'ERRORS', payload: errors });
        return Object.keys(errors).length === 0;
    }

    function quickQuoteActions() {
        modalClose();
        history.push('/quick-quote');
        getQuickQuote();
    }

    function handleProceed() {
        if (isFormvalid()) {
            isLoading(true);
            API.createOpp({ firstName, lastName, email, phone, sendEmail: false })
            .then((res) => {
                isLoading(false);
                localStorage.setItem("oppInfo", JSON.stringify(res.data));
                quickQuoteActions();
            })
            .catch((err) => {
                toast.error(`Request failed. Error: ${err.response.data}`);
                isLoading(false);
            })
        }
    }

    function handleSkip() {
        quickQuoteActions();
    }

    return (
        <div>
            <Modal
                closeOnEscape={false}
                closeOnDimmerClick={false}
                open={true}
            >
                <Modal.Header>Add Customer Information</Modal.Header>
                { wantCustomerInfo ? (
                    <>
                        <Modal.Content>
                            <Form>
                                <div className="customer-contact-fields">
                                    <Form.Field>
                                        <label>Customer First Name</label>
                                        <input 
                                            placeholder='First Name' 
                                            onChange={(event) => dispatch({ type: 'CUSTOMER_INFO', field: 'firstName', payload: event.target.value })}
                                            value={firstName}
                                        />
                                        <p className="error-text">{error.firstName ? error.firstName : null}</p>
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Customer Middle Name</label>
                                        <input 
                                            placeholder='Middle Name' 
                                            onChange={(event) => dispatch({ type: 'CUSTOMER_INFO', field: 'middleName', payload: event.target.value })}
                                            value={middleName}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Customer Last Name</label>
                                        <input 
                                            placeholder='Last Name' 
                                            onChange={(event) => dispatch({ type: 'CUSTOMER_INFO', field: 'lastName', payload: event.target.value })}
                                            value={lastName}
                                        />
                                        <p className="error-text">{error.lastName ? error.lastName : null}</p>
                                    </Form.Field>
                                </div>
                                <div className="customer-contact-fields">
                                    <Form.Field>
                                        <label>Customer Email</label>
                                        <input 
                                            placeholder='Email' 
                                            onChange={(event) => dispatch({ type: 'CUSTOMER_INFO', field: 'email', payload: event.target.value })}
                                            value={email}
                                        />
                                        <p className="error-text">{error.email ? error.email : null}</p>
                                    </Form.Field>
                                    <Form.Field>
                                        <label>Customer Phone</label>
                                        <input 
                                            placeholder='Phone' 
                                            onChange={(event) => dispatch({ type: 'CUSTOMER_INFO', field: 'phone', payload: event.target.value })}
                                            value={phone}
                                        />
                                        <p className="error-text">{error.phone ? error.phone : null}</p>
                                    </Form.Field>
                                </div>
                            </Form>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button negative onClick={handleSkip}>
                                Skip
                            </Button>
                            <Button positive onClick={handleProceed}>
                                Proceed
                            </Button>
                        </Modal.Actions>
                    </>
                ) : (
                    <>
                        <Modal.Content>
                            <p>Do you wish to add customer information ?</p>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button negative onClick={handleSkip}>
                                No
                            </Button>
                            <Button positive onClick={() =>  dispatch({ type: 'WANT_CUSTOMER_INFO', payload: true })}>
                                Yes
                            </Button>
                        </Modal.Actions>
                    </>
                )}
            </Modal>
        </div>
    )
}

const mapDispatchToProps = {
    getQuickQuote,
    isLoading,
};

export default connect(null, mapDispatchToProps)(CustomerInfoModal);
