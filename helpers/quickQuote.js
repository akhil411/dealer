const axios = require("axios");
const config = require("./../config");

function mapAssetType(assetType) {
    const assetTypes = {
        "Passenger Vehicle": "PASSENGER_VEHICLE",
        "Motorcycle": "MOTORCYCLE",
        "Boat": "BOAT",
        "Caravan": "CARAVAN",
        "Trucks and Trailers > 4.5t": "TRUCK_LT_4_5",
        "Plant and Equipment": "PLANT_EQUIPMENT",
        "Commercial Vehicle < 4.5t": "TRUCK_GT_4_5",
        "Personal Loan": "PERSONAL_LOAN",
        "Business Loan": "BUSINESS_LOAN",
        "Passenger Vehicle - Green Policy": "GREEN_POLICY",
        "Passenger Vehicle - Grey Policy": "GREY_IMPORT",
        "Business Loan - Line of Credit": "BUSINESS_LOAN_LOC"
    }

    return assetTypes[assetType];
}

function mapFinanceType(financeType) {
    const financeTypes = {
        "Consumer": "CONSUMER",
        "Commercial Full Doc": "COMMERCIAL_FULL_DOC",
        "Commercial Low Doc": "COMMERCIAL_LOW_DOC",
        "Commercial Alt Doc": "COMMERCIAL_ALT_DOC",
        "Commercial Start-Up": "COMMERCIAL_START_UP",
        "Commercial Replacement Lend": "COMMERCIAL_REP_LEND",
        "Personal Use": "PERSONAL_USE",
        "Business Use": "BUSINESS_USE"
    }

    return financeTypes[financeType];
}

function mapResidencyStatus(residencyStatus) {
    const residencyStatuses = {
        "Australian Citizen": "CITIZEN",
        "Permanent Resident": "PERMANENT_RESIDENT",
        "Visa 457": "VISA_SKILLED",
        "Other Visa Type": "VISA_OTHER"
    }

    return residencyStatuses[residencyStatus];
}

function mapCreditHistory(creditHistory) {
    const creditHistories = {
        "Paid Defaults": "PAID_DEFAULTS",
        "Un Paid Defaults": "UNPAID_DEFAULTS",
        "Ex Bankrupt": "EX_BANKRUPT",
        "First Time Lend": "FIRST_TIME",
        "Clear Credit History": "CLEAR_CREDIT",
        "Previous Comparable Credi": "PREV_COMP_CREDIT"
    }

    return creditHistories[creditHistory];
}

function mapLivingStatus(livingStatus) {
    const livingStatuses = {
        "Property Owner": "OWNER",
        "Renting": "RENTING",
        "Boarding": "BOARDING",
        "Living With Relative": "WITH_RELATIVES"
    }

    return livingStatuses[livingStatus];
}

function mapSaleType(saleType) {
    const salesTypes = {
        "Private": "PRIVATE",
        "Dealer": "DEALER",
        "Sale and Buy Back": "SALE_BUY_BACK",
        "Balloon Refinance": "BALLOON_REFINANCE",
        "Mid Term Re-Financ": "MID_TERM_REFINANCE"
    }

    return salesTypes[saleType];
}

function mapRepaymentFrequency(repaymentFrequency) {
    const repaymentFrequencies = {
        "Monthly": "monthly",
        "Fortnightly": "fortnightly",
        "Weekly": "weekly"
    }

    return repaymentFrequencies[repaymentFrequency];
}

function mapEmploymentStatus(employmentStatus) {
    const employmentStatuses = {
        "Full Time": "FULL_TIME",
        "Part Time": "PART_TIME",
        "Casual": "CASUAL",
        "Self Employed": "SELF_EMPLOYED",
    }

    return employmentStatuses[employmentStatus];
}

module.exports = {
    authenticate: async function () {
        const username = config.matchingEngineUser;
        const password = config.matchingEnginePass;
        const url = config.matchingEngineLogin;
        const response = await axios.post(url, { username: username, password: password });
        const { status, data } = response;
        
        if (status == 200) {
            return data.token;
        } else {
            return null;
        }
    },
    getQuote: async function (token, quoteData) {
        const url = config.matchingEngineGetQuote;
        const settings = { headers: { Authorization: `Bearer ${token}` } };
        const response = await axios.post(url, quoteData, settings);
        const { status, data } = response;

        if (status == 200) {
            return data.content;
        } else {
            return null;
        }
    },
    mapQuoteData: function (quickQuoteData) {
        return {
            lenders: "*",
            residency_status: quickQuoteData.residencyStatus,
            employment_status: quickQuoteData.employmentStatus,
            veda_equifax_score: 750,
            comprehensive_equifax_score: 750,
            broker_fee: '',
            asset_type: quickQuoteData.assetType,
            finance_type: quickQuoteData.financeType,
            fterm: quickQuoteData.financeTerm,
            pur_price: quickQuoteData.amount,
            valuation: quickQuoteData.amount,
            deposit: quickQuoteData.deposit,
            asset_age: quickQuoteData.assetAge,
            balloon_percentage: 0,
            repayments_period: quickQuoteData.repaymentFrequency,
            living_status: quickQuoteData.livingStatus,
            credit_history: quickQuoteData.creditHistory,
            seller: 'DEALER',
            finance_fees: 1,
            commission_amount:''
        }
    }
}