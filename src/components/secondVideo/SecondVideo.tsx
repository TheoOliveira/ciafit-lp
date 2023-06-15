import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import FamilyGym from "../../assets/images/lj-lara-j0jeExniTXw-unsplash.jpg";

export default function SecondVideo() {
    const controls = useAnimation();

    const handleScroll = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const windowHeight =
            window.innerHeight || document.documentElement.clientHeight;

        // Calculate the scroll position when each column should start animating
        const column1Offset = windowHeight * 0.5;
        const column2Offset = windowHeight * 1.5;
        const column3Offset = windowHeight * 2.5;

        // Check if each column is in the viewport and trigger animations accordingly
        if (scrollTop > column1Offset && scrollTop < column1Offset + windowHeight) {
            controls.start({ x: 0 });
        }

        if (scrollTop > column2Offset && scrollTop < column2Offset + windowHeight) {
            controls.start({ x: 0 });
        }

        if (scrollTop > column3Offset && scrollTop < column3Offset + windowHeight) {
            controls.start({ x: 0 });
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="bg-white py-12" id="secondVideo">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <motion.div
                    className="place-self-start"
                    initial={{ x: -1500 }}
                    animate={controls}
                    transition={{ duration: 1.2, delay: 0.1 }}
                >
                    <img
                        className="w-full hidden dark:block"
                        src={FamilyGym}
                        alt="dashboard image"
                    />
                    <small>Um lugar feito para compartilhar e crescer juntos</small>
                    <div className="px-8 mt-5">
                        <p className="mb-2 font-medium text-xl text-gray-500">
                            {" "}
                            É para quem procura atendimento exclusivo.
                        </p>
                        <p className="mb-2 font-medium text-xl text-gray-500">
                            {" "}
                            É para quem já treina e precisa dar um passo a mais na evolução.
                        </p>
                        <p className="mb-2 font-medium text-xl text-gray-500">
                            É para quem tem dificuldade de seguir uma rotina de treinos.
                        </p>
                        <p className="mb-6 font-medium text-xl text-gray-500">
                            É para toda a família.
                        </p>

                        <a
                            href="#features"
                            className="place-self-center cursor-pointer inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                        >
                            Quero saber mais
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 1500 }}
                    animate={controls}
                    transition={{ duration: 1.2, delay: 0.1 }}
                >
                    <div className="mt-4 md:mt-0">
                        <h2 className="mb-12 uppercase text-4xl tracking-tight font-black text-black">
                            Compartilhe do Bem-estar em Família
                        </h2>
                        <p className="mb-8 font-light  text-xl text-gray-500 leading-loose">
                            Há mais de 30 anos, iniciamos o sonho de criar um espaço completo
                            de saúde para toda a família. Hoje, colecionamos muitas histórias.
                            Já somos uma academia que é referência no estado pelo acolhimento,
                            dedicação e excelência. Durante esse percurso, fizemos muitas
                            conexões e constatamos que os laços entre nossos profissionais e
                            alunos realmente fizeram a diferença no alcançe dos objetivo.
                            Dessa forma, para valorizar ainda mais o que oferecemos de melhor,
                            pensando nos resultados ainda mais efetivos para nossos alunos,
                            criamos uma metodologia de atendimento exclusivo. Conheça o Ciafit
                            Premium.{" "}
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
                        >
                            Get started
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
