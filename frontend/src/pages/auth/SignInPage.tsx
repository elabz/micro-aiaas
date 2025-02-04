import { SignIn } from '@clerk/clerk-react';
import { Layout } from '../../components/layout/Layout';

export default function SignInPage() {
  return (
    <Layout>
      <SignIn path="/sign-in" routing="path" />
    </Layout>
  );
}