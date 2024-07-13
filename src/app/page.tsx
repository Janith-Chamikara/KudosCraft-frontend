import AnimationContainer from './components/AnimationContainer';
import { AccordianItems, howToDoItInstructions } from './components/Assests';
import { AuroraHero } from './components/AuroraHero';
import CustomAccordion from './components/CustomAccordian';
import StepInstruction from './components/StepInstruction';
import InfiniteScroll from './components/infiniteScroll/InfiniteScroll';

export default function Home() {
  return (
    <main className="w-[100%] mx-auto flex min-h-screen flex-col gap-[50px] items-center justify-between bg-bgColor text-text1">
      {/*Hero Section*/}
      <section id="#hero" className="w-[100%]">
        <AuroraHero
          heading="Capture and Share Your Success Stories"
          content="Collect client reviews, seamlessly manage testimonials, and easily
          embed them in various styles on your site."
          buttonText="Get started!"
        />
      </section>

      <div className="flex flex-col max-w-[1120px] gap-[50px]">
        {/*What KudosCraft offers*/}
        <section
          id="#whatIsKudosCraft"
          className="w-[100%] flex justify-center gap-[50px] flex-col min-h-screen "
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center text-text1">
            What does KudosCraft offer?
          </h1>
          <div className="w-[90%] lg:min-w-[903px] mx-auto rounded-[10px] shadow-mainShadow p-[15px] lg:p-[24px]">
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
          id="#howItWorks"
          className="w-[100%] flex gap-[50px] flex-col min-h-screen mx-auto "
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center text-text1">
            How it works
          </h1>
          <div className="flex flex-col gap-[50px]">
            {howToDoItInstructions.map((item, index) => (
              <div
                className={
                  index % 2 === 0
                    ? 'w-[90%]  p-[24px] mx-auto flex shadow-mainShadow rounded-[10px] flex-col md:flex-row justify-between items-center'
                    : 'w-[90%]  p-[24px] mx-auto flex shadow-mainShadow rounded-[10px] flex-col md:flex-row-reverse justify-between items-center'
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
          id="#testimonials"
          className="mt-[100px] w-[100%] flex gap-[50px] flex-col min-h-screen mx-auto "
        >
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center text-text1">
            What people say about us ?
          </h1>
          <div>
            <InfiniteScroll />
          </div>
        </section>
      </div>
    </main>
  );
}
