'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import Confetti from 'react-confetti';
import SubmitButton from './submit-button';
import { useRouter } from 'next/navigation';
import { useForm, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { AccountSetupFormInputs } from '@/lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { accountSetupSchema } from '@/schemas/schema';
import FormField from './FormField';
import { setupAccountDetails } from '@/lib/actions';
import toast from 'react-hot-toast';

interface StepProps {
  register: UseFormRegister<AccountSetupFormInputs>;
  setValue: UseFormSetValue<AccountSetupFormInputs>;
  onNext: () => void;
  onPrevious: () => void;
  accountType: 'personal' | 'company';
  setAccountType: (type: 'personal' | 'company') => void;
}

interface Step {
  title: string;
  description: string;
  content: React.FC<StepProps>;
}

const steps: Step[] = [
  {
    title: 'Welcome to Kudos Craft',
    description: "Let's set up your account in a few easy steps.",
    content: ({ onNext, setAccountType, setValue }) => (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          We're excited to help you harness the power of testimonials. First,
          let's determine how you'll be using Kudos Craft.
        </p>
        <RadioGroup
          onValueChange={(value) => {
            console.log(value);
            setAccountType(value as 'personal' | 'company');
            setValue('usage', value);
          }}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="personal" id="personal" />
            <Label htmlFor="personal">Personal Use</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="company" id="company" />
            <Label htmlFor="company">Company Use</Label>
          </div>
        </RadioGroup>
        <Button onClick={onNext}>Let's Get Started</Button>
      </div>
    ),
  },
  {
    title: 'Tell us about yourself',
    description: 'This helps us tailor your experience.',
    content: ({ onNext, onPrevious, accountType, register, setValue }) => (
      <div className="space-y-4">
        {accountType === 'company' && (
          <div className="space-y-2">
            <Label htmlFor="name">Company Name</Label>
            <FormField
              register={register}
              name={'companyName'}
              placeholder={'Enter your company name'}
            />
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="field">
            {accountType === 'personal' ? 'Field of Expertise' : 'Industry'}
          </Label>
          <FormField
            register={register}
            name={accountType === 'personal' ? 'jobField' : 'industryType'}
            placeholder={
              accountType === 'personal'
                ? 'e.g., Freelance Designer, Consultant'
                : 'e.g., Technology, Retail, Healthcare'
            }
          />
        </div>
        {accountType === 'company' && (
          <div className="space-y-2">
            <Label htmlFor="company-size">Company Size</Label>
            <RadioGroup
              defaultValue="1-10"
              onValueChange={(value) => setValue('numberOfEmployees', value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="1-10" id="1-10" />
                <Label htmlFor="1-10">1-10 employees</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="11-50" id="11-50" />
                <Label htmlFor="11-50">11-50 employees</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="51+" id="51+" />
                <Label htmlFor="51+">51+ employees</Label>
              </div>
            </RadioGroup>
          </div>
        )}
        <div className="flex justify-between">
          <Button variant="outline" onClick={onPrevious}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button onClick={onNext}>
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    ),
  },
  {
    title: 'Set up your first testimonial workspace',
    description: 'Create a workspace to manage testimonials.',
    content: ({ onNext, onPrevious, register, accountType }) => (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="campaign-name">Workspace Name</Label>
          <FormField
            register={register}
            name="workspace.name"
            placeholder={
              accountType === 'personal'
                ? 'e.g., Client Feedback Collection'
                : 'e.g., Product Launch Feedback'
            }
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="campaign-description">Description</Label>
          <Textarea
            {...register('workspace.description')}
            placeholder="Briefly describe the purpose of this workspace"
          />
        </div>
        <div className="flex justify-between">
          <Button variant="outline" onClick={onPrevious}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Back
          </Button>
          <Button type="submit">
            Finish Setup <Check className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    ),
  },
];

interface WindowSize {
  width: number;
  height: number;
}

export default function OnboardingFlow(): JSX.Element {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const router = useRouter();
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });
  const [accountType, setAccountType] = useState<'personal' | 'company'>(
    'personal',
  );

  const onSubmit = async (data: AccountSetupFormInputs) => {
    const response = await setupAccountDetails(data);
    if (response) {
      if (response.status === 'success') {
        toast.success(response.message);
        if (currentStep < steps.length - 1) {
          setCurrentStep((prev) => prev + 1);
        } else {
          setIsCompleted(true);
        }
      } else {
        toast.error(response.message);
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<AccountSetupFormInputs>({
    resolver: zodResolver(accountSetupSchema),
  });

  useEffect(() => {
    setValue('usage', 'personal');
  }, [setValue]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      {isCompleted && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
        />
      )}
      <div className="w-full max-w-2xl bg-card p-8 rounded-lg shadow-lg">
        {isCompleted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Congratulations!</h2>
            <p className="text-xl mb-6">
              You've successfully set up your Kudos Craft account.
            </p>
            <SubmitButton onClick={() => router.push('/dashboard')}>
              Go to dashboard
            </SubmitButton>
          </motion.div>
        ) : (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">
                {steps[currentStep].title}
              </h2>
              <p className="text-muted-foreground">
                {steps[currentStep].description}
              </p>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  {steps[currentStep].content({
                    register: register,
                    setValue: setValue,
                    onNext: handleNext,
                    onPrevious: handlePrevious,
                    accountType,
                    setAccountType,
                  })}
                </form>
              </motion.div>
            </AnimatePresence>
            <div className="mt-8 flex justify-between items-center">
              <div className="flex space-x-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full ${
                      index === currentStep ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Step {currentStep + 1} of {steps.length}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
