import Link from "next/link";
import { FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Mainbutton } from "./Mainbutton";
import MaxWidthWrapper from "./MaxWithWrapper";
import { Label } from "./ui/label";

interface footerProps {
  conatact?: boolean;
}

export const Footer = ({ conatact }: footerProps) => {
  const menu_Link = [
    { index: 0, label: "À propos", link: "/about" },
    { index: 1, label: "Services", link: "/services" },
    { index: 2, label: "Projets", link: "/projects" },
    { index: 3, label: "Équipe", link: "/team" },
    { index: 4, label: "Blog", link: "/blog" },
  ];

  return (
    <>
      {conatact === false && (
        <div className="flex flex-col gap-20">
          <MaxWidthWrapper className="mt-20 gap-20 flex flex-col">
            <div className="flex flex-col sm:flex-row items-center justify-between max-sm:items-start max-sm:justify-start gap-5">
              <h2 className="text-3xl font-bold">Commencé un projet ?</h2>
              <Link href="/contact">
                <Mainbutton>Nous contacter</Mainbutton>
              </Link>
            </div>
          </MaxWidthWrapper>
          <div className="md:mx-10 mx-3 h-[1px] bg-primary"></div>
        </div>
      )}
      <div className="flex flex-col">
        <MaxWidthWrapper className="mt-20 gap-20 flex flex-col items-center w-full">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="flex flex-col gap-5 mb-10 md:mb-0">
              <h3 className="text-3xl font-bold max-w-[500px]">
                L'assistance est disponible 24 heures sur 24
              </h3>
              <div className="flex justify-start items-start">
                <Link href="/contact">
                  <Mainbutton>Nous contacter</Mainbutton>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <div className="bg-white p-6">
                <h2 className="text-lg font-bold mb-2">Nord</h2>
                <p className="font-semibold">AFL Architectes</p>
                <p>123 Rue de Lille</p>
                <p>Lille</p>
                <p>59000</p>
                <p className="mt-2">+33 (0)3 20 00 00 00</p>
              </div>
              <div className="bg-white p-6">
                <h2 className="text-lg font-bold mb-2">Centre</h2>
                <p className="font-semibold">AFL Architectes</p>
                <p>456 Avenue de la République</p>
                <p>Orléans</p>
                <p>45000</p>
                <p className="mt-2">+33 (0)2 38 00 00 00</p>
              </div>
              <div className="bg-white p-6">
                <h2 className="text-lg font-bold mb-2">Sud</h2>
                <p className="font-semibold">AFL Architectes</p>
                <p>789 Boulevard de la Liberté</p>
                <p>Marseille</p>
                <p>13000</p>
                <p className="mt-2">+33 (0)4 91 00 00 00</p>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-between mb-10">
            <div className="flex flex-wrap items-center gap-5">
              {menu_Link.map((item) => (
                <div
                  key={item.index}
                  className="cursor-pointer hover:text-primary border-b border-transparent hover:border-foreground transition-all"
                >
                  <Label className="text-xs">{item.index}</Label>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-5 mt-5 md:mt-0">
              <FaInstagram size={25} className="cursor-pointer" />
              <FaXTwitter size={25} className="cursor-pointer" />
              <FaLinkedin size={25} className="cursor-pointer" />
            </div>
          </div>
        </MaxWidthWrapper>
        <div className="md:mx-10 mx-3 h-[1px] bg-primary"></div>
      </div>
      <div className="flex flex-col gap-20">
        <MaxWidthWrapper className="my-10 gap-20 flex flex-col text-muted-foreground">
          <div className="flex items-center justify-between w-full max-md:flex-col">
            <p>© {new Date().getFullYear()} Tous les droits réservés.</p>
            <p>Terme et conditions | Politique de confidentialité</p>
          </div>
        </MaxWidthWrapper>
      </div>
    </>
  );
};
