import React, { useReducer } from 'react';
import ReactModal from 'react-modal';
import { Button, Form } from 'semantic-ui-react';
import API from '../../api/userAPI';
import './emailCustomer.scss';
import { connect } from 'react-redux';
import { isLoading } from "../../redux/actions/loadingActions";
import { ToastContainer, toast } from 'react-toastify';

// custom css for the modal
ReactModal.defaultStyles.overlay.backgroundColor = 'none';
ReactModal.defaultStyles.overlay.backdropFilter = 'blur(2px)';
const customStyles = {
    content: {
        top: '25%',
        borderRadius: '16px',
        left: 'calc(50% - 250px)',
        background: 'none',
        border: '1px solid #6ba2b7',
    },
};

// reducer function
function emailReducer(state, action) {
    switch (action.type) {
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
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    error: {},
};

const EmailCustomer = ({
    history,
    isLoading
}) => {
    const [state, dispatch] = useReducer(emailReducer, initialState);
    const { firstName, lastName, email, phone, error } = state;

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

    function handleSend() {
        if (isFormvalid()) {
            isLoading(true);
            API.createOpp({ firstName, lastName, email, phone, sendEmail: true })
            .then((res) => {
                isLoading(false);
                toast.success('Success: Email Sent');
                history.push('/');
            })
            .catch((err) => {
                toast.error(`Request failed. Error: ${err.response.data}`);
                isLoading(false);
            })
        }
    }

    function handleCancel() {
        history.push('/');
    }

    return (
        <ReactModal
            isOpen={true}
            style={customStyles}
            id="emailModal"
            ariaHideApp={false}
        >
            <Form>
                <h2>Enter Customer Information</h2>
                <div className="customer-contact-fields">
                    <Form.Field>
                        <label>First Name*</label>
                        <input
                            placeholder='First Name'
                            onChange={(event) => dispatch({ type: 'CUSTOMER_INFO', field: 'firstName', payload: event.target.value })}
                            value={firstName}
                        />
                        <p className="error-text">{error.firstName ? error.firstName : null}</p>
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name*</label>
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
                        <label>Email*</label>
                        <input
                            placeholder='Email'
                            onChange={(event) => dispatch({ type: 'CUSTOMER_INFO', field: 'email', payload: event.target.value })}
                            value={email}
                        />
                        <p className="error-text">{error.email ? error.email : null}</p>
                    </Form.Field>
                    <Form.Field>
                        <label>Contact Number*</label>
                        <input
                            placeholder='Phone'
                            onChange={(event) => dispatch({ type: 'CUSTOMER_INFO', field: 'phone', payload: event.target.value })}
                            value={phone}
                        />
                        <p className="error-text">{error.phone ? error.phone : null}</p>
                    </Form.Field>
                </div>
                <div className="send-email-action-buttons">
                    <Button negative onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button positive onClick={handleSend}>
                        Send
                    </Button>
                </div>
            </Form>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
            />
        </ReactModal>
    )
}

const mapDispatchToProps = {
    isLoading,
};

export default connect(null, mapDispatchToProps)(EmailCustomer);
