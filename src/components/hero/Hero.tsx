import GymVideo from "../../assets/videos/148208.mp4";
import { IconArrowBadgeDownFilled } from "@tabler/icons-react";
export default function Hero() {
  return (
    <section className="min-h-screen">
      <video
        className="w-full h-full absolute left-0 right-0 object-cover"
        src={GymVideo}
        autoPlay
        muted
        loop
      ></video>
      <div className="container mx-auto flex items-center justify-between h-screen relative z-10 max-w-screen-xl sm:py-16 lg:px-6">
        <div className="p-8 md:p-0">
          <h1 className="md:m-6 lg:max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Venha fazer parte da Revolução do Bem-Estar
          </h1>
          <p className="max-w-2xl m-4 md:mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl text-white">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
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
