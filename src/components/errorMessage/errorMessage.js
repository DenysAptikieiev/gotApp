import React from 'react';
import img from './error.jfif';
import './errorMessage.css';

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt="error"/>
            <span>Something goes wrong</span>
        </>
    )
}

export default ErrorMessage;