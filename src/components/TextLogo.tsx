import Link from "next/link";

interface TextLogoProps {
  className?: string;
}

const TextLogo: React.FC<TextLogoProps> = ({ className }) => {
  return (
    <Link
      href={"/"}
      className={`text-orange text-[28px] font-bold leading-[107%] ${
        className ?? ""
      }`}
    >
      Mazze
      <span className="text-gray-350">Scan</span>
    </Link>
  );
};

export default TextLogo;
