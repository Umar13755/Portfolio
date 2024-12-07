import WorkCard from "@/components/WorkCard";
import Hero from "../components/Hero";
import Expertise from "@/components/Expertise";

export default function Home() {
  return (
    <div className="lg:mx-auto mx-4 justify-center items-center flex flex-col max-w-5xl">
     
      <Hero />
      <Expertise />
      <WorkCard/>
    </div>
  );
}
{/* <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */}
