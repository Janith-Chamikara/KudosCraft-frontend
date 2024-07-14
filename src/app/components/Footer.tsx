import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="mt-[100px] w-full bg-bgColor py-[50px] md:py-[100px] text-text1 flex flex-col text-center items-center border-t-4 justify-center p-[20px]">
      <div className="flex flex-col mx-auto gap-[20px]">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          Wanna be a part of this project?
        </h1>
        <p className="text-sm">
          This is an fully opensource project started by{' '}
          <a href="https://www.linkedin.com/in/janith-chamikara">
            Janith Chamikara
          </a>
          . If you want to contribute visit below link and follow instructions
        </p>
        <Button className="bg-[#141241] mx-auto max-w-[200px]">
          Contribute
        </Button>
        <div className="mx-auto border-b-4 w-[80%]" />
      </div>
      <div className="w-[80%] flex flex-col md:flex-row justify-center items-center md:justify-between">
        <Link href="">
          <Icons.logo className="h-[150px]" />
        </Link>

        <div className="flex items-center flex-row gap-[10px]">
          <a href="https://github.com/Janith-Chamikara/KudosCraft">
            <GithubIcon className="w-[20px] h-[20px]" />
          </a>
          <a href="https://www.linkedin.com/in/janith-chamikara">
            <LinkedinIcon className="w-[20px] h-[20px]" />
          </a>
        </div>
      </div>
      <p className="mt-[10px] md:mt-0 md:order-2 text-[10px]">
        © 2024 Janith Chamikara . All Rights Reserved.
      </p>
    </div>
  );
}
