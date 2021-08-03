import React, { useEffect, useReducer, useState } from 'react';
import { Button, Form, Radio, Modal } from 'semantic-ui-react';

const Personal = ({
    history,
}) => {
    const [firstApplicant, setFirstApplicant] = useState({});
    const [secondApplicant, setSecondApplicant] = useState({});
    const [hasSecondApplicant, setHasSecondApplicant] = useState(false);

    useEffect(() => {
        if (localStorage.oppInfo) {
            let oppInfo = JSON.parse(localStorage.oppInfo);
            setFirstApplicant({
                'firstName': oppInfo.firstName,
                'lastName': oppInfo.lastName,
                'email': oppInfo.email,
                'phone': oppInfo.phone,
            });
        }
    }, []);

    function handleProceedNext() {
        history.push('/application/residential');
    }

    function handleChangeFirstApplicant(event) {
        const { name, value } = event.target;
        setFirstApplicant({ ...firstApplicant, [name]: value })
    }

    function handleCheckbox(name, value) {
        setFirstApplicant({ ...firstApplicant, [name]: value })
    }

    function handleSecondCheckbox(name, value) {
        setSecondApplicant({ ...secondApplicant, [name]: value })
    }

    function handleChangeSecondApplicant(event) {
        const { name, value } = event.target;
        setSecondApplicant({ ...secondApplicant, [name]: value })
    }

    function handleSecondApplicant() {
        setHasSecondApplicant(!hasSecondApplicant);
    }

    return (
        <Modal
            closeOnEscape={false}
            closeOnDimmerClick={false}
            open={true}
            dimmer="blurring"
            className="application-section"
        >
            <Modal.Header>Personal Information</Modal.Header>

            <Form className="application-form">
                <div className="application-fields">
                    <Form.Field>
                        <label>First Name</label>
                        <input
                            placeholder='First Name'
                            name="firstName"
                            onChange={handleChangeFirstApplicant}
                            value={firstApplicant.firstName ? firstApplicant.firstName : ''}
                        />
                        {/* <p className="error-text">{error.firstName ? error.firstName : null}</p> */}
                    </Form.Field>
                    <Form.Field>
                        <label>Middle Name</label>
                        <input
                            placeholder='Middle Name'
                            name="middleName"
                            onChange={handleChangeFirstApplicant}
                            value={firstApplicant.middleName ? firstApplicant.middleName : ''}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input
                            placeholder='Last Name'
                            name="lastName"
                            onChange={handleChangeFirstApplicant}
                            value={firstApplicant.lastName ? firstApplicant.lastName : ''}
                        />
                        {/* <p className="error-text">{error.lastName ? error.lastName : null}</p> */}
                    </Form.Field>
                </div>
                <div className="application-fields">
                    <Form.Field>
                        <label>Email</label>
                        <input
                            placeholder='Email'
                            name="email"
                            onChange={handleChangeFirstApplicant}
                            value={firstApplicant.email ? firstApplicant.email : ''}
                        />
                        {/* <p className="error-text">{error.email ? error.email : null}</p> */}
                    </Form.Field>
                    <Form.Field>
                        <label>Mobile</label>
                        <input
                            placeholder='Mobile'
                            name="phone"
                            onChange={handleChangeFirstApplicant}
                            value={firstApplicant.phone ? firstApplicant.phone : ''}
                        />
                        {/* <p className="error-text">{error.phone ? error.phone : null}</p> */}
                    </Form.Field>
                    <Form.Field>
                        <label>DOB</label>
                        <input
                            placeholder='DOB'
                            name="dob"
                            onChange={handleChangeFirstApplicant}
                            value={firstApplicant.dob ? firstApplicant.dob : ''}
                        />
                        {/* <p className="error-text">{error.dob ? error.dob : null}</p> */}
                    </Form.Field>
                </div>
                <div className="application-fields">
                    <Form.Field>
                        <label>Gender</label>
                        <Radio
                            label='Male'
                            checked={firstApplicant.gender ? firstApplicant.gender === 'male' : false}
                            onChange={(() => handleCheckbox('gender', 'male'))}
                            value={firstApplicant.gender ? firstApplicant.gender : ''}
                        />
                        <Radio
                            label='Female'
                            checked={firstApplicant.gender ? firstApplicant.gender === 'female' : false}
                            onChange={(() => handleCheckbox('gender', 'female'))}
                            value={firstApplicant.gender ? firstApplicant.gender : ''}
                        />
                    </Form.Field>
                </div>
                <div className="application-fields">
                    <Form.Field>
                        <label>Marital Status</label>
                        <Radio
                            label='Single'
                            checked={firstApplicant.maritalStatus ? firstApplicant.maritalStatus === 'single' : false}
                            onChange={(() => handleCheckbox('maritalStatus', 'single'))}
                            value={firstApplicant.maritalStatus ? firstApplicant.maritalStatus : ''}
                        />
                        <Radio
                            label='Married'
                            checked={firstApplicant.maritalStatus ? firstApplicant.maritalStatus === 'married' : false}
                            onChange={(() => handleCheckbox('maritalStatus', 'married'))}
                            value={firstApplicant.maritalStatus ? firstApplicant.maritalStatus : ''}
                        />
                        <Radio
                            label='Separated'
                            checked={firstApplicant.maritalStatus ? firstApplicant.maritalStatus === 'separated' : false}
                            onChange={(() => handleCheckbox('maritalStatus', 'separated'))}
                            value={firstApplicant.maritalStatus ? firstApplicant.maritalStatus : ''}
                        />
                        <Radio
                            label='De Facto'
                            checked={firstApplicant.maritalStatus ? firstApplicant.maritalStatus === 'defacto' : false}
                            onChange={(() => handleCheckbox('maritalStatus', 'defacto'))}
                            value={firstApplicant.maritalStatus ? firstApplicant.maritalStatus : ''}
                        />
                        <Radio
                            label='Widowed'
                            checked={firstApplicant.maritalStatus ? firstApplicant.maritalStatus === 'widowed' : false}
                            onChange={(() => handleCheckbox('maritalStatus', 'widowed'))}
                            value={firstApplicant.maritalStatus ? firstApplicant.maritalStatus : ''}
                        />
                    </Form.Field>
                </div>
                <div className="application-fields">
                    <Form.Field>
                        <label>Licence Type</label>
                        <Radio
                            label='Full'
                            checked={firstApplicant.licenceType ? firstApplicant.licenceType === 'full' : false}
                            onChange={(() => handleCheckbox('licenceType', 'full'))}
                            value={firstApplicant.licenceType ? firstApplicant.licenceType : ''}
                        />
                        <Radio
                            label='Provisional'
                            checked={firstApplicant.licenceType ? firstApplicant.licenceType === 'provisional' : false}
                            onChange={(() => handleCheckbox('licenceType', 'provisional'))}
                            value={firstApplicant.licenceType ? firstApplicant.licenceType : ''}
                        />
                        <Radio
                            label='Heavy Vehicle'
                            checked={firstApplicant.licenceType ? firstApplicant.licenceType === 'heavy' : false}
                            onChange={(() => handleCheckbox('licenceType', 'heavy'))}
                            value={firstApplicant.licenceType ? firstApplicant.licenceType : ''}
                        />
                        <Radio
                            label='None'
                            checked={firstApplicant.licenceType ? firstApplicant.licenceType === 'none' : false}
                            onChange={(() => handleCheckbox('licenceType', 'none'))}
                            value={firstApplicant.licenceType ? firstApplicant.licenceType : ''}
                        />
                    </Form.Field>
                </div>
                <div className="application-fields">
                    <Form.Field>
                        <label>Add second applicant</label>
                        <Radio toggle onChange={handleSecondApplicant}
                        />
                    </Form.Field>
                </div>
                {hasSecondApplicant ? (
                    <>
                        <Form.Field>
                            <label>Second Applicant</label>
                        </Form.Field>
                        <div className="application-fields">
                            <Form.Field>
                                <label>First Name</label>
                                <input
                                    placeholder='First Name'
                                    name="firstName"
                                    onChange={handleChangeSecondApplicant}
                                    value={secondApplicant.firstName ? secondApplicant.firstName : ''}
                                />
                                {/* <p className="error-text">{error.firstName ? error.firstName : null}</p> */}
                            </Form.Field>
                            <Form.Field>
                                <label>Middle Name</label>
                                <input
                                    placeholder='Middle Name'
                                    name="middleName"
                                    onChange={handleChangeSecondApplicant}
                                    value={secondApplicant.middleName ? secondApplicant.middleName : ''}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Last Name</label>
                                <input
                                    placeholder='Last Name'
                                    name="lastName"
                                    onChange={handleChangeSecondApplicant}
                                    value={secondApplicant.lastName ? secondApplicant.lastName : ''}
                                />
                                {/* <p className="error-text">{error.lastName ? error.lastName : null}</p> */}
                            </Form.Field>
                        </div>
                        <div className="application-fields">
                            <Form.Field>
                                <label>Email</label>
                                <input
                                    placeholder='Email'
                                    name="email"
                                    onChange={handleChangeSecondApplicant}
                                    value={secondApplicant.email ? secondApplicant.email : ''}
                                />
                                {/* <p className="error-text">{error.email ? error.email : null}</p> */}
                            </Form.Field>
                            <Form.Field>
                                <label>Mobile</label>
                                <input
                                    placeholder='Mobile'
                                    name="secondPhone"
                                    onChange={handleChangeSecondApplicant}
                                    value={secondApplicant.secondPhone ? secondApplicant.secondPhone : ''}
                                />
                                {/* <p className="error-text">{error.phone ? error.phone : null}</p> */}
                            </Form.Field>
                            <Form.Field>
                                <label>DOB</label>
                                <input
                                    placeholder='DOB'
                                    name="dob"
                                    onChange={handleChangeSecondApplicant}
                                    value={secondApplicant.dob ? secondApplicant.dob : ''}
                                />
                                {/* <p className="error-text">{error.dob ? error.dob : null}</p> */}
                            </Form.Field>
                        </div>
                        <div className="application-fields">
                            <Form.Field>
                                <label>Gender</label>
                                <Radio
                                    label='Male'
                                    checked={secondApplicant.gender ? secondApplicant.gender === 'male' : false}
                                    onChange={(() => handleSecondCheckbox('gender', 'male'))}
                                    value={secondApplicant.gender ? secondApplicant.gender : ''}
                                />
                                <Radio
                                    label='Female'
                                    checked={secondApplicant.gender ? secondApplicant.gender === 'female' : false}
                                    onChange={(() => handleSecondCheckbox('gender', 'female'))}
                                    value={secondApplicant.gender ? secondApplicant.gender : ''}
                                />
                            </Form.Field>
                        </div>
                        <div className="application-fields">
                            <Form.Field>
                                <label>Marital Status</label>
                                <Radio
                                    label='Single'
                                    checked={secondApplicant.maritalStatus ? secondApplicant.maritalStatus === 'single' : false}
                                    onChange={(() => handleSecondCheckbox('maritalStatus', 'single'))}
                                    value={secondApplicant.maritalStatus ? secondApplicant.maritalStatus : ''}
                                />
                                <Radio
                                    label='Married'
                                    checked={secondApplicant.maritalStatus ? secondApplicant.maritalStatus === 'married' : false}
                                    onChange={(() => handleSecondCheckbox('maritalStatus', 'married'))}
                                    value={secondApplicant.maritalStatus ? secondApplicant.maritalStatus : ''}
                                />
                                <Radio
                                    label='Separated'
                                    checked={secondApplicant.maritalStatus ? secondApplicant.maritalStatus === 'separated' : false}
                                    onChange={(() => handleSecondCheckbox('maritalStatus', 'separated'))}
                                    value={secondApplicant.maritalStatus ? secondApplicant.maritalStatus : ''}
                                />
                                <Radio
                                    label='De Facto'
                                    checked={secondApplicant.maritalStatus ? secondApplicant.maritalStatus === 'defacto' : false}
                                    onChange={(() => handleSecondCheckbox('maritalStatus', 'defacto'))}
                                    value={secondApplicant.maritalStatus ? secondApplicant.maritalStatus : ''}
                                />
                                <Radio
                                    label='Widowed'
                                    checked={secondApplicant.maritalStatus ? secondApplicant.maritalStatus === 'widowed' : false}
                                    onChange={(() => handleSecondCheckbox('maritalStatus', 'widowed'))}
                                    value={secondApplicant.maritalStatus ? secondApplicant.maritalStatus : ''}
                                />
                            </Form.Field>
                        </div>
                        <div className="application-fields">
                            <Form.Field>
                                <label>Licence Type</label>
                                <Radio
                                    label='Full'
                                    checked={secondApplicant.licenceType ? secondApplicant.licenceType === 'full' : false}
                                    onChange={(() => handleSecondCheckbox('licenceType', 'full'))}
                                    value={secondApplicant.licenceType ? secondApplicant.licenceType : ''}
                                />
                                <Radio
                                    label='Provisional'
                                    checked={secondApplicant.licenceType ? secondApplicant.licenceType === 'provisional' : false}
                                    onChange={(() => handleSecondCheckbox('licenceType', 'provisional'))}
                                    value={secondApplicant.licenceType ? secondApplicant.licenceType : ''}
                                />
                                <Radio
                                    label='Heavy Vehicle'
                                    checked={secondApplicant.licenceType ? secondApplicant.licenceType === 'heavy' : false}
                                    onChange={(() => handleSecondCheckbox('licenceType', 'heavy'))}
                                    value={secondApplicant.licenceType ? secondApplicant.licenceType : ''}
                                />
                                <Radio
                                    label='None'
                                    checked={secondApplicant.licenceType ? secondApplicant.licenceType === 'none' : false}
                                    onChange={(() => handleSecondCheckbox('licenceType', 'none'))}
                                    value={secondApplicant.licenceType ? secondApplicant.licenceType : ''}
                                />
                            </Form.Field>
                        </div>
                    </>
                ) : null}
            </Form>
            <Modal.Actions>
                <Button positive onClick={handleProceedNext}>
                    Next
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default Personal;
