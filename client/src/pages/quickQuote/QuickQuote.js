import React, { useReducer, useEffect } from 'react';
import './quickQuote.scss';
import { Button } from 'semantic-ui-react'
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Lenders from './../../utils/lenders';

// custom css for the modal
ReactModal.defaultStyles.overlay.backgroundColor = 'none';
ReactModal.defaultStyles.overlay.backdropFilter = 'blur(2px)';
const customStyles = {
    content: {
        top: '100px',
        borderRadius: '16px',
        left: 'calc(50% - 500px)',
        background: 'none',
        border: '1px solid #6ba2b7',
    },
};

const initialState = {
    tableData: [],
    selectedId: -1,
    selectedLender: {},
};

function quoteReducer(state, action) {
    switch (action.type) {
        case 'QUICK_QUOTE_RESULTS':
            return {
                ...state,
                tableData: action.payload,
            }
        case 'SELECT_LENDER':
            return {
                ...state,
                selectedId: action.id,
                selectedLender: action.lender,
            }
        default:
            return state;
    }
}

const QuickQuote = ({
    quickQuoteResults,
    history,
}) => {
    const [state, dispatch] = useReducer(quoteReducer, initialState);
    const { tableData, selectedId } = state;

    useEffect(() => {
        dispatch({ type: 'QUICK_QUOTE_RESULTS', payload: quickQuoteResults })
    }, [quickQuoteResults]);

    function handleProceed() {
        if (selectedId >= 0) {
            history.push('/application');
        } else {
            toast.error('Select a lender from the list');
        }
    }

    function handleEditSection() {
        history.push('/questionnaire');
    }

    return (
        <ReactModal
            isOpen={true}
            style={customStyles}
            id="quickQuoteResult"
            ariaHideApp={false}
        >
            <div className='quick-quote-results'>
                <div className='quick-quote-result-header'>
                    <div>Lender</div>
                    <div>Base Rate</div>
                    <div>Comparison Rate</div>
                    <div>Advertised Rate</div>
                    <div>Monthly Payment</div>
                    <div>Processing Time</div>
                </div>
                { tableData.length > 0 ? (
                    tableData.map((data, index) => (
                        <div
                            className={`quick-quote-result-row ${selectedId == index ? 'selected' : ''}`}
                            onClick={() => dispatch({ type: 'SELECT_LENDER', id: index, lender: data })}
                        >
                            <div>
                                <img className="lender-logo" src={`https://dev-ninja.driveiq-caf.com.au/wp-content/uploads/2021/07/lender-${Lenders[data.lender]}.png`} alt={`${data.lender}`} />
                            </div>
                            <div>{data.base_rate}</div>
                            <div>{data.comparison_rate}</div>
                            <div>{data.advertised_rate}</div>
                            <div>{data.total_monthly_repayment}</div>
                            <div>{data.turnaround_time} days</div>
                        </div>
                    ))
                ) : (
                    <p className="no-results">No results to display ! Try changing the selection</p>
                )
                }
            </div>
            <div className='quick-quote-actions'>
                <Button negative onClick={handleEditSection}>
                    Edit Selection
                </Button>
                <Button positive onClick={handleProceed}>
                    Select & Proceed
                </Button>
            </div>
        </ReactModal>
    )
}

const mapStateToProps = (state) => ({
    quickQuoteResults: state.applicationReducer.quickQuoteResults,
});

export default connect(mapStateToProps, null)(QuickQuote);
