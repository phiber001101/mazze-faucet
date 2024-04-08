import FAQ from "@/components/FAQ";
import Faucet from "@/components/Faucet";
import Learn from "@/components/Learn";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Faucet />
      <Learn />
      <FAQ />
    </main>
  );
}
