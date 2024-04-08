import Image from "next/image";

import Star from "@/assets/Star.svg";
import Blur from "@/assets/blur.png";

const Faucet = () => {
  return (
    <div className="relative mt-[66px] md:mt-[118px] pt-12">
      <Image
        src={Blur.src}
        width={Blur.width}
        height={Blur.height}
        alt="blur"
        className="absolute top-0 left-0 -z-[1]"
      />
      <div className="container flex flex-col items-center">
        <h1
          className="text-[26px] md:text-[60px] lg:text-[76px] leading-[101%] text-transparent bg-clip-text bg-[linear-gradient(91.05deg,#FFFFFF_32.17%,#FD9109_102.29%)]
"
        >
          $MAZZE Testnet Faucet
        </h1>
        <span className="text-xs md:text-2xl leading-[138%] mt-[22px]">
          Claim test $MAZZE tokens for use on our Mazze Testnet
        </span>
        <div className="relative flex flex-col items-center mt-9 md:mt-[50px] bg-dark-blue-200 border border-gray-750 rounded-[10px] pt-10 md:pt-12 pb-10 md:pb-[60px] px-5 md:px-[70px] bg-noise-bg bg-cover w-[calc(100%-20px)] md:w-[calc(100%-120px)] lg:w-[calc(100%-200px)]">
          <Image
            src={Star.src}
            width={Star.width}
            height={Star.height}
            alt="star"
            className="absolute -bottom-6 md:-bottom-9 left-4 md:-left-8 max-md:w-[55px] max-md:h-[50px]"
          />
          <h4 className="text-sm md:text-[26px] leading-[138%]">
            Enter Wallet Address
          </h4>
          <input
            placeholder="Your Mazze address"
            className="w-full border border-orange rounded-full bg-dark-blue-100 text-sm md:text-lg placeholder:text-gray-600 text-center py-6 md:py-5 mt-[22px] outline-none focus-within:border-gray-300 transition-all"
          />
          <button className="bg-orange rounded-full text-sm md:text-xl py-[26px] md:py-6 text-dark-blue-100 mt-[22px] outline-none w-full font-bold leading-[107%] hover:bg-gray-300 transition-all">
            Send 1000 $Mazze
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faucet;
