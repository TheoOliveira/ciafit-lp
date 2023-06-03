import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube, IconMapPin } from "@tabler/icons-react";
import Logo from '../../assets/image.svg';

export default function Footer() {
  return (
    <footer className="bg-jet mx-auto py-12">
      <div className="container mx-auto max-w-screen-xl px-6">
        <div className="mt-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 content-center justify-center">
          <div className="flex flex-start gap-6">
            <div>
              <div className="flex gap-2 pb-6">
                <IconMapPin color="red" size={40} />
                <div className="text-white"><h3>Espinheiro</h3>
                <p>Rua Santos Elias, 67, Espinheiro</p></div>
              </div>
              <div className="flex gap-2">
                <IconMapPin color="red" size={40} />
                <div className="text-white"><h3>Caxangá</h3>
                <p>Av. do Forte, 477, Cordeiro</p></div>
              </div>
            </div>
          </div>
          <div className="flex flex-start gap-6 justify-center">
            <div className="flex gap-4">
             <IconBrandInstagram color="white" size={40} />
             <IconBrandFacebook color="white" size={40} />
             <IconBrandYoutube color="white" size={40} />
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
  );
}
