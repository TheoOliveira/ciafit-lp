import React from "react";

export default function HowItWorks() {
  return (
    <section className="bg-platinum py-12">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div>
          <h2 className="font-bold text-3xl text-gray-900 uppercase">Como funciona o ciafit premium?</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-start gap-6">
            <div className="text-2xl font-bold uppercase text-off-red">1.</div>
            <div>
              Agende a sua primeira aula. O professor irá fazer uma avaliação
              física diagnóstica para direcionar os treinos.
            </div>
          </div>
          <div className="flex flex-start gap-6">
            <div className="text-2xl font-bold uppercase text-off-red">2.</div>
            <div>
              Agende a sua Avaliação M.E.T Premium (Medidas para Evolução do
              Treinamento).
            </div>
          </div>
          <div className="flex flex-start gap-6">
            <div className="text-2xl font-bold uppercase text-off-red">3.</div>
            <div>
              Comece seus treinos com o acompanhamento exclusivo do Ciafit
              Premium, a partir de duas vezes por semana. A partir do segundo
              mês, você verá os melhroes resultados no seu corpo e na sua vida.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
