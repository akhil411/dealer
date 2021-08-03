import React from 'react';
import './application.scss';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import ApplicationSections from './ApplicationSections';
import { Button } from 'semantic-ui-react'

const Application = ({
    history,
}) => {
    let { path, url } = useRouteMatch();

    function handleBack() {
        history.push('/quick-quote');
    }

    function handleProceedToApp() {
        history.push(`${url}/personal`);
    }

    return (
        <div className="application-section">
            <Switch>
                <Route exact path={path}>
                    <h2>You are about to start the application process</h2>
                    <div>
                        <Button negative onClick={handleBack}>Back</Button>
                        <Button positive onClick={handleProceedToApp}>Click to Start Application</Button>
                    </div>
                </Route>
                <Route path={`${path}/:section`}>
                    <ApplicationSections history={history}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Application;
