import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWithWrapper";
import { Label } from "./ui/label";

const menu_Link = [
  {
    index: 0,
    label: "À propos",
    link: "/about",
  },
  {
    index: 1,
    label: "Services",
    link: "/services",
  },
  {
    index: 2,
    label: "Projets",
    link: "/projects",
  },
  {
    index: 3,
    label: "Équipe",
    link: "/team",
  },
  {
    index: 4,
    label: "Blog",
    link: "/blog",
  },
];

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 max-h-24 w-full z-[1000000]">
      <MaxWidthWrapper className="size-full flex justify-between items-center py-5 bg-background">
        <Link href="/">
          <div className="flex items-center gap-3">
            <Image
              src="/svg/logo.svg"
              alt="logo Orbania Design"
              height={35}
              width={35}
            />
            <h1 className="text-2xl font-black">Orbania Design</h1>
          </div>
        </Link>
        <div className="items-center gap-5 md:flex hidden">
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
        <Sheet>
          <SheetTrigger asChild>
            <button className="flex flex-col gap-2 group md:hidden">
              <div className="w-7 h-[1px] bg-foreground group-hover:-translate-y-0.5 transition-all"></div>
              <div className="w-7 h-[1px] bg-foreground"></div>
              <div className="w-7 h-[1px] bg-foreground group-hover:translate-y-0.5 transition-all"></div>
            </button>
          </SheetTrigger>
          <SheetContent className="px-0">
            <SheetHeader>
              <SheetTitle>MENU</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col justify-between h-full">
              <div className="pt-5">
                {menu_Link.map((item) => (
                  <div
                    key={item.index}
                    className="cursor-pointer flex flex-col gap-2 w-full text-start hover:bg-foreground/5 p-3 px-5 transition-all"
                  >
                    <Label className="text-xs">{item.index}</Label>
                    <div className="w-full flex items-center gap-2">
                      <p
                        className={`${item.index === 0 ? "min-w-[65px]" : ""}`}
                      >
                        {item.label}
                      </p>
                      <div className="h-[1px] w-full bg-foreground"></div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <div className="relative h-20 bg-primary flex items-center cursor-pointer hover:hover:bg-primary/90 transition-all">
                  <div className="w-full flex items-center justify-center">
                    <p className="text-lg text-background">Nous contacter</p>
                  </div>
                  <div className="w-16 h-16 bg-background mb-[3px] absolute right-1.5 top-1.5 flex items-center justify-center">
                    <ArrowUpRight size={40} />
                  </div>
                </div>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </MaxWidthWrapper>
      <div className="md:mx-10 mx-3 h-[1px] bg-primary"></div>
    </header>
  );
};
