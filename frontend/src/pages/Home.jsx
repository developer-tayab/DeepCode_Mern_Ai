import React from "react";
import mainImage from "../assets/mainImage.png";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className=" bg-[#000] relative text-white overflow-auto w-full h-[94vh]">
      <div className="container ">
        {/* heading and tagline text  */}
        <div className="flex  flex-col gap-2 justify-center items-center h-full mt-[5%]">
          <h1 className="font-raleway tracking-tighter	 text-[3rem] bg-gradient-to-r from-[#FF3BFF] via-[#ECBFBF]    to-[#5C24FF] bg-clip-text text-transparent  font-bold">
            Write Better. Debug Faster. Learn Smarter
          </h1>
          <h2 className="font-raleway text-[40px] transition-all 2s ease-linear cursor-text hover:bg-gradient-to-r hover:from-[#5C24FF]  hover:via-[#ECBFBF] hover:to-[#FF3BFF] hover:bg-clip-text hover:text-transparent ">
            DeepCode Revolution
          </h2>
          <p className="max-w-[50%] text-center font-thin text-[14px] font-mono ">
            <Typewriter
              words={[
                " Our AI-powered engine analyzes code instantly.It ensures intelligent debugging and real-time fixes.",
                "With deep learning, it enhances accuracy and efficiency.",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80} // Normal typing speed
              deleteSpeed={30} // Fast delete speed
              delaySpeed={1200} // Slight delay for readability
            />
          </p>

          {/* buttons login and  Explore the website  */}
          <div className="flex justify-center items-center gap-5 mt-5">
            <button className="font-mono z-50  hover:bg-gradient-to-r hover:scale-110 hover:from-[#FF3BFF] border-[2px] border-white shadow-sm transition-all 2s ease-linear  hover:to-[#5C24FF] text-white  py-2 px-4 rounded-full">
              {" "}
              Get Started
            </button>
            <button className="font-mono z-50 bg-gradient-to-r hover:scale-110 from-[#FF3BFF]  border-[0.6px] border-none hover:shadow-[0_0_10px_white]  shadow-sm transition-all 2s ease-linear  to-[#5C24FF] text-white  py-2 px-4 rounded-full">
              {" "}
              Explore Tools
            </button>
          </div>
        </div>

        {/* imageAi Home   */}
      </div>
      <div className="absolute bottom-0 ">
        <img src={mainImage} alt="Ai image logo" />
      </div>
    </div>
  );
}
