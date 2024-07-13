type StepInstructionProps = {
  stepNo: number;
  title: string;
  description: string;
};

export default function StepInstruction({
  stepNo,
  title,
  description,
}: StepInstructionProps) {
  return (
    <div className="w-full flex flex-row justify-between items-center text-text2">
      <div className="lg:text-[20px] rounded-[200px] font-[600px] border-[3px_solid_#C1C6DE]">
        {stepNo}
      </div>
      <div className="flex flex-col justify-between items-center">
        <p className="lg:text-[20px] font-[600px]">{title}</p>
        <p className="lg:text-[14px] font-[400px]">{description}</p>
      </div>
    </div>
  );
}
