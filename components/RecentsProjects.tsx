import { Mainbutton } from "./Mainbutton";
import MaxWidthWrapper from "./MaxWithWrapper";

export const RecentsProjects = () => {
  const colSpans = [
    {
      index: 0,
      span: 6,
      image: "/img/1.jpeg",
      label1: "Bâtiment de cours de l'UVU",
      label2: "Omer, UT",
    },
    {
      index: 1,
      span: 2,
      image: "/svg/6.svg",
      label1: "Projet 2",
      label2: "Lieu 2",
    },
    {
      index: 2,
      span: 4,
      image: "/img/6.jpg",
      label1: "Projet 3",
      label2: "Lieu 3",
    },
    {
      index: 3,
      span: 4,
      image: "/img/7.jpg",
      label1: "Projet 4",
      label2: "Lieu 4",
    },
    {
      index: 4,
      span: 2,
      image: "/img/4.jpg",
      label1: "Projet 5",
      label2: "Lieu 5",
    },
    {
      index: 5,
      span: 6,
      image: "/img/2.jpeg",
      label1: "Projet 6",
      label2: "Lieu 6",
    },
    {
      index: 6,
      span: 4,
      image: "/img/8.jpg",
      label1: "Projet 7",
      label2: "Lieu 7",
    },
    {
      index: 7,
      span: 4,
      image: "/img/9.jpg",
      label1: "Projet 8",
      label2: "Lieu 8",
    },
    {
      index: 8,
      span: 6,
      image: "/img/3.png",
      label1: "Projet 9",
      label2: "Lieu 9",
    },
    {
      index: 9,
      span: 2,
      image: "/img/5.jpg",
      label1: "Projet 10",
      label2: "Lieu 10",
    },
    {
      index: 10,
      span: 4,
      image: "/img/10.jpg",
      label1: "Projet 11",
      label2: "Lieu 11",
    },
    {
      index: 11,
      span: 4,
      image: "/img/10.jpg",
      label1: "Projet 12",
      label2: "Lieu 12",
    },
  ];
  const specialClasses = [
    "border-b-0 border-r-0",
    "border-b-0",
    "border-b-0 border-r-0",
    "border-b-0",
    "border-b-0 border-r-0",
    "border-b-0",
    "border-b-0 border-r-0",
    "border-b-0",
    "border-b-0 border-r-0",
    "border-b-0",
    " border-r-0",
  ];

  return (
    <div className="flex flex-col gap-20">
      <MaxWidthWrapper className="mt-20 gap-20 flex flex-col">
        <div className="w-full flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:justify-start gap-5">
          <h2 className="text-3xl font-bold">Projets récents</h2>
          <Mainbutton>Tout découvrir</Mainbutton>
        </div>
        <div className="grid grid-cols-8 max-lg:flex max-lg:flex-col">
          {colSpans.map((colSpan, index) => (
            <div
              key={index}
              className={`h-[500px] border border-foreground max-lg:border-r overflow-hidden relative ${
                index === 11 ? "max-lg:border-t-0" : ""
              } ${specialClasses[index] || ""}`}
              style={{
                gridColumn: `span ${colSpan.span} / span ${colSpan.span}`,
              }}
            >
              {index === 3 ? (
                <div className="flex flex-col items-center justify-center absolute inset-5 border border-foreground ">
                  <p className="text-[250px] font-bold text-secondary leading-[250px]">
                    24
                  </p>
                  <p className="text-4xl font-bold text-center mx-10 max-lg:text-2xl max-md:text-xl max-sm:mx-10">
                    Années d'architecture, de planification et de conception.
                  </p>
                </div>
              ) : index === 10 ? (
                <>
                  <div className="flex flex-col items-center justify-center absolute inset-5 border border-foreground ">
                    <p className="relative text-[250px] max-sm:text-[200px] font-bold text-secondary leading-[250px]">
                      1.5
                      <span className="text-5xl absolute top-0 -right-5">
                        k
                      </span>
                    </p>
                    <p className="text-4xl font-bold text-center mx-10 max-lg:text-2xl max-md:text-xl max-sm:mx-10">
                      Avec plus de 1 500 projets réalisés{" "}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="absolute inset-5 bottom-20 bg-cover bg-center"
                    style={{ backgroundImage: `url(${colSpan.image})` }}
                  ></div>

                  <div className="absolute left-5 bottom-5">
                    <h3 className="font-bold">{colSpan.label1}</h3>
                    <p className="">{colSpan.label2}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
      <div className="md:mx-10 mx-3 h-[1px] bg-primary"></div>
    </div>
  );
};
