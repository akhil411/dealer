import React, { useEffect, useReducer } from 'react';
import { Progress, Input, Label } from 'semantic-ui-react';
import './questionnaire.scss';
import { connect } from 'react-redux';
import { setQuestionAnswers, getQuickQuote } from "../../redux/actions/applicationActions";
import { toast } from 'react-toastify';
import CustomerInfoModal from '../../components/customerInfoModal/CustomerInfoModal';

function applicationReducer(state, action) {
    switch (action.type) {
        case 'QUESTIONS': {
            return {
                ...state,
                questions: action.payload,
                questionsLength: action.payload.length,
                inputText: '',
            };
        }
        case 'POSITION': {
            return {
                ...state,
                position: action.payload,
            };
        }
        case 'INPUT_TEXT': {
            return {
                ...state,
                inputText: action.payload,
            };
        }
        case 'PROGRESS': {
            return {
                ...state,
                progress: Math.ceil(((state.position + 1) / state.questionsLength) * 100),
            };
        }
        case 'MODAL_OPEN': {
            return {
                ...state,
                modalOpen: action.payload,
            };
        }
        default:
            return state;
    }
}

const initialState = {
    questions: [],
    questionsLength: 0,
    position: 0,
    progress: 0,
    inputText: '',
    modalOpen: false,
};

const Questionnaire = ({ 
    setQuestionAnswers,
    history,
    isDealerApplication,
    getQuickQuote,
    questionAnswer,
}) => {
    const [state, dispatch] = useReducer(applicationReducer, initialState);
    const { questions, questionsLength, position, progress, inputText, modalOpen } = state;
    let currentQuestion = questions[position];

    useEffect(() => {
        dispatch({ type: 'QUESTIONS', payload: questionAnswer })
    }, [questionAnswer]);

    function checkAndReturnValidPosition() {
        let nextQuestion = questions[position + 1];
        let target = nextQuestion.target - 1;

        if (nextQuestion.target != '' && nextQuestion.validWith != questions[target].selectedValue) {
            return position + 2;
        } else {
            return position + 1;
        }
    }

    function setSelection(value) {
        if (value != '' && value != undefined) {
            let updatedQuestions = questions;
            updatedQuestions[position].selectedValue = value;
            dispatch({ type: 'QUESTIONS', payload: updatedQuestions });
            setQuestionAnswers(updatedQuestions);

            if ((position + 1) < questionsLength) {
                dispatch({ type: 'POSITION', payload: checkAndReturnValidPosition() });
                dispatch({ type: 'PROGRESS' });
            } else {
                if (isDealerApplication && !localStorage.oppInfo) {
                    dispatch({ type: 'MODAL_OPEN', payload: true });
                } else {
                    getQuickQuote();
                    history.push('/quick-quote');
                }
            }
        } else if (currentQuestion.type != 'singleSelect') {
            toast.error("Field cannot be empty");
        }
    }

    function handleKeyPress(event) {
        if(event.key === 'Enter') {
            setSelection(event.target.value);
        }
    }

    function handleBack() {
        let newPosition = position - 1;

        if (questions[position - 1].selectedValue == '') {
            newPosition = position - 2;
        }
        dispatch({ type: 'POSITION', payload: newPosition });
        dispatch({ type: 'PROGRESS' });
    }

    return (
        <div className="applicationBox">
            {currentQuestion ? (
                <div className="selectionMethod">
                    <h2>{currentQuestion.text}</h2>
                    {currentQuestion.type == 'singleSelect' ? (
                        <div className="application-button-group">
                            {Object.keys(currentQuestion.options).map((key, index) => (
                                <div key={index} style={{display:'flex'}}>
                                    <div key={index} className="application-button" onClick={() => setSelection(key)}>{currentQuestion.options[key]}</div>
                                    { currentQuestion.selectedValue == key ? (
                                        <span className="checkmark">
                                            <div className="checkmark_circle"></div>
                                            <div className="checkmark_stem"></div>
                                            <div className="checkmark_kick"></div>
                                        </span>
                                    ) : null }
                                </div>
                            ))}
                        </div>
                    ) : (
                        currentQuestion.type == 'amount' ? (
                            <Input labelPosition='right' type='number' placeholder='Enter amount...'>
                                <Label basic>$</Label>
                                <input 
                                    onKeyPress={handleKeyPress} 
                                    onChange={(event) => dispatch({ type: 'INPUT_TEXT', payload: event.target.value })} 
                                    value={currentQuestion.selectedValue ? currentQuestion.selectedValue : inputText}
                                />
                                <Label>.00</Label>
                            </Input>
                        ) : (
                            <Input 
                                placeholder='Enter...' 
                                type="number"
                                onKeyPress={handleKeyPress} 
                                onChange={(event) => dispatch({ type: 'INPUT_TEXT', payload: event.target.value })} 
                                value={currentQuestion.selectedValue ? currentQuestion.selectedValue : inputText}
                            />
                        )
                    )}
                </div>
            ) : null}

            { position > 0 ? (
                <div className="navigate-group">
                    <div className="navigate-back" onClick={handleBack}>&laquo; Back</div>
                    {currentQuestion.type != 'singleSelect' ? (
                        <div className="navigate-next" onClick={() => setSelection(inputText)}>Next &raquo;</div>
                    ) : null}
                </div>
            ) : null}

            <div className="progress-bar">
                <Progress percent={progress} indicating />
            </div>

            { modalOpen ? (
                <CustomerInfoModal modalClose={() => dispatch({ type: 'MODAL_OPEN', payload: false })} history={history}/>
            ) : null}
        </div>
    )
}

const mapDispatchToProps = {
    setQuestionAnswers,
    getQuickQuote,
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.userReducer.isAuthenticated,
    isDealerApplication: state.userReducer.isDealerApplication,
    questionAnswer: state.applicationReducer.questionAnswer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
