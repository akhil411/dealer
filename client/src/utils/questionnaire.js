/**
 *
 * @param {Object} types.singleSelect question is single select from multiple options
 * @param {Object} types.amount question is input field amount
 * @param {Object} types.year question is input field year
 *
 */
let types = {
    singleSelect: 'singleSelect',
    amount: 'amount',
    year: 'year',
};

/**
 *
 * @param {Array} questionnaire array of questions
 * @param {Object} questionnaire.id id of the question
 * @param {Object} questionnaire.text question text
 * @param {Object} questionnaire.selectedValue selected or input value of the answer
 * @param {Object} questionnaire.target question has a dependency with the target id
 * @param {Object} questionnaire.validWith question is valid only with selectedValue of the question target id
 * @param {Object} questionnaire.type type of the question
 * @param {Object} questionnaire.options options of the sinlgeSelect questions
 *
 */
let questionnaire = [
    {
        id: 1,
        text: 'Select the Asset type',
        selectedValue: "",
        target: "",
        validWith: "",
        field: 'assetType',
        type: types.singleSelect,
        options: {
            'PASSENGER_VEHICLE' : 'Car',
            'MOTORCYCLE' : 'Motorcycle',
            'TRUCK_LT_4_5' : 'Truck and Trailers > 4.5t',
            'TRUCK_GT_4_5' : 'Truck and Trailers < 4.5t',
        }
    },
    {
        id: 2,
        text: 'What is this loan for?',
        selectedValue: "",
        target: "",
        validWith: "",
        field: 'financeType',
        type: types.singleSelect,
        options: {
            'CONSUMER' : 'Personal Use',
            'COMMERCIAL' : 'Commercial Use',
        }
    },
    {
        id: 3,
        text: "Is it possible to prove company's financial profit",
        selectedValue: "",
        target: 2,
        validWith: "COMMERCIAL",
        field: 'financeType',
        type: types.singleSelect,
        options: {
            'COMMERCIAL_FULL_DOC' : 'Yes',
            'COMMERCIAL_LOW_DOC' : 'No',
        }
    },
    {
        id: 4,
        text: 'Select finance term',
        selectedValue: "",
        target: "",
        validWith: "",
        field: 'financeTerm',
        type: types.singleSelect,
        options: {
            '1' : '1 yr',
            '2' : '2 yrs',
            '3' : '3 yrs',
            '4' : '4 yrs',
            '5' : '5 yrs',
            '6' : '6 yrs',
            '7' : '7 yrs',
        }
    },
    {
        id: 5,
        text: 'Select residency status',
        selectedValue: "",
        target: "",
        validWith: "",
        field: 'residencyStatus',
        type: types.singleSelect,
        options: {
            'CITIZEN' : 'Australian Citizen',
            'PERMANENT_RESIDENT' : 'Permanent Resident',
            'VISA_SKILLED' : 'Visa 457 or Equivalent',
            'VISA_OTHER' : 'Other Visa Type',
        }
    },
    {
        id: 6,
        text: 'Select credit history',
        selectedValue: "",
        target: "",
        validWith: "",
        field: 'creditHistory',
        type: types.singleSelect,
        options: {
            'PAID_DEFAULTS' : 'Paid Defaults',
            'UNPAID_DEFAULTS' : 'Un Paid Defaults',
            'EX_BANKRUPT' : 'Ex Bankrupt',
            'FIRST_TIME' : 'First time Lend',
            'CLEAR_CREDIT' : 'Clear Credit History',
            'PREV_COMP_CREDIT' : 'Previous Comparable Credit',
        }
    },
    {
        id: 7,
        text: 'Select living status',
        selectedValue: "",
        target: "",
        validWith: "",
        field: 'livingStatus',
        type: types.singleSelect,
        options: {
            'OWNER' : 'Property Owner',
            'RENTING' : 'Renting',
            'BOARDING' : 'Boarding',
            'WITH_RELATIVES' : 'Living With Relatives',
        }
    },
    {
        id: 8,
        text: 'Select the repayment frequency',
        selectedValue: "",
        target: "",
        validWith: "",
        field: 'repaymentFrequency',
        type: types.singleSelect,
        options: {
            'monthly' : 'Monthly',
            'fortnightly' : 'Fortnightly',
            'weekly' : 'Weekly',
        }
    },
    {
        id: 9,
        text: 'Select the employment status',
        selectedValue: "",
        target: "",
        validWith: "",
        field: 'employmentStatus',
        type: types.singleSelect,
        options: {
            'FULL_TIME' : 'Full Time',
            'PART_TIME' : 'Part Time',
            'CASUAL' : 'Casual',
            'SELF_EMPLOYED' : 'Self Employed',
        }
    },
    {
        id: 10,
        text: 'What is the purchase price of the asset?',
        selectedValue: "",
        target: "",
        validWith: "",
        field: 'amount',
        type: types.amount,
        options: {}
    },
    {
        id: 12,
        text: 'How much is the deposit amount?',
        selectedValue: "",
        target: "",
        validWith: "",
        field: 'deposit',
        type: types.amount,
        options: {}
    },
    {
        id: 13,
        text: 'What is the build year of the asset?',
        selectedValue: "",
        target: "",
        validWith: "",
        field: 'assetAge',
        type: types.year,
        options: {}
    },
]

export default questionnaire;
