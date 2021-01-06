import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Loader = ({ children }) => {
    return (
        <div className='bg-loader'>
            <Button disabled className='button-spinner'>
                <Spinner
                    as='span'
                    animation='border'
                    size='sm'
                    role='status'
                    aria-hidden='true'
                />
                <span> {children}</span>
            </Button>{' '}
        </div>
    );
};

export default Loader;
