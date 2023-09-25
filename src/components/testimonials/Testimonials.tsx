import Bruna from '../../assets/images/depoimentos/Bruna Mendonca.jpeg'
import Leonardo from '../../assets/images/depoimentos/Leonardo Mendoncca.jpg'


export default function Testimonials() {
    return (
        <section className="bg-jet py-12">
            <div className="max-w-screen-xl grid md:grid-cols-2 gap-8 md:gap-4 px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <div>
                    <figure className="max-w-screen-md mx-auto">
                        <svg
                            className="h-12 mx-auto mb-3 text-platinum"
                            viewBox="0 0 24 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                fill="currentColor"
                            />
                        </svg>
                        <blockquote>
                            <p className="text-xl font-medium text-platinum ">
                                "Me matriculei no premium faz quase 2 meses e estou gostando bastante da academia como o todo tanto a parte estrutural, os equipamentos, quanto os horários, os professores que são muito atenciosos e eu que nunca tinha feito academia antes, já estou tendo uma ótima experiência, que é incrível e estou gostando bastante. A Ciafit está superando as minhas expectativas, em especial ao atendimento de Clara minha instrutora e dou prioridade para agendar com ela, todos são atenciosos. 
"
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img
                                className="w-16 h-16 rounded-full"
                                src={Leonardo}
                                alt="profile picture"
                            />
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-platinum ">
                                    Leonardo Mendonça
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
                <div>
                    <figure className="max-w-screen-md mx-auto">
                        <svg
                            className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                            viewBox="0 0 24 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                fill="currentColor"
                            />
                        </svg>
                        <blockquote>
                            <p className="text-xl font-medium text-platinum ">
                                "Faz 1 mês que me tornei aluna do plano premium e estou gostando muito. Tenho 33 anos e nunca tinha pisado numa academia e agora resolvi cuidar da saúde. E escolhi o plano premium por conta da assistência, do apoio de um profissional junto, para me orientar nas atividades. Acho que isso ajuda a motivar, o agendamento do horário torna a questão do compromisso de vim naquele dia e naquela hora, foi um excelente escolha e estou adorando.
"
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img
                                className="w-16 h-16 rounded-full"
                                src={Bruna}
                                alt="profile picture"
                            />
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-platinum ">
                                Bruna Mendonça
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
                
            </div>
        </section>
    );
}
