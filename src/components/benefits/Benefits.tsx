import React from "react";
import {
  IconStar,
} from "@tabler/icons-react";
export default function Benefits() {
  return (
    <section className="bg-white py-12">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div>
          <h2 className="font-extrabold text-3xl text-gray-900 uppercase">Beneficios</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-start gap-6">
            <div><IconStar color="red"/></div>
            <div>
              Ao adquirir o MET Premium, você ganha mais 3 avaliações durante o periodo de um ano.
            </div>
          </div>
          <div className="flex flex-start gap-6">
            <div><IconStar color="red"/></div>
            <div>
             Sempre que treinar no Ciafit Premium, você ganha 3x mais pontos no Ciaclub (nosso programa de vantagens)
            </div>
          </div>
          <div className="flex flex-start gap-6">
            <div><IconStar color="red"/> </div>
            <div>
              Você ganha 50% de desconto na compra de produtos e eventos produzidos pela marca Ciafit. (Consulte o regulamento na recepção.)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
