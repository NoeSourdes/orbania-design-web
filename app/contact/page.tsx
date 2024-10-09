import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Conatact() {
  return (
    <div>
      <Header />
      <Contact />
      <Footer conatact={true} />
    </div>
  );
}
