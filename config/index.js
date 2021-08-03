require('dotenv').config('../.env');

module.exports = {
    validateUrl: process.env.SKYNET_VALIDATE_URL,
    apiKey: process.env.SKYNET_APIKEY,
    secretKey: process.env.SECRET_KEY,
    matchingEngineUser: process.env.MATCHING_ENGINE_USER,
    matchingEnginePass: process.env.MATCHING_ENGINE_PASS,
    matchingEngineLogin: process.env.MATCHING_ENGINE_LOGIN,
    matchingEngineGetQuote: process.env.MATCHING_ENGINE_GET_QUOTE,
    sslVerify: process.env.SSL_VERIFY,
    createOppUrl: process.env.SKYNET_CREATE_OPP_URL,
    targetUrl: process.env.TARGET_URL,
    whitelistUrl: process.env.WHITELIST_URL,
    PORT: process.env.PORT,
    environment: process.env.ENVIRONMENT,
};