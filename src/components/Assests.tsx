import { MainNavItem, SidebarNavItem } from '@/lib/types';

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

export const FAQs: AccordianItemType[] = [
  {
    title: 'What is KudosCraft?',
    details:
      'KudosCraft is your go-to platform for managing and showcasing client testimonials. It simplifies the process of collecting feedback, organizing it, and embedding it on your website with ease. Think of it as your digital assistant, helping you make the most out of your client reviews.',
  },
  {
    title: 'How does the AI categorization of reviews work?',
    details:
      "Our AI technology automatically sorts your reviews into positive and negative categories. This means you don't have to manually sift through feedback to find what you're looking for the AI does it for you, saving you time and ensuring you always have a clear picture of your client sentiment.",
  },
  {
    title: 'Can I customize the appearance of embedded testimonials',
    details:
      'Absolutely! With KudosCraft, you can easily customize how your testimonials look on your website. Choose from various styles and animations to match your brand’s aesthetic, making sure your feedback looks as good as it sounds.',
  },
  {
    title: 'Can I upgrade my subscription plan later?',
    details:
      'Yes, you can upgrade your subscription plan at any time. As your needs grow, simply choose a plan that fits your new requirements, and enjoy the additional features and benefits that come with it.',
  },
  {
    title: 'Is there a limit to the number of testimonials I can manage?',
    details:
      "With KudosCraft, there's no limit to the number of testimonials you can manage. Whether you have a few or a few hundred, our platform is designed to handle all your feedback seamlessly, so you can focus on what matters most your clients.",
  },
];

type mobileNavItem = {
  mainNav?: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export const mobileNavItems: mobileNavItem = {
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'KudosCraft',
          href: '#whatIsKudosCraft',
          items: [],
        },
        {
          title: 'How it works',
          href: '#howItWorks',
          items: [],
        },
        {
          title: 'Plans & Pricing',
          href: '#pricing',
          items: [],
        },
      ],
    },
    {
      title: 'About',
      items: [
        {
          title: 'Client feedbacks',
          href: '#testimonials',
          items: [],
        },
        {
          title: 'Contact Us',
          href: '/docs/components/alert',
          items: [],
        },
        {
          title: 'About the creator',
          href: '#footer',
          items: [],
        },
      ],
    },
    {
      title: 'FAQs',
      href: '#FAQs',
      items: [],
    },
  ],
};
