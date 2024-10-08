import Image from "next/image";
import { Mainbutton } from "./Mainbutton";
import MaxWidthWrapper from "./MaxWithWrapper";

const array = ["Architecture", "Paysage", "Intérieur", "Design"];

export const Services = () => {
  return (
    <div className="flex flex-col gap-20">
      <MaxWidthWrapper className="mt-20 gap-20 flex flex-col">
        <div className="w-full flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:justify-start gap-5">
          <h2 className="text-3xl font-bold">Services</h2>
          <Mainbutton>Tout découvrir</Mainbutton>
        </div>
        <div className="flex items-center w-full justify-between gap-20 max-lg:flex-col">
          <div className="flex flex-col items-center justify-center gap-5 w-full">
            <p className="text-[250px] font-bold text-secondary leading-[250px]">
              3
            </p>
            <p className="max-w-96 text-4xl font-bold text-center mx-10 max-lg:text-2xl max-md:text-xl max-sm:mx-10">
              bureaux dans le monde entier.
            </p>
          </div>
          <div className="flex items-center gap-20 max-lg:gap-14">
            <div className="flex flex-col items-start gap-20">
              {array.map((item, index) => (
                <p
                  className="cursor-pointer border-b border-transparent hover:border-foreground transition-all"
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              <div className="relative w-full" style={{ height: "auto" }}>
                <Image
                  layout="responsive"
                  width={100}
                  height={100}
                  src={`/svg/4.svg`}
                  alt={`image 4`}
                />
              </div>
              <p>
                Au cœur de tout ce que nous faisons se trouve l'expérience
                humaine de ressentir. D'aimer. De l'image. De s'émerveiller. De
                guider. De plaisanter. Régner. Servir. Appartenir.
              </p>
              <div className="flex items-start">
                <Mainbutton>Contacter nous</Mainbutton>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="md:mx-10 mx-3 h-[1px] bg-primary"></div>
    </div>
  );
};
