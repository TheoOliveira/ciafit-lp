import GymImage from "../../assets/images/krakenimages-4l8UH4G2_Dg-unsplash.jpg";
export default function About() {
  return (
    <section className="bg-white py-12">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mt-8 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 justify-center  gap-12 align-middle">
          <div className="flex flex-start gap-6">
            <div>
              <div className="py-12 px-8 text-night text-center tracking-wider">
                <h2 className="font-black text-6xl text-black pb-12">
                  Nossa História
                </h2>
                <p className="text-2xl text-night p-8 text-justify">
                  Há mais de 30 anos,{" "}
                  <span className="text-off-red">começamos a sonhar</span> com
                  um espaço completo de saúde para toda a família. Hoje,
                  colecionamos muitas histórias e grandes amizades{" "}
                  <span className="text-off-red">
                    em um lugar que se tornou a casa da nossa família
                  </span>
                  . Somos uma academia que é referência no estado, conhecida
                  pelo acolhimento, carinho, dedicação e excelência.
                </p>
                <p className="text-2xl text-night text-justify p-8">
                  Durante nossa jornada, esbarramos com várias histórias que
                  moldaram e ressignificaram os laços entre nossos profissionais
                  e alunos. O que, realmente, faz a diferença no alcance dos
                  objetivos é na{" "}
                  <span className="text-off-red">
                    constância de te desafiar a ir mais além
                  </span>
                  . Percebemos que apesar do nosso atendimento tradicional ser
                  referência, para você,{" "}
                  <span className="text-off-red">
                    isso ainda não é o suficiente
                  </span>
                  .
                </p>
                <p className="text-2xl text-night text-justify p-8">
                  Por isso, criamos uma metodologia de atendimento exclusivo,
                  pensada essencialmente para você:
                </p>
                <p className="text-2xl text-night text-justify p-8">
                  O Ciafit Premium
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-start gap-6 text-night">
            <div>
              <img src={GymImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
