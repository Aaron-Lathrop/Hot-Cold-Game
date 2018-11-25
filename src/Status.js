import React from 'react';
import './Status.css';

export default function Status(props) {
    return (
        <div className="status">
            <h2><span className="feedback">{props.status}</span></h2>
        </div>
    );
}