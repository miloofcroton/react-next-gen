import React from 'react';
import Login from 'services/auth/components/Login';
import MainLayout from 'style/layouts/Main';

const LoginPage = () => {
  return (
    <MainLayout>
      <Login />
    </MainLayout>
  );
};

export default LoginPage;
