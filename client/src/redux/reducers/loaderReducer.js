let initialState = {
    isLoading: false,
}

const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_IS_LOADING':
            return {
                ...state,
                isLoading: action.status,
            };
        default:
            return state;
    }
};
export default loaderReducer;
