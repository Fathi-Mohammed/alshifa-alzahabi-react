import { Route, Routes } from 'react-router-dom';
import { ForgetPassword , SignIn , SignUp , Validation , SetNewPassword  } from '../pages';

export const AuthRoutes = () => {
  return (
    <div style={{ paddingTop: '120px' , paddingBottom: '130px' }}>
    <Routes>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/set-new-password" element={<SetNewPassword />} />
      <Route path="/validation" element={<Validation />} />
    </Routes>
    </div>
  );
};
