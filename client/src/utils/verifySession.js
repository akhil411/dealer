import jwt_decode from "jwt-decode";

function verifySession() {
    if (localStorage.validatedToken) {
        const token = localStorage.validatedToken;
        const decoded = jwt_decode(token);
        const currentTime = Date.now() / 1000;

        if (decoded.exp < currentTime) {
            window.location.href = "/";
        }
    } else {
        window.location.href = "/";
    }
    return true;
}

export default verifySession;
