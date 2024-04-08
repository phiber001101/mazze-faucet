import Link from "next/link";
import { Red_Hat_Display } from "next/font/google";
import Logo from "../svgs/Logo";

const RedHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["600"],
});

const Header = () => {
  return (
    <header className="bg-noise bg-cover border-b border-gray-800 max-sm:px-[30px]">
      <div className="container flex justify-between py-5 md:py-8">
        <div className="flex items-center">
          <Logo className="w-[36px] md:w-[52px] h-[28px] md:h-[42px]" />
          <div className="h-full border-r border-orange ml-5 md:ml-7 mr-3 md:mr-5" />
          <span
            className="text-lg md:text-[26px] font-light leading-[101%] bg-[linear-gradient(91.05deg,#FFFFFF_32.17%,#FD9109_102.29%)] bg-clip-text text-transparent
"
          >
            FAUCET
          </span>
        </div>
        <Link
          href={"/"}
          target="_blank"
          rel="noreferrer"
          className={`text-orange border border-orange text-xs md:text-lg leading-[107%] py-3.5 md:py-3 px-5 rounded-full font-semibold hover:border-gray-300 transition-all ${RedHatDisplay.className}`}
        >
          Explore Mazze
        </Link>
      </div>
    </header>
  );
};

export default Header;
