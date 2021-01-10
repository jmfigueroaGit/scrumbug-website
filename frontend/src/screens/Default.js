import React, { useEffect } from 'react';
import {  Redirect, useHistory } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import Loader from '../components/Loader';

const Default = () => {
    const history = useHistory();


    const userLogin = useSelector((state) => state.userLogin);
    const { loading,  userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            if (userInfo.isAdmin) {
                history.push('/admin');
            } else {
                history.push('/home');
            }
        }
    }, [history, userInfo]);

    return (
        <div>
            {loading && <Loader>Loading</Loader>}
            {userInfo ? (
                <div>
                    {userInfo.isAdmin ? (
                        <Redirect to='/admin'></Redirect>
                    ) : (
                        <Redirect to='/home'></Redirect>
                    )}
                </div>
            ) : (
                <Redirect to='/login'></Redirect>
            )}
        </div>
    );
};

export default Default;
