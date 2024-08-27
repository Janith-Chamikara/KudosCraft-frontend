'use client';

import { useState } from 'react';
import PricingCard from './PricingCard';
import PricingSwitch from './PricingSwitch';
import { pricePlans } from './pricePlans';

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const togglePricingPeriod = (value: string) =>
    setIsYearly(parseInt(value) === 1);
  return (
    <div className="py-2">
      <PricingSwitch onSwitch={togglePricingPeriod} />
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
        {pricePlans.map((plan) => {
          return <PricingCard key={plan.title} {...plan} isYearly={isYearly} />;
        })}
      </section>
    </div>
  );
}
