import Logo from "../../assets/images/Logo-ciafit-branco.png";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
export default function Header() {
  return (
    <header className="bg-off-red mx-auto p-2 ">
      <div className="container mx-auto max-w-screen-xl px-6">
        <div className="flex justify-between items-center py-4">
          <div className="align-self-start">
            <img src={Logo} alt="Logo" width="200" />
          </div>
          <div className="align-self-end flex content-between gap-4">
            <div>
              <a className="hover:animate-bounce hover:delay-700 cursor-pointer bg-taupe-gray text-white px-4 py-2 rounded-md text-3xl uppercase flex">
                <span>
                  <IconBrandWhatsapp stroke={1} size={40} color="white" />
                </span>
                <span> Fale Conosco</span>
              </a>
            </div>
            <div className="flex items-center">
              <a className="hover:animate-bounce">
                <IconBrandInstagram
                  className="cursor-pointer"
                  stroke={1}
                  size={40}
                  color="white"
                />
              </a>
              <a className="hover:animate-bounce">
                <IconBrandFacebook
                  className="cursor-pointer"
                  stroke={1}
                  size={40}
                  color="white"
                />
              </a>
              <a className="hover:animate-bounce">
                <IconBrandYoutube
                  className="cursor-pointer"
                  stroke={1}
                  size={40}
                  color="white"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
