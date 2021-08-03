import React from 'react';

const Loader = ({ status }) => {
    const active = (status == true) ? 'active' : '';

    return (
        <div className={`ui page dimmer ${active}`}>
            <div className="ui text loader">Loading ...</div>
        </div>    
    )
}

export default Loader;
