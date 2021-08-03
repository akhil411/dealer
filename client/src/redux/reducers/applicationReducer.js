import questionnaire from './../../utils/questionnaire';

let initialState = {
    questionAnswer: questionnaire,
    quickQuoteResults: [],
}

const applicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_QUESTION_ANSWERS':
            localStorage.setItem("questionAndAnswer", JSON.stringify(action.payload));
            return {
                ...state,
                questionAnswer: action.payload,
            };
        case 'SET_QUICK_QUOTE_RESULTS':
            return {
                ...state,
                quickQuoteResults: action.data,
            };
        default:
            return state;
    }
};

export default applicationReducer;
