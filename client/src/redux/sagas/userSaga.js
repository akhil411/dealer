import { put, takeLatest } from 'redux-saga/effects';
import API from './../../api/userAPI';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';

function* validateUser(data) {
    try {
        yield put({ type: "SET_IS_LOADING", status: true });
        const user = yield API.validateUser({ userCode: data.payload })
            .then(res => {
                const { token } = res.data;
                localStorage.setItem("validatedToken", token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                return (decoded);
            })
            .catch(err => {
                throw err.response.data;
            });
        yield put({ type: "SET_AUTHENTICATED", payload: user });
        yield put({ type: "SET_IS_LOADING", status: false });
    } catch (error) {
        toast.error(error);
        yield put({ type: "SET_IS_LOADING", status: false });
    }

}

export default function* userSaga() {
    yield takeLatest('VALIDATE_USER', validateUser)
}
