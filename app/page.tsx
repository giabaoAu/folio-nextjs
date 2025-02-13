import Hero from "@/components/Hero";
import { RiHome7Line } from "react-icons/ri";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
          navItems={[
            {name: 'Home', link: '#home', icon: <RiHome7Line />},
          ]}
        />
        <Hero />
      </div>
    </main> 
  );
}
