import Logo from "../../assets/images/Logo-ciafit-cinza.png";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandYoutube,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export default function Header() {
  return (
    <header className="bg-jet mx-auto">
      <div className="container mx-auto max-w-screen-xl px-6 flex flex-col items-center justify-center sm:flex-row sm:justify-between sm:items-center">
        <div className="mb-4 sm:mb-0">
          {/* Centered Logo for mobile */}
          <img src={Logo} alt="Logo" width="190" />
        </div>
        <div className="hidden sm:block py-2">
              <a className="hover:animate-bounce hover:delay-700 cursor-pointer bg-eerie-black text-white px-4 py-2 rounded-md text-3xl uppercase flex">
                <span>
                  <IconBrandWhatsapp stroke={1} size={40} color="white" />
                </span>
                <span className="sm:display sm:font-bold"> Fale Conosco</span>
              </a>
            </div>
        {/* Icons section */}
        <div className="flex items-center space-x-4">
          {/* Whatsapp icon for mobile */}
          <a className="sm:hidden hover:animate-bounce" href="https://wa.me/558132285011">
            <IconBrandWhatsapp
              className="cursor-pointer"
              stroke={1}
              size={40}
              color="white"
            />
          </a>
          {/* Social icons */}
          <a className="hover:animate-bounce" href="https://www.instagram.com/ciafitfamilyclub/">
            <IconBrandInstagram
              className="cursor-pointer"
              stroke={1}
              size={40}
              color="white"
            />
          </a>
          <a className="hover:animate-bounce" href="https://www.facebook.com/ciafitfamilyclub">
            <IconBrandFacebook
              className="cursor-pointer"
              stroke={1}
              size={40}
              color="white"
            />
          </a>
          <a className="hover:animate-bounce" href="https://www.youtube.com/@ciafitfamilyclub">
            <IconBrandYoutube
              className="cursor-pointer"
              stroke={1}
              size={40}
              color="white"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
