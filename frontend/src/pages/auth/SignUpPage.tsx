import { FC } from 'react';
import { SignUp } from '@clerk/clerk-react';
import { Layout } from '../../components/layout/Layout';

export const SignUpPage: FC = () => {
  return (
    <Layout>
      <SignUp path="/sign-up" routing="path" />
    </Layout>
  );
};

export default SignUpPage;