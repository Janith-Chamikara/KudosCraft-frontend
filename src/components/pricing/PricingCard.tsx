import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import CheckBoxItem from './CheckBoxItem';

type PricingCardProps = {
  isYearly?: boolean;
  title: string;
  monthlyPrice?: number;
  yearlyPrice?: number;
  description: string;
  features: string[];
  actionLabel: string;
  popular?: boolean;
  disabled?: boolean;
};

export default function PricingCard({
  isYearly,
  title,
  monthlyPrice,
  yearlyPrice,
  description,
  features,
  actionLabel,
  popular,
  disabled,
}: PricingCardProps) {
  return (
    <Card
      className={`w-72 bg-bgColor border shadow-lg text-text1 flex flex-col justify-between py-1 ${popular && 'border-rose-400'} mx-auto sm:mx-0`}
    >
      <div>
        <CardHeader className="pb-8 pt-4">
          {isYearly && yearlyPrice && monthlyPrice ? (
            <div className="flex justify-between">
              <CardTitle className=" text-lg">{title}</CardTitle>
              <div
                className={cn(
                  'px-2.5 rounded-xl h-fit text-sm py-1 bg-zinc-200 text-bgColor',
                  {
                    'bg-gradient-to-r from-orange-400 to-rose-400 text-bgColor  ':
                      popular,
                  },
                )}
              >
                Save ${monthlyPrice * 12 - yearlyPrice}
              </div>
            </div>
          ) : (
            <CardTitle className="text-lg">{title}</CardTitle>
          )}
          <div className="flex gap-0.5">
            <h3 className="text-3xl font-bold">
              {yearlyPrice && isYearly
                ? '$' + yearlyPrice
                : (monthlyPrice as number) >= 0
                  ? '$' + monthlyPrice
                  : 'Custom'}
            </h3>
            <span className="flex flex-col justify-end text-sm mb-1">
              {yearlyPrice && isYearly
                ? '/year'
                : (monthlyPrice as number) >= 0
                  ? '/month'
                  : null}
            </span>
          </div>
          <CardDescription className="text-text1 pt-1.5 h-12">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {features.map((feature: string) => (
            <CheckBoxItem key={feature} text={feature} />
          ))}
        </CardContent>
      </div>
      <CardFooter className="mt-2">
        <Button
          disabled={disabled}
          className="relative inline-flex w-full items-center justify-center rounded-md font-medium transition-colors"
        >
          {actionLabel}
        </Button>
      </CardFooter>
    </Card>
  );
}
