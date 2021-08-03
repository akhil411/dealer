import React, { useEffect, useState } from 'react';
import { Button, Form, Radio, Modal } from 'semantic-ui-react';


const Residential = ({
    history,
}) => {
    const [firstResidential, setFirstResidential] = useState({});
    const [secondResidential, setSecondResidential] = useState({});
    const [hasSecondApplicant, setHasSecondApplicant] = useState(false);


    function handleProceedNext() {
        history.push('/application/employment');
    }

    function handleProceedPrev() {
        history.push('/application/personal');
    }

    function handleChangeFirstApplicant(event) {
        const { name, value } = event.target;
        setFirstResidential({ ...firstResidential, [name]: value })
    }

    function handleCheckbox(name, value) {
        setFirstResidential({ ...firstResidential, [name]: value })
    }

    function handleSecondCheckbox(name, value) {
        setSecondResidential({ ...secondResidential, [name]: value })
    }

    function handleChangeSecondApplicant(event) {
        const { name, value } = event.target;
        setSecondResidential({ ...secondResidential, [name]: value })
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
            <Modal.Header>Residential Details</Modal.Header>

            <Form className="application-form">
                <div className="application-fields">
                    <Form.Field>
                        <label>Residential Type</label>
                        <Radio
                            label='Owning'
                            checked={firstResidential.residentialType ? firstResidential.residentialType === 'owning' : false}
                            onChange={(() => handleCheckbox('residentialType', 'owning'))}
                            value={firstResidential.residentialType ? firstResidential.residentialType : ''}
                        />
                        <Radio
                            label='Mortgage'
                            checked={firstResidential.residentialType ? firstResidential.residentialType === 'mortgage' : false}
                            onChange={(() => handleCheckbox('residentialType', 'mortgage'))}
                            value={firstResidential.residentialType ? firstResidential.residentialType : ''}
                        />
                        <Radio
                            label='Renting'
                            checked={firstResidential.residentialType ? firstResidential.residentialType === 'renting' : false}
                            onChange={(() => handleCheckbox('residentialType', 'renting'))}
                            value={firstResidential.residentialType ? firstResidential.residentialType : ''}
                        />
                        <Radio
                            label='Living with relatives'
                            checked={firstResidential.residentialType ? firstResidential.residentialType === 'relatives' : false}
                            onChange={(() => handleCheckbox('residentialType', 'relatives'))}
                            value={firstResidential.residentialType ? firstResidential.residentialType : ''}
                        />
                        <Radio
                            label='Boarding'
                            checked={firstResidential.residentialType ? firstResidential.residentialType === 'boarding' : false}
                            onChange={(() => handleCheckbox('residentialType', 'boarding'))}
                            value={firstResidential.residentialType ? firstResidential.residentialType : ''}
                        />
                        <Radio
                            label='Other'
                            checked={firstResidential.residentialType ? firstResidential.residentialType === 'other' : false}
                            onChange={(() => handleCheckbox('residentialType', 'other'))}
                            value={firstResidential.residentialType ? firstResidential.residentialType : ''}
                        />
                    </Form.Field>
                </div>
                <div className="application-fields">
                    <Form.Field>
                        <label>Unit No</label>
                        <input
                            placeholder='Unit no'
                            name="unitNo"
                            onChange={handleChangeFirstApplicant}
                            value={firstResidential.unitNo ? firstResidential.unitNo : ''}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Street No</label>
                        <input
                            placeholder='Street No'
                            name="streetNo"
                            onChange={handleChangeFirstApplicant}
                            value={firstResidential.streetNo ? firstResidential.streetNo : ''}
                        />
                        {/* <p className="error-text">{error.streetNo ? error.streetNo : null}</p> */}
                    </Form.Field>
                    <Form.Field>
                        <label>Street Name</label>
                        <input
                            placeholder='Street Name'
                            name="streetName"
                            onChange={handleChangeFirstApplicant}
                            value={firstResidential.streetName ? firstResidential.streetName : ''}
                        />
                        {/* <p className="error-text">{error.streetName ? error.streetName : null}</p> */}
                    </Form.Field>
                </div>
                <div className="application-fields">
                    <Form.Field>
                        <label>Suburb</label>
                        <input
                            placeholder='Suburb'
                            name="suburb"
                            onChange={handleChangeFirstApplicant}
                            value={firstResidential.suburb ? firstResidential.suburb : ''}
                        />
                        {/* <p className="error-text">{error.suburb ? error.suburb : null}</p> */}
                    </Form.Field>
                    <Form.Field>
                        <label>Postcode</label>
                        <input
                            placeholder='Postcode'
                            name="postcode"
                            onChange={handleChangeFirstApplicant}
                            value={firstResidential.postcode ? firstResidential.postcode : ''}
                        />
                        {/* <p className="error-text">{error.postcode ? error.postcode : null}</p> */}
                    </Form.Field>
                    <Form.Field>
                        <label>State</label>
                        <Radio
                            label='NSW'
                            checked={firstResidential.residentialState ? firstResidential.residentialState === 'NSW' : false}
                            onChange={(() => handleCheckbox('residentialState', 'NSW'))}
                            value={firstResidential.residentialState ? firstResidential.residentialState : ''}
                        />
                        <Radio
                            label='VIC'
                            checked={firstResidential.residentialState ? firstResidential.residentialState === 'VIC' : false}
                            onChange={(() => handleCheckbox('residentialState', 'VIC'))}
                            value={firstResidential.residentialState ? firstResidential.residentialState : ''}
                        />
                        <Radio
                            label='QLD'
                            checked={firstResidential.residentialState ? firstResidential.residentialState === 'QLD' : false}
                            onChange={(() => handleCheckbox('residentialState', 'QLD'))}
                            value={firstResidential.residentialState ? firstResidential.residentialState : ''}
                        />
                        <Radio
                            label='SA'
                            checked={firstResidential.residentialState ? firstResidential.residentialState === 'SA' : false}
                            onChange={(() => handleCheckbox('residentialState', 'SA'))}
                            value={firstResidential.residentialState ? firstResidential.residentialState : ''}
                        />
                        <Radio
                            label='WA'
                            checked={firstResidential.residentialState ? firstResidential.residentialState === 'WA' : false}
                            onChange={(() => handleCheckbox('residentialState', 'WA'))}
                            value={firstResidential.residentialState ? firstResidential.residentialState : ''}
                        />
                        <Radio
                            label='NT'
                            checked={firstResidential.residentialState ? firstResidential.residentialState === 'NT' : false}
                            onChange={(() => handleCheckbox('residentialState', 'NT'))}
                            value={firstResidential.residentialState ? firstResidential.residentialState : ''}
                        />
                        <Radio
                            label='TAS'
                            checked={firstResidential.residentialState ? firstResidential.residentialState === 'TAS' : false}
                            onChange={(() => handleCheckbox('residentialState', 'TAS'))}
                            value={firstResidential.residentialState ? firstResidential.residentialState : ''}
                        />
                    </Form.Field>
                </div>
                {/* {secondApplicant ? ( */}
                <div className="application-fields">
                    <Form.Field>
                        <label>Is second applicant address different from first applicant</label>
                        <Radio toggle onChange={handleSecondApplicant}
                        />
                    </Form.Field>
                </div>
                {/* ) : null } */}
                { hasSecondApplicant ? (
                    <>
                        <Form.Field>
                            <label>Second Applicant</label>
                        </Form.Field>
                        <div className="application-fields">
                            <Form.Field>
                                <label>Residential Type</label>
                                <Radio
                                    label='Owning'
                                    checked={secondResidential.residentialType ? secondResidential.residentialType === 'owning' : false}
                                    onChange={(() => handleSecondCheckbox('residentialType', 'owning'))}
                                    value={secondResidential.residentialType ? secondResidential.residentialType : ''}
                                />
                                <Radio
                                    label='Mortgage'
                                    checked={secondResidential.residentialType ? secondResidential.residentialType === 'mortgage' : false}
                                    onChange={(() => handleSecondCheckbox('residentialType', 'mortgage'))}
                                    value={secondResidential.residentialType ? secondResidential.residentialType : ''}
                                />
                                <Radio
                                    label='Renting'
                                    checked={secondResidential.residentialType ? secondResidential.residentialType === 'renting' : false}
                                    onChange={(() => handleSecondCheckbox('residentialType', 'renting'))}
                                    value={secondResidential.residentialType ? secondResidential.residentialType : ''}
                                />
                                <Radio
                                    label='Living with relatives'
                                    checked={secondResidential.residentialType ? secondResidential.residentialType === 'relatives' : false}
                                    onChange={(() => handleSecondCheckbox('residentialType', 'relatives'))}
                                    value={secondResidential.residentialType ? secondResidential.residentialType : ''}
                                />
                                <Radio
                                    label='Boarding'
                                    checked={secondResidential.residentialType ? secondResidential.residentialType === 'boarding' : false}
                                    onChange={(() => handleSecondCheckbox('residentialType', 'boarding'))}
                                    value={secondResidential.residentialType ? secondResidential.residentialType : ''}
                                />
                                <Radio
                                    label='Other'
                                    checked={secondResidential.residentialType ? secondResidential.residentialType === 'other' : false}
                                    onChange={(() => handleSecondCheckbox('residentialType', 'other'))}
                                    value={secondResidential.residentialType ? secondResidential.residentialType : ''}
                                />
                            </Form.Field>
                        </div>
                        <div className="application-fields">
                            <Form.Field>
                                <label>Unit No</label>
                                <input
                                    placeholder='Unit no'
                                    name="unitNo"
                                    onChange={handleChangeSecondApplicant}
                                    value={secondResidential.unitNo ? secondResidential.unitNo : ''}
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Street No</label>
                                <input
                                    placeholder='Street No'
                                    name="streetNo"
                                    onChange={handleChangeSecondApplicant}
                                    value={secondResidential.streetNo ? secondResidential.streetNo : ''}
                                />
                                {/* <p className="error-text">{error.streetNo ? error.streetNo : null}</p> */}
                            </Form.Field>
                            <Form.Field>
                                <label>Street Name</label>
                                <input
                                    placeholder='Street Name'
                                    name="streetName"
                                    onChange={handleChangeSecondApplicant}
                                    value={secondResidential.streetName ? secondResidential.streetName : ''}
                                />
                                {/* <p className="error-text">{error.streetName ? error.streetName : null}</p> */}
                            </Form.Field>
                        </div>
                        <div className="application-fields">
                            <Form.Field>
                                <label>Suburb</label>
                                <input
                                    placeholder='Suburb'
                                    name="suburb"
                                    onChange={handleChangeSecondApplicant}
                                    value={secondResidential.suburb ? secondResidential.suburb : ''}
                                />
                                {/* <p className="error-text">{error.suburb ? error.suburb : null}</p> */}
                            </Form.Field>
                            <Form.Field>
                                <label>Postcode</label>
                                <input
                                    placeholder='Postcode'
                                    name="postcode"
                                    onChange={handleChangeSecondApplicant}
                                    value={secondResidential.postcode ? secondResidential.postcode : ''}
                                />
                                {/* <p className="error-text">{error.postcode ? error.postcode : null}</p> */}
                            </Form.Field>
                            <Form.Field>
                                <label>State</label>
                                <Radio
                                    label='NSW'
                                    checked={secondResidential.residentialState ? secondResidential.residentialState === 'NSW' : false}
                                    onChange={(() => handleSecondCheckbox('residentialState', 'NSW'))}
                                    value={secondResidential.residentialState ? secondResidential.residentialState : ''}
                                />
                                <Radio
                                    label='VIC'
                                    checked={secondResidential.residentialState ? secondResidential.residentialState === 'VIC' : false}
                                    onChange={(() => handleSecondCheckbox('residentialState', 'VIC'))}
                                    value={secondResidential.residentialState ? secondResidential.residentialState : ''}
                                />
                                <Radio
                                    label='QLD'
                                    checked={secondResidential.residentialState ? secondResidential.residentialState === 'QLD' : false}
                                    onChange={(() => handleSecondCheckbox('residentialState', 'QLD'))}
                                    value={secondResidential.residentialState ? secondResidential.residentialState : ''}
                                />
                                <Radio
                                    label='SA'
                                    checked={secondResidential.residentialState ? secondResidential.residentialState === 'SA' : false}
                                    onChange={(() => handleSecondCheckbox('residentialState', 'SA'))}
                                    value={secondResidential.residentialState ? secondResidential.residentialState : ''}
                                />
                                <Radio
                                    label='WA'
                                    checked={secondResidential.residentialState ? secondResidential.residentialState === 'WA' : false}
                                    onChange={(() => handleSecondCheckbox('residentialState', 'WA'))}
                                    value={secondResidential.residentialState ? secondResidential.residentialState : ''}
                                />
                                <Radio
                                    label='NT'
                                    checked={secondResidential.residentialState ? secondResidential.residentialState === 'NT' : false}
                                    onChange={(() => handleSecondCheckbox('residentialState', 'NT'))}
                                    value={secondResidential.residentialState ? secondResidential.residentialState : ''}
                                />
                                <Radio
                                    label='TAS'
                                    checked={secondResidential.residentialState ? secondResidential.residentialState === 'TAS' : false}
                                    onChange={(() => handleSecondCheckbox('residentialState', 'TAS'))}
                                    value={secondResidential.residentialState ? secondResidential.residentialState : ''}
                                />
                            </Form.Field>
                        </div>
                    </>
                ) : null}
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

export default Residential;
