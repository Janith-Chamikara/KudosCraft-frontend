import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

type PricingSwitchProps = {
  // eslint-disable-next-line no-unused-vars
  onSwitch: (value: string) => void;
};
export default function PricingSwitch({ onSwitch }: PricingSwitchProps) {
  return (
    <Tabs defaultValue="0" className="w-40 mx-auto" onValueChange={onSwitch}>
      <TabsList className="py-6 px-2 bg-transparent border rounded-lg">
        <TabsTrigger value="0">Monthly</TabsTrigger>
        <TabsTrigger value="1">Yearly</TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
