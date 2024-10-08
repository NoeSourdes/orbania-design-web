import Image from "next/image";
import { Mainbutton } from "./Mainbutton";
import MaxWidthWrapper from "./MaxWithWrapper";

const array = ["Gestion", "Architectes", "Ingénieurs", "Bâtisseurs"];
const imageArray = [
  {
    link: "/svg/7.svg",
    label1: "Jane Cooper",
    label2: "Directrice artistique",
  },
  {
    link: "/svg/8.svg",
    label1: "Cameron Williamson",
    label2: "Cadre supérieur",
  },
  {
    link: "/svg/9.svg",
    label1: "Brooklyn Simmons",
    label2: "Responsable des relations publiques",
  },
];
const imageArray2 = [
  {
    link: "/svg/10.svg",
    label1: "Jacob Jones",
    label2: "Directeur financier",
  },
  {
    link: "/svg/11.svg",
    label1: "Jerome Bell",
    label2: "Concepteur principal",
  },
  {
    link: "/svg/12.svg",
    label1: "Kristin Watson",
    label2: "Responsable RH",
  },
];

export const Team = () => {
  return (
    <div className="flex flex-col gap-20">
      <MaxWidthWrapper className="mt-20 gap-20 flex flex-col">
        <div className="w-full flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:justify-start gap-5">
          <h2 className="text-3xl font-bold">Services</h2>
          <Mainbutton>Tout afficher</Mainbutton>
        </div>
        <div className="flex flex-col gap-20">
          <p className="max-w-[50%]">
            Notre équipe d'architectes et de constructeurs experts, avec plus de
            24 ans d'expérience combinée, donnera vie à votre vision.
            Faites-nous confiance pour vous fournir des structures
            fonctionnelles et esthétiques qui dépassent vos attentes.
          </p>
          <div className="flex items-center justify-between gap-20 w-full">
            <div className="flex flex-col gap-20 justify-start items-start">
              {array.map((item, index) => (
                <p
                  className="cursor-pointer border-b border-transparent hover:border-foreground transition-all"
                  key={index}
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="flex flex-col w-full">
              <div className="flex items-center w-full border max-md:flex-col">
                {imageArray.map((item, index) => (
                  <div
                    key={index}
                    className={`relative flex flex-col items-center justify-center gap-5 w-full py-5 px-5 ${
                      index === 2 ? "" : "border-r"
                    } `}
                    style={{ height: "auto" }}
                  >
                    <Image
                      src={item.link}
                      alt="image team"
                      width={350}
                      height={350}
                    />
                    <div className="flex w-full flex-col">
                      <p className="font-bold">{item.label1}</p>
                      <p className="">{item.label2}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center w-full border border-t-0 max-md:flex-col">
                {imageArray2.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center justify-center gap-5 w-full py-5 ${
                      index === 2 ? "" : "border-r"
                    }`}
                  >
                    <Image
                      src={item.link}
                      alt="image team"
                      width={350}
                      height={350}
                    />
                    <div className="flex w-full flex-col px-5">
                      <p className="font-bold">{item.label1}</p>
                      <p className="">{item.label2}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="md:mx-10 mx-3 h-[1px] bg-primary"></div>
    </div>
  );
};
