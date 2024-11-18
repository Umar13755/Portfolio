import Hero from "../components/Hero";
import Expertise from "@/components/Expertise";

export default function Home() {
  return (
    // <div className="lg:mx-20 mx-4 ">
    //   <Hero />
    // </div>
    <div className="lg:mx-20 mx-4 justify-center items-center min-h-screen">
      <Hero />

      <Expertise />
    </div>
  );
}
