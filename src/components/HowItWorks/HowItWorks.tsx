import {
  IconBarbell,
  IconCalendar,
  IconRulerMeasure,
} from "@tabler/icons-react";

export default function HowItWorks() {
  return (
    <section className="bg-platinum py-12" id="works">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div>
          <h2 className="font-black text-3xl text-gray-900 uppercase mb-6">
            Como funciona o ciafit premium?
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-start gap-6">
            <div className="text-2xl font-black uppercase text-off-red">1.</div>
            <div>
              <IconCalendar
                size={64}
                color={"red"}
                className="align-self-center mb-6"
              />
              <h2 className="font-black">Consulta Premium</h2>
              <p>
                Agende sua primeira Consulta Premium com o nosso avaliador para
                te ajudar a definir as primeiras metas{" "}
                <span className="text-off-red">
                  e trilhar o caminho dos treinos.
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-start gap-6">
            <div className="text-2xl font-black uppercase text-off-red">2.</div>
            <div>
              <IconRulerMeasure size={64} color={"red"} className="mb-6" />
              <h2 className="font-black">Início dos Treinos</h2>
              <p>
                Agende suas aulas pelo nosso aplicativo e treine com professores
                exclusivos totalmente conectados por meio de nossos Ipads.
                Treinamento).
              </p>
            </div>
          </div>
          <div className="flex flex-start gap-6">
            <div className="text-2xl font-black uppercase text-off-red">3.</div>
            <div>
              <IconBarbell size={64} color={"red"} className="mb-6" />
              <h2 className="font-black">Acompanhamento</h2>
              <p>
                {" "}
                Comece seus treinos com o acompanhamento exclusivo do Ciafit
                Premium, a partir de duas vezes por semana.{" "}
              </p>
              <p className="font-black">
                A partir do segundo mês, você verá os melhroes resultados no seu
                corpo e na sua vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
