import { useEffect, useState } from "react";
import { IconArrowUp } from "@tabler/icons-react";

const ScrollDownBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div>
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 p-3 bg-gray-800 text-white rounded-full shadow hover:animate-bounce ${isVisible ? "block" : "hidden"
            }`}
        >
          <IconArrowUp />
        </button>
      </div>
    </>
  );
};
export default ScrollDownBtn;
