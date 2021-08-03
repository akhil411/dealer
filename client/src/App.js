import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home/Home';
import PageNotFound from './pages/pageNotFound/PageNotFound';
import Header from "./components/header/Header";
import Questionnaire from './pages/questionnaire/Questionnaire';
import EmailCustomer from "./pages/emailCustomer/EmailCustomer";
import Application from './pages/application/Application';
import QuickQuote from './pages/quickQuote/QuickQuote';
import { connect } from 'react-redux';
import Loader from './components/loader/Loader';
import { ToastContainer } from 'react-toastify';
import { setAuthenticated, removeAuthenticated } from "./redux/actions/userAction";
import { setQuestionAnswers } from "./redux/actions/applicationActions";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import './App.scss';

const App = ({
    setAuthenticated,
    isLoading,
    removeAuthenticated,
    setQuestionAnswers,
}) => {
    useEffect(() => {
        if (localStorage.validatedToken) {
            const token = localStorage.validatedToken;
            const decoded = jwt_decode(token);
            const currentTime = Date.now() / 1000; // to get in milliseconds

            if (decoded.exp < currentTime) {
                setAuthToken();
                removeAuthenticated();
            } else {
                setAuthToken(token);
                setAuthenticated(decoded);
            }
        } else {
            setAuthToken();
            removeAuthenticated();
        }

        if (localStorage.questionAndAnswer) {
            let savedResponse = JSON.parse(localStorage.questionAndAnswer);
            setQuestionAnswers(savedResponse);
        }

    }, []);

    return (
        <Router>
            <Loader status={isLoading}/>
            <Header />
            <div className="pageWrapper">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/code/:code" component={Home} />
                    <Route exact path="/questionnaire" component={Questionnaire} />
                    <Route exact path="/email" component={EmailCustomer} />
                    <Route exact path="/quick-quote" component={QuickQuote} />
                    <Route path="/application" component={Application} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover
            />
        </Router>
    );
}

const mapDispatchToProps = {
    setAuthenticated,
    removeAuthenticated,
    setQuestionAnswers,
};

const mapStateToProps = (state) => ({
    isLoading: state.loaderReducer.isLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
