import AnimationContainer from '@/components/AnimationContainer';
import {
  AccordianItems,
  howToDoItInstructions,
  FAQs,
} from '@/components/Assests';
import CustomAccordion from '@components/CustomAccordian';
import StepInstruction from '@components/StepInstruction';
import InfiniteScroll from '@components/infiniteScroll/InfiniteScroll';
import PricingSection from '@components/pricing/PricingSection';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />

        <section id="howItWorks" className="py-16 sm:py-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-12 text-center">
            How it works
          </h2>
          <div className="space-y-12 sm:space-y-16">
            {howToDoItInstructions.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8 p-6 border rounded-lg shadow-lg`}
              >
                <div className="flex-1 w-full md:w-1/2">
                  <StepInstruction
                    stepNo={item.stepNo}
                    title={item.title}
                    description={item.description}
                  />
                </div>
                <div className="flex-1 w-full mx-auto md:w-1/2">
                  <AnimationContainer src={item.animationLink} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="py-16 sm:py-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-12 text-center">
            Choose your plan
          </h2>
          <PricingSection />
        </section>

        <section id="FAQs" className="py-16 sm:py-24">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-12 text-center">
            Frequently asked questions
          </h2>
          <div className="w-full max-w-4xl mx-auto rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
            {FAQs.map((item, index) => (
              <CustomAccordion
                id={`${index + 1}`}
                key={item.title}
                title={item.title}
                details={item.details}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
