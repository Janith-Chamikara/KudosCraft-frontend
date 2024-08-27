import { CheckCircle2 } from 'lucide-react';
export default function CheckBoxItem({ text }: { text: string }) {
  return (
    <div className="flex gap-2">
      <CheckCircle2 size={18} className="my-auto text-green-400" />
      <p className="pt-0.5 text-sm">{text}</p>
    </div>
  );
}
