import axios from "axios";

export default {
    getQuickQuote: function (data) {
        return axios.post("/api/quickQuote/getQuote", data);
    },
}