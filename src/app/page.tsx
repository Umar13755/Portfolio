import Hero from "../components/Hero";
import Expertise from "@/components/Expertise";

export default function Home() {
  return (
    <div className="lg:mx-auto mx-4 justify-center items-center flex flex-col max-w-5xl">
      <Hero />
      <Expertise />
    </div>
  );
}
