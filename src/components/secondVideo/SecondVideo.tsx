import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "./SecondVideo.module.css";
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
    <section className={`${styles.background} bg-white py-12`} id="secondVideo">
        <div className="mt-12 text-center mx-auto">
      <h2 className="mb-12 uppercase text-4xl tracking-tight font-black text-black">
            Conheça o nossa metodologia de treino individualizado
            </h2>
            </div>  
      <div className={`gap-8 items-center py-8 px-4 mx-auto flex items-center flex-col max-w-screen-xl sm:py-16 lg:px-6`}>
      <iframe width={"700"} height={"590"} 
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/iKxYF69ie1s?autoplay=1&controls=0`}>
</iframe>
          <small>Um lugar feito para compartilhar e crescer juntos</small>
          <ul className="px-8 mt-5 list-disc">
            <li className="mb-2 font-medium text-2xl text-off-red">
              {" "}
              <span className="text-gray-500">
                É para quem procura atendimento exclusivo.
              </span>
            </li>
            <li className="mb-2 font-medium text-2xl text-off-red">
              {" "}
              <span className="text-gray-500">
                É para quem já treina e precisa dar um passo a mais na evolução.
              </span>
            </li>
            <li className="mb-2 font-medium text-2xl text-off-red">
              <span className="text-gray-500">
                É para quem tem dificuldade de seguir uma rotina de treinos.
              </span>
            </li>
            <li className="mb-6 font-medium text-2xl text-off-red">
              <span className="text-gray-500">É para toda a família.</span>
            </li>

            <a
              href="#features"
              className="place-self-center cursor-pointer inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
            >
              Quero saber mais
            </a>
          </ul>
        
        <motion.div
          initial={{ x: 1500 }}
          animate={controls}
          transition={{ duration: 1.2, delay: 0.1 }}
        >
          <div className="mt-4 md:mt-0">
            
           
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
