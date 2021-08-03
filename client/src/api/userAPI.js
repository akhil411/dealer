import axios from "axios";
import verifySession from './../utils/verifySession';

export default {
    validateUser: function (data) {
        return axios.post("/api/user/validate", data);
    },
    createOpp: function (data) {
        verifySession();
        return axios.post("/api/user/createopp", data);
    },
}