import { AuroraHero } from './components/AuroraHero';
import Navigation from './components/Navigation';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[var(--primary)] w-[100%]">
      {/*Hero Section*/}
        <AuroraHero
          heading="Capture and Share Your Success Stories"
          content="Collect client reviews, seamlessly manage testimonials, and easily
          embed them in various styles on your site."
          buttonText="Get started!"
        />
    </main>
  );
}
