import Image from "next/image";
import { Mainbutton } from "./Mainbutton";
import MaxWidthWrapper from "./MaxWithWrapper";

const array = [
  {
    image: "/svg/13.svg",
    date: "12 Nov. 2023",
    label1: "Formation à la conception et à l'architecture",
    label2:
      "Les designers et les architectes apprennent en combinant l'éducation formelle, l'expérience pratique et la formation professionnelle continue. ",
  },
  {
    image: "/svg/14.svg",
    date: "01 Nov. 2023",
    label1: "Conception d'espaces publics",
    label2:
      "Public space design focuses on creating functional, safe, and visually appealing areas that foster social connections, community involvement, and a strong sense of place.",
  },
];

export const Blog = () => {
  return (
    <div className="flex flex-col gap-20">
      <MaxWidthWrapper className="mt-20 gap-20 flex flex-col">
        <div className="w-full flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:justify-start gap-5">
          <h2 className="text-3xl font-bold">Blog</h2>
          <Mainbutton>Tout afficher</Mainbutton>
        </div>
        <div className="flex items-center w-full justify-center max-md:flex-col">
          {array.map((item, index) => (
            <div
              key={index}
              className={`w-full max-w-96 border p-5 space-y-2 ${
                index === 0 ? "md:border-r-0 max-md:border-b-0" : ""
              }`}
            >
              <Image
                width={500}
                height={500}
                src={item.image}
                alt={`image ${index + 1}`}
              />
              <div className="flex flex-col gap-1">
                <p className="text-muted-foreground">{item.date}</p>
                <p className="font-bold">{item.label1}</p>
                <p>{item.label2}</p>
                <div className="flex justify-start items-start">
                  <Mainbutton>Afficher</Mainbutton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
