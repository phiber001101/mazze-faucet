"use client";

import Image from "next/image";

import Net from "@/assets/net.png";
import FAQItem from "./FAQItem";
import { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(-1);

  return (
    <div className="relative mt-14 md:mt-[106px] pt-4 md:pt-[52px] pb-[130px] overflow-hidden">
      <Image
        src={Net.src}
        width={Net.width}
        height={Net.height}
        alt="net"
        className="absolute top-8 md:top-0 left-0 object-cover w-full h-[580px] md:h-[940px] lg:h-[880px] bottom-0 right-0 -z-[1] opacity-[0.16] object-top"
      />
      <div className="container flex flex-col items-center">
        <h2 className="text-[26px] md:text-4xl leading-[101%] text-transparent bg-clip-text bg-[linear-gradient(91.05deg,#FFFFFF_32.17%,#FD9109_102.29%)]">
          FAQ
        </h2>
        <div className="flex flex-col space-y-2 md:space-y-4 w-full mt-10 md:mt-[50px] max-sm:px-[30px]">
          <FAQItem
            title="What is Mazze?"
            content="Mazze blockchain is engineered for exceptional performance, boasting a groundbreaking transaction processing speed of 40,000 transactions per second (TPS). This high throughput is achieved through the innovative use of Directed Acyclic Graph (DAG) technology, which allows for parallel processing of transactions, significantly reducing the confirmation time. This technology not only ensures rapid transactions but also minimizes latency, achieving a remarkable 1-second finality. The architecture is designed to accommodate high-volume use cases such as micropayments, decentralized finance (DeFi), and enterprise solutions, ensuring that the Mazze blockchain remains efficient and scalable as the network grows."
            open={open === 0}
            onClick={() => setOpen(0)}
          />
          <FAQItem
            title="What is the purpose and vision of Mazze?"
            content="Mazze blockchain is engineered for exceptional performance, boasting a groundbreaking transaction processing speed of 40,000 transactions per second (TPS). This high throughput is achieved through the innovative use of Directed Acyclic Graph (DAG) technology, which allows for parallel processing of transactions, significantly reducing the confirmation time. This technology not only ensures rapid transactions but also minimizes latency, achieving a remarkable 1-second finality. The architecture is designed to accommodate high-volume use cases such as micropayments, decentralized finance (DeFi), and enterprise solutions, ensuring that the Mazze blockchain remains efficient and scalable as the network grows."
            open={open === 1}
            onClick={() => setOpen(1)}
          />
          <FAQItem
            title="What characterizes the Mazze public blockchain network?"
            content="Mazze blockchain is engineered for exceptional performance, boasting a groundbreaking transaction processing speed of 40,000 transactions per second (TPS). This high throughput is achieved through the innovative use of Directed Acyclic Graph (DAG) technology, which allows for parallel processing of transactions, significantly reducing the confirmation time. This technology not only ensures rapid transactions but also minimizes latency, achieving a remarkable 1-second finality. The architecture is designed to accommodate high-volume use cases such as micropayments, decentralized finance (DeFi), and enterprise solutions, ensuring that the Mazze blockchain remains efficient and scalable as the network grows."
            open={open === 2}
            onClick={() => setOpen(2)}
          />
          <FAQItem
            title="What are the benefits of Mazze's blockchain technology?"
            content="Mazze blockchain is engineered for exceptional performance, boasting a groundbreaking transaction processing speed of 40,000 transactions per second (TPS). This high throughput is achieved through the innovative use of Directed Acyclic Graph (DAG) technology, which allows for parallel processing of transactions, significantly reducing the confirmation time. This technology not only ensures rapid transactions but also minimizes latency, achieving a remarkable 1-second finality. The architecture is designed to accommodate high-volume use cases such as micropayments, decentralized finance (DeFi), and enterprise solutions, ensuring that the Mazze blockchain remains efficient and scalable as the network grows."
            open={open === 3}
            onClick={() => setOpen(3)}
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
