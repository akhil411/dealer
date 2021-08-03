import React from 'react';
import PageNotFound from './../pageNotFound/PageNotFound';
import { useParams } from "react-router-dom";
import Residential from '../../components/residential/Residential';
import Employment from '../../components/employment/Employment';
import Financial from '../../components/financial/Financial';
import Documents from '../../components/documents/Documents';
import Personal from '../../components/personal/Personal';

const ApplicationSections = ({history}) => {
    let { section } = useParams();
console.log(section);
    if (section == 'residential') {
        return <Residential history={history}/>
    } else if (section == 'employment') {
        return <Employment history={history}/>
    } else if (section == 'financial') {
        console.log('am here');
        return <Financial history={history}/>
    } else if (section == 'documents') {
        return <Documents history={history}/>
    } else if (section == 'personal') {
        return <Personal history={history}/>
    } else {
        return <PageNotFound />
    }
}

export default ApplicationSections;
