import AnimationContainer from '@/components/AnimationContainer';
import {
  AccordianItems,
  howToDoItInstructions,
  FAQs,
} from '@/components/Assests';
import CustomAccordion from '@components/CustomAccordian';
import Footer from '@components/Footer';
import StepInstruction from '@components/StepInstruction';
import InfiniteScroll from '@components/infiniteScroll/InfiniteScroll';
import PricingSection from '@components/pricing/PricingSection';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <div className="grid min-h-[100dvh] bg-background grid-rows-[auto_1fr_auto]">
      <main className="w-[100%] max-w-4xl mx-auto flex min-h-screen flex-col gap-[50px] items-center justify-between">
        {/*Hero Section*/}
        <HeroSection />
        <div className="flex flex-col  gap-[50px]">
          {/*What KudosCraft offers*/}
          <section
            id="whatIsKudosCraft"
            className="w-[100%] flex justify-center gap-[50px] flex-col min-h-screen "
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              What does KudosCraft offer?
            </h1>
            <div className="w-[90%] lg:min-w-[903px] mx-auto rounded-[10px] border shadow-lg p-[15px] lg:p-[24px]">
              {AccordianItems.map((item, index) => (
                <CustomAccordion
                  id={`${index + 1}`}
                  key={item.title}
                  title={item.title}
                  details={item.details}
                />
              ))}
            </div>
          </section>
          {/*How it works section*/}
          <section
            id="howItWorks"
            className="w-[100%] flex gap-[50px] flex-col min-h-screen mx-auto "
          >
            <h1 className="text-4xl text-center font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              How it works
            </h1>
            <div className="flex flex-col gap-[50px]">
              {howToDoItInstructions.map((item, index) => (
                <div
                  className={
                    index % 2 === 0
                      ? 'w-[90%]  p-[24px] mx-auto flex border shadow-lg rounded-[10px] flex-col md:flex-row justify-between items-center'
                      : 'w-[90%]  p-[24px] mx-auto flex border shadow-lg rounded-[10px] flex-col md:flex-row-reverse justify-between items-center'
                  }
                  key={index}
                >
                  <div className="flex-1">
                    <StepInstruction
                      stepNo={item.stepNo}
                      title={item.title}
                      description={item.description}
                    />
                  </div>
                  <div className="flex-1">
                    <AnimationContainer src={item.animationLink} />
                  </div>
                </div>
              ))}
            </div>
          </section>
          {/*Testimonials*/}
          <section
            id="testimonials"
            className="mt-[100px] !max-w-full !w-[100%] flex gap-[50px] flex-col min-h-screen mx-auto "
          >
            <h1 className="text-4xl font-bold text-center tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              What people say about us ?
            </h1>
            <div>
              <InfiniteScroll />
            </div>
          </section>
          {/*Pricing*/}
          <section
            id="pricing"
            className="w-[100%] flex gap-[50px] flex-col min-h-screen mx-auto "
          >
            <h1 className="text-4xl text-center font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Choose your plan
            </h1>
            <div>
              <PricingSection />
            </div>
          </section>
          {/*FAQ*/}
          <section
            id="FAQs"
            className="w-[100%] flex justify-center gap-[50px] flex-col min-h-screen "
          >
            <h1 className="text-4xl text-center font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Frequently asked questions
            </h1>
            <div className="w-[90%] lg:min-w-[903px] mx-auto rounded-[10px] shadow-lg p-[15px] lg:p-[24px]">
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
        </div>
      </main>
      {/*Footer*/}
      <section id="footer" className="bg-background">
        <Footer />
      </section>
    </div>
  );
}
