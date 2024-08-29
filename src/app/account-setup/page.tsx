import OnboardingFlow from '@/components/Onboarding';
import { authOptions } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  return <OnboardingFlow />;
}
