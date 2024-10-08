"use client";

import { Blog } from "@/components/Blog";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { RecentsProjects } from "@/components/RecentsProjects";
import { Section2 } from "@/components/Section2";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <main className="space-y-5">
      <section className="">
        <Header />
        <HeroSection />
      </section>
      <Section2 />
      <Services />
      <RecentsProjects />
      <Team />
      <Blog />
      <Footer />
    </main>
  );
}
