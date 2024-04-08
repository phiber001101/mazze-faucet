import { useState } from "react";
import ArrowDown from "./svgs/ArrowDown";

interface FAQItemProps {
  title: string;
  content: string;
  open: boolean;
  onClick: any;
  className?: string;
}

const FAQItem: React.FC<FAQItemProps> = ({
  title,
  content,
  open,
  onClick,
  className,
}) => {
  return (
    <div
      className={`bg-dark-blue border border-gray-750 rounded-[20px] py-3 md:py-9 px-4 md:px-[45px] cursor-pointer ${
        className ?? ""
      }`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <span className="text-sm md:text-xl font-bold leading-[107%]">
          {title}
        </span>
        <ArrowDown />
      </div>
      <div
        data-open={open}
        className="overflow-hidden max-h-[400px] data-[open=false]:max-h-0 transition-all data-[open=true]:duration-500"
      >
        <div className="pt-3 md:pt-6 max-md:text-xs">{content}</div>
      </div>
    </div>
  );
};

export default FAQItem;
