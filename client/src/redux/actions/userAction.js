export const setAuthenticated = (data) => ({
    type: 'SET_AUTHENTICATED',
    payload: data
});

export const removeAuthenticated = (data) => ({
    type: 'REMOVE_AUTHENTICATED',
    payload: data
});

export const validateUser = (code) => ({
    type: 'VALIDATE_USER',
    payload: code
});
