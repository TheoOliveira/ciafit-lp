
export default function Price() {
  return (
    <section className="bg-night py-12">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mt-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 justify-center  gap-12 align-middle">
          <div className="flex flex-start gap-6">
            <div>
            <div className="border-2 rounded-3xl border-gray-400 py-12 px-8 text-white text-center">
                <p className="text-6xl text-gray-400">De R$ 700</p>
                <p className="text-3xl text-gray-400">(valor mensal livre)</p>
            </div>
            <div className="border-2 rounded-3xl border-white py-12 px-8 text-white text-center tracking-widest">
                <p className="text-6xl font-bold">por R$ 499</p>
                <p className="text-2xl">por mês no plano anual</p>
                <p className="text-2xl font-bold">Plano até 3x na semana</p>
            </div>
            </div>
          </div>
          <div className="flex justify-center align-middle gap-6">
            <div className="text-white uppercase tracking-widest text-4xl flex align-middle justify-center">
             <p>Economize Mais de R$ 2.400,00 por Ano no <span className="underline">plano Anual</span></p>
            </div>
          </div>
          <div className="flex flex-start gap-6 text-white">
            <div>
              <p>Sem Taxa de adesão</p>
              <p>Sem taxa de cancelamento</p>
              <p>Apenas a taxa anual no valor de R$149,90 para a renoção da matrícula e liberação do aplicativo.</p>
              <p>(Pode ser dividida em até 3x)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
