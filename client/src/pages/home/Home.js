import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './home.scss';
import { Input, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { validateUser } from "../../redux/actions/userAction";
import { toast } from 'react-toastify';

const Home = ({
    history,
    validateUser,
    isAuthenticated,
    isDealerApplication,
}) => {
    const [userCode, setUserCode] = useState('');
    const { code } = useParams();

    useEffect(() => {
        if (code != undefined) {
            setUserCode(code);
        }
    }, [])

    useEffect(() => {
        console.log(isDealerApplication);
        if (isAuthenticated && !isDealerApplication) {
            history.push(`/questionnaire`);
        }
    }, [isDealerApplication])

    function handleInputChange(event) {
        setUserCode(event.target.value);
    }

    function handleProceed() {
        if (userCode != '' && userCode != null) {
            validateUser(userCode);
        } else {
            toast.error('Code is required');
        }
    }

    function setSelectedMethod(method) {
        history.push(`/${method}`)
    }

    return (
        <div className="applicationBox">
            {isAuthenticated == false ? (
                <div className="validateBoxSection">
                    <h1>Drive IQ Dealer Portal</h1>
                    <Input
                        id="codeInput"
                        icon='key'
                        iconPosition='left'
                        placeholder='Enter your code'
                        value={userCode}
                        onChange={handleInputChange}
                    />
                    <Button
                        id="proceed"
                        content="Proceed"
                        primary
                        onClick={handleProceed}
                    />
                </div>
            ) : (
                <div className="selectionMethod">
                    <h2>How do you want to start the process ?</h2>
                    <div className="application-button-group">
                        <div className="application-button" onClick={() => setSelectedMethod('questionnaire')}>Start Application</div>
                        <div className="application-button" onClick={() => setSelectedMethod('email')}>Email Application Link</div>
                    </div>
                </div>
            )}
        </div>
    )
}

const mapDispatchToProps = {
    validateUser,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.userReducer.isAuthenticated,
    isDealerApplication: state.userReducer.isDealerApplication,
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
