import GymFamily from "../../assets/images/hero.jpg";
import { IconArrowBadgeDownFilled } from "@tabler/icons-react";
export default function Hero() {
  return (
    <section className="min-h-screen">
      <img
        className="w-full h-full absolute left-0 right-0 object-cover"
        src={GymFamily}       
      ></img>
      <div className="container mx-auto flex items-center justify-between h-screen relative z-10 max-w-screen-xl sm:py-16 lg:px-6">
        <div className="p-8 md:p-0 absolute bottom-1/3 sm:relative">
          <h1 className="w-0 md:w-full md:m-6 lg:max-w-2xl mb-8 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-slate-100">
          Treino Personalizado
          </h1>
          
          <a
            href="#secondVideo"
            className="hover:animate-bounce inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Saiba mais
            <IconArrowBadgeDownFilled />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-eerie-black rounded-lg hover:bg-eerie-black focus:ring-4 text-white  focus:ring-eerie-black"
          >
            Fale Conosco
          </a>
          <div></div>
        </div>
      </div>
    </section>
  );
}
