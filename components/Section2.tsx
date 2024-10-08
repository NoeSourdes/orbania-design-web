import Image from "next/image";
import { Mainbutton } from "./Mainbutton";
import MaxWidthWrapper from "./MaxWithWrapper";

export const Section2 = () => {
  return (
    <div className="flex flex-col gap-20">
      <MaxWidthWrapper className="mt-10 flex items-center justify-center flex-col gap-10">
        <h3 className="text-3xl font-bold max-w-[550px] text-center">
          Former un amour irrationnel entre les clients et leurs bâtiments
        </h3>
        <p className="text-center">
          Notre approche commence par... <br /> Comment voulez-vous que les gens
          se sentent ?
        </p>
        <div className="flex items-center justify-between w-full gap-10 max-md:flex-col">
          {Array.from({ length: 3 }).map((y, index) => (
            <div
              key={index}
              className="relative w-full"
              style={{ height: "auto" }}
            >
              <Image
                layout="responsive"
                width={100}
                height={100}
                src={`/svg/${index + 1}.svg`}
                alt={`image ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <p className="text-center max-w-96">
          Face à l'évolution des tendances et des technologies, ARK House crée
          une architecture qui reste pertinente - sans se baser sur des
          tendances, des modes ou des dates - mais sur des vérités humaines
          intemporelles.
        </p>
        <Mainbutton>Notre histoire</Mainbutton>
      </MaxWidthWrapper>
      <div className="md:mx-10 mx-3 h-[1px] bg-primary"></div>
    </div>
  );
};
