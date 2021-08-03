let initialState = {
    isAuthenticated: false,
    user: '',
    validationError: '',
    isDealerApplication: true,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTHENTICATED':
            return {
                ...state,
                isAuthenticated: true,
                isDealerApplication: action.payload.isDealerCode,
                user: action.payload,
            };
        case 'REMOVE_AUTHENTICATED':
            return {
                ...state,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};
export default userReducer;
