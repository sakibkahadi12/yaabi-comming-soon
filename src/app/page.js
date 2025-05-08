import Image from "next/image";
import logo from '../../public/logo/logo.png'
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { hanken, mulish } from "./layout";
import { Hanken_Grotesk } from "next/font/google";
export default function Home() {
  return (
    <main
      className={`container mx-auto bg-[url('/logo/bg.jpg')]  min-h-screen bg-cover bg-center flex flex-col  items-center w-full ${mulish.className}`}
    >
      <Image
        src={logo}
        alt="logo"
        height={1000}
        width={1000}
        className=" w-[240px] h-[100px]  lg:w-[332px] mt-5 lg:h-[143px]"
      />
      <div className=" lg:w-[50%] text-center mx-auto mt-10 lg:mt-2 resize-margin">
        <h1 className="text-5xl lg:text-[60px] p-[10px] font-[700] text-[#000000] leading-[48px] lg:leading-[70px]">
          Ny nettside lanseres snart
          <span className="inline-flex mt-2 px-2 items-center rounded-full size-[40px] bg-[#154D7E]  ml-3">
            <FaArrowRight
              size={15}
              color="#D8E6F3"
              className="w-full -rotate-45 h-full  flex items-center justify-center"
            />
          </span>
        </h1>
        <p className=" text-[15px] lg:text-[20px] px-4 mt-6 text-[#000000] font-[400] ">
          Én plattform. Uendelige muligheter. <br /> Bygg sterke kundeforhold
          med målrettede nyhetsbrev, personlige <br /> SMS-er og effektive
          digitale kuponger.
        </p>
      </div>
      <div>
        <Link href={"https://yaabi.io/login"}>
          <button
            className={`${hanken.className} w-[188px] h-[50px] rounded-[5px] bg-[#154D7E] text-[#ffffff] text-[15px] font-[500] mb-2 lg:mb-7`}
          >
            Login
          </button>{" "}
        </Link>

        <div className="text-[#000000] text-center font-[400] flex flex-col text-[20px]">
          <p>Want to reach out?</p>
          <p className="font-[700] ">
            <a
              href="mailto:post@yaabi.no"
              className="text-[#000000] no-underline"
            >
              post@yaabi.no
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
