import { Mainbutton } from "./Mainbutton";
import { Input } from "./ui/input";

export const Contact = () => {
  return (
    <>
      <div className="w-full py-60 flex items-center justify-center flex-col gap-10">
        <h1 className="lg:text-4xl md:text-3xl text-xl  font-bold max-w-[500px] max-sm:max-w-[400px] text-center">
          Nous nous ferons un plaisir de vous contacter
        </h1>
        <h3 className="text-xl text-center max-w-72">
          Donnez-nous votre numéro et nous vous appellerons maintenant
        </h3>
        <div className="flex flex-col gap-5 w-full justify-center items-center">
          <Input
            className="max-w-96 rounded-none border-foreground"
            type="text"
            placeholder="Nom et prénom"
          />
          <Input
            type="email"
            placeholder="Email"
            className="max-w-96 rounded-none border-foreground"
          />
          <Mainbutton>Envoyer</Mainbutton>
        </div>
      </div>
      <div className="md:mx-10 mx-3 h-[1px] bg-primary"></div>
    </>
  );
};
