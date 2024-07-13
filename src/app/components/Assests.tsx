type AccordianItemType = {
  title: string;
  details: string;
};

export const AccordianItems: AccordianItemType[] = [
  {
    title: 'Effortless Feedback Collection and Management',
    details:
      'Easily collect and manage client feedback with our intuitive platform, making the entire process a breeze from start to finish',
  },
  {
    title: 'Centralized Feedback Management and Oversight',
    details:
      'Keep all your testimonials organized in one place, so you can easily access and manage client feedback whenever you need it.',
  },
  {
    title: 'Flexible Testimonial Embedding and Customization',
    details:
      "Embed and customize testimonials on your website with ease, using various styles and animations to perfectly fit your brand's look and feel.",
  },
];

export const animationDataPaths: string[] = [
  'https://lottie.host/39bd868b-32bb-412e-ba94-4e92b4227376/2SnNtTfffJ.lottie',
  'https://lottie.host/c29359c0-b69d-4eef-8d58-fea2b7d2c6b5/IVjybNlpEi.lottie',
  'https://lottie.host/4cbf9999-7a88-43ed-8e71-39d403ca1103/9bdMIKWn2i.lottie',
  'https://lottie.host/d77903cc-9df7-4bc9-99f3-882f23f7231d/Yy6n0SwzhM.lottie',
];

type howToDoItInstrunction = {
  stepNo: number;
  title: string;
  description: string;
  animationLink: string;
};

export const howToDoItInstructions: howToDoItInstrunction[] = [
  {
    stepNo: 1,
    title: 'Create Your Workspace',
    description:
      'Set up your personalized workspace on KudosCraft. Share a unique link with your clients, inviting them to provide reviews directly to your workspace.',
    animationLink:
      'https://lottie.host/c29359c0-b69d-4eef-8d58-fea2b7d2c6b5/IVjybNlpEi.lottie',
  },
  {
    stepNo: 2,
    title: 'Separate Positive and Negative Reviews',
    description:
      'KudosCraft categorizes reviews as positive or negative,giving you an easy visual overview of client feedback.',
    animationLink:
      'https://lottie.host/8c87d10b-7d17-47fb-9a40-4bd6f50258f9/KXAcomVndk.lottie',
  },
  {
    stepNo: 3,
    title: 'Embed Testimonials',
    description:
      'Copy the provided script tag with different CSS animations and embed testimonials seamlessly into your portfolio or website.',
    animationLink:
      'https://lottie.host/d77903cc-9df7-4bc9-99f3-882f23f7231d/Yy6n0SwzhM.lottie',
  },
];
