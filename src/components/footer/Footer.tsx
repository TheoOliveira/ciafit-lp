import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconMapPin,
} from "@tabler/icons-react";
import Logo from "../../assets/images/Logo-ciafit-cinza.png";

export default function Footer() {
  return (
    <div className="bg-jet">
    <footer className="bg-jet mx-auto py-12">
      <div className="container mx-auto max-w-screen-xl px-6">
        <div className="mt-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 content-center justify-center">
          <div className="flex flex-start gap-6">
            <div>
              <div className="flex gap-2 pb-6">
                <IconMapPin color="red" size={40} />
                <div className="text-white">
                  <h3 className="font-black">Espinheiro</h3>
                  <p>Rua Santos Elias, 67, Espinheiro</p>
                </div>
              </div>
              <div className="flex gap-2">
                <IconMapPin color="red" size={40} />
                <div className="text-white">
                  <h3 className="font-black">Caxangá</h3>
                  <p>Av. do Forte, 477, Cordeiro</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-start gap-6 justify-center">
            <div className="flex gap-4">
              <a className="hover:animate-bounce cursor-pointer">
                <IconBrandInstagram color="white" size={40} />
              </a>
              <a className="hover:animate-bounce cursor-pointer">
                <IconBrandFacebook color="white" size={40} />
              </a>
              <a className="hover:animate-bounce cursor-pointer">
                <IconBrandYoutube color="white" size={40} />
              </a>
            </div>
          </div>
          <div className="flex flex-start gap-6 justify-center">
            <div>
              <img src={Logo} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </footer>
    <small className="text-white px-2">Desenvolvido por <a className="text-blue-500" href="https://www.webworks.digital/?utm_source=ciafit">WebWorks</a></small>
    </div>
  );
}
