import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const ForgetPassword = lazy(() => import('./routes/ForgetPassword'));
const SignIn = lazy(() => import('./routes/SignIn'));
const SignUp = lazy(() => import('./routes/SignUp'));
const NewPassword = lazy(() => import('./routes/NewPassword'));
const TwoFactorAuth = lazy(() => import('./routes/TwoFactorAuth'));
const ForgetPassTwoFactorAuth = lazy(
  () => import('./routes/ForgetPassTwoFactorAuth'),
);

import styles from './styles.module.scss';

export const Auth: React.FC = () => (
  <main className={styles.registrationPage}>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/otp" element={<TwoFactorAuth />} />
        <Route path="/forget-pass-otp" element={<ForgetPassTwoFactorAuth />} />
      </Routes>
    </Suspense>
  </main>
);
