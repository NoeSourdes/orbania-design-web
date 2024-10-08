import { Mainbutton } from "@/components/Mainbutton";
import MaxWidthWrapper from "@/components/MaxWithWrapper";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export const HeroSection = () => {
  return (
    <div className="flex flex-col gap-20 h-full">
      <MaxWidthWrapper className="relative pt-36">
        <div className="relative size-full flex flex-col items-center gap-10">
          <div className="flex items-center gap-1 w-full justify-center">
            <p className="text-center">Depuis 2000</p>
            <div className="w-3 h-[1px] bg-foreground"></div>
          </div>
          <div className="md:absolute md:top-14 md:left-0 flex items-start justify-between w-full z-20 max-md:flex-col max-md:items-center gap-10">
            <h1 className="text-[5rem] max-lg:text-[4rem] leading-tight font-bold max-md:text-center max-md:text-6xl">
              Architecture. <br />
              Planifier. <br />
              Design.
            </h1>
            <div className="flex flex-col items-end max-md:items-center gap-10">
              <Mainbutton>Contacter nous</Mainbutton>
              <div className="flex items-center gap-5">
                <FaInstagram size={25} className="cursor-pointer" />
                <FaXTwitter size={25} className="cursor-pointer" />
                <FaLinkedin size={25} className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="relative w-full h-[500px] max-md:h-[150px] bg-[#F8F8F8] mt-28 z-10 max-md:mt-48 max-sm:mt-20">
            <Image
              src="/svg/Hero Image.svg"
              alt="image hero section"
              width={1200}
              height={1000}
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
            />
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="md:mx-10 mx-3 h-[1px] bg-primary"></div>
    </div>
  );
};
