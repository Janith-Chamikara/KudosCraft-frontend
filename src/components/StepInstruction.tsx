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
    <div className="w-full flex flex-row gap-[10px] justify-center md:justify-between text-text1">
      <div className="lg:text-[20px] font-extrabold">
        <p className="px-[10px] rounded-full border-solid border-[3px] border-[text1]">
          {stepNo}
        </p>
      </div>
      <div className="flex flex-col justify-between ">
        <p className="font-extrabold text-left lg:text-[20px] font-bolder">
          {title}
        </p>
        <p className="text-justify lg:text-[14px] font-[400px]">
          {description}
        </p>
      </div>
    </div>
  );
}
