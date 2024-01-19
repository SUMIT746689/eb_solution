import React from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import Layout from '../components/Layout/Layout';
import { useSelector } from 'react-redux';

const PrivateRoutes = () => {
    // const { data, isLoading, error } = useAuthUserQuery();
    // @ts-ignore
    const { loading, userInfo, error, success } = useSelector((state) => state.authUser)

    return (
        !loading && (success ? <Layout><Outlet /></Layout> : < Navigate to="/login" />)
    )
}

export default PrivateRoutes