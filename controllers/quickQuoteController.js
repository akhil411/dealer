const quickQuoteHelper = require("../helpers/quickQuote");

// Defining methods for the organisationsController
module.exports = {
    getQuote: async function (req, res) {
        try {
            const token = await quickQuoteHelper.authenticate();

            if (token) {
                const quoteData = quickQuoteHelper.mapQuoteData(req.body.criteria);

                try {
                    const data = await quickQuoteHelper.getQuote(token, quoteData);

                    if (data) {
                        res.json(Object.values(data));
                    } else {
                        return res.status(400).json('Empty results');
                    }
                } catch(err) {
                    console.log(err);
                    return res.status(400).json('Connection error: Unable to fetch quick quote');
                }
            } else {
                return res.status(400).json('Connection error: Empty token');
            }
		} catch(err) {
            console.log(err);
			return res.status(400).json('Connection error: Token error');
		}
    },
};
