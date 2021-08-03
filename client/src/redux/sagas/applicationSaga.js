import { put, select, takeLatest } from 'redux-saga/effects';
import API from './../../api/quoteAPI';
import { formatQA } from './../../utils/quoteHelper';
import { toast } from 'react-toastify';

// get state value from the reducer
const getQA = (state) => state.applicationReducer.questionAnswer;

function* getQuickQuote(data) {
    try {
        yield put({ type: "SET_IS_LOADING", status: true });
        let QA = yield select(getQA);
        let criteria = yield formatQA(QA);
        const results = yield API.getQuickQuote({ criteria })
            .then(res => {
                return res.data;
            })
            .catch(err => {
                throw err.response.data;
            });
        yield put({ type: "SET_QUICK_QUOTE_RESULTS", data: results });
        yield put({ type: "SET_IS_LOADING", status: false });
    } catch (error) {
        toast.error(error);
        yield put({ type: "SET_IS_LOADING", status: false });
    }

}

export default function* applicationSaga() {
    yield takeLatest('GET_QUICK_QUOTE', getQuickQuote)
}
