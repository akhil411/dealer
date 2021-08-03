const axios = require("axios");
const express = require("express");
const config = require("./../config");
const jwt = require('jsonwebtoken');
const applicationHelpers = require("../helpers/applicationHelpers");

// Defining methods for the userController
module.exports = {
	validate: async function (req, res) {
		const userCode = req.body.userCode;
		const apiKey = config.apiKey;
		const url = config.validateUrl;
		const codeType = await applicationHelpers.getCodeType(userCode)
		
		if (!codeType) {
			return res.status(400).json('Invalid Code. Check your code');
		}
		
		const payload = { apiKey, userCode, 'type' : codeType.type };

		try {
			const response = await axios.post(url, payload);
			const { statusCode, statusDescription } = response.data;

			if (statusCode == 200) {
				const payload = { 							
					isDealerCode : codeType.isDealerCode,
					userCode : userCode 
				};
				// Sign token
				jwt.sign(
					payload,
					config.secretKey,
					{
						expiresIn: 36000
					},
					(err, token) => { 
						res.status(200).json({ 
							success: true, 
							token: token, 
						});
					}
				);
			} else {
				const error = statusDescription ? statusDescription : 'Connection error';
				return res.status(400).json(error);
			}
		} catch(err) {
			return res.status(400).json(`Connection error: ${err}`);
		}
	},
	createOpp: async function (req, res) {
		const apiKey = config.apiKey;
		const url = config.createOppUrl;
		const userCode = req.userCode;

		if (!userCode) {
			return res.status(400).json('Error: user code authentication failed');
		}

		const payload = {
			apiKey: apiKey,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			phone: req.body.phone,
			targetUrl: config.targetUrl,
			userCode: userCode,
			sendEmail: req.body.sendEmail,
		}

		try {
			const response = await axios.post(url, payload);
			const { statusCode, statusDescription, oppId } = response.data;

			let responseData = {
				oppId: oppId,
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
				phone: req.body.phone,
			}

			if (statusCode == 200) {
				return res.status(200).json(responseData);
			} else {
				const error = statusDescription ? statusDescription : 'Connection error';
				return res.status(400).json(error);
			}
		} catch(err) {
			return res.status(400).json(`Connection error: ${err}`);
		}
	}
}