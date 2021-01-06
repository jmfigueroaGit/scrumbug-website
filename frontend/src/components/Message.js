import React from 'react';
import { Alert } from 'react-bootstrap';
const Message = ({ children }) => {
    return (
        <Alert
            className='ml-4 message-alert'
            style={{
                background: '#F8D7DA',
                textAlign: 'center',
            }}
        >
            <span
                style={{
                    color: '#721C24',
                }}
            >
                {children}
            </span>
        </Alert>
    );
};

Message.defaultProps = {
    variant: 'info',
};

export default Message;
