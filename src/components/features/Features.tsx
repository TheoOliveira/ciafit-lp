import {
  IconFriends,
  IconBarbell,
  IconCalendar,
  IconClock,
  IconStar,
} from "@tabler/icons-react";
export default function Features() {
  return (
    <section className="bg-night py-12" id="features">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 uppercase font-black text-4xl tracking-tight font-extrabold text-gray-300 dark:text-white">
            Desenvolvido para você ir além
          </h2>
          <p className="text-white sm:text-xl">
            Pensado para você ser exclusivo e entender como você poder chegar
            mais alto com benefícios extras de uma academia comum.{" "}
            <a className="underline cursor-pointer" href="#works">
              Quer saber como funciona?
            </a>
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <IconFriends color="red" size={30} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-platinum">
              Atendimento exclusivo até duas pessoas
            </h3>
            <p className="text-white pb-6">
              O Ciafit Premium é uma modalidade de atendimento exclusivo para
              até duas pessoas por vez, em que o aluno tem a atenção total do
              professor durante seus treinos.
            </p>
            <p className="text-off-red">
              Além do apoio emocional, vai ter sempre alguém ali puxando sua
              orelha para te levar à excelência.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <IconBarbell color="red" size={30} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-platinum">
              Acesso Total a todas as modalidades da academia
            </h3>
            <p className="text-white">
              Protect your organization, devices and stay compliant with our
              structured workflows and custom permissions made for you.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <IconStar color="red" size={30} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-platinum">
              Atenção total do professor
            </h3>
            <p className="text-white ">
              Auto-assign tasks, send Slack messages, and much more. Now power
              up with hundreds of new templates to help you get started.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <IconClock color="red" size={30} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-platinum">
              Flexibilidade de horários (15 opções)
            </h3>
            <p className="text-white pb-4">
              No Ciafit Premium, das 6h às 21h, o aluno tem mais de 15 opções de
              horários para treinar durante o dia.
            </p>
            <p className="text-off-red">
              Não tem mais desculpas para faltar os treinos.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <IconCalendar color="red" size={30} />
            </div>
            <h3 className="mb-2 text-xl font-bold text-platinum">
              365 dias por ano
            </h3>
            <p className="text-white">
              Além de acesso a mais de 25 modalidades como: Musculação,
              Hidroginástica, Pilates Solo, Bike Indoor, Grupo de Corrida, Muay
              Thai, Fit Dance e mais de 20 outras aulas,{" "}
              <span className="text-off-red">
                o aluno Ciafit Premium tem acesso à toda rede Ciafit Family
                Club, durante 365 dias por ano.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
