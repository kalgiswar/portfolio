import Header from "@/components/header";
import Home from "@/components/Home";
import Switch from "@/components/Switch";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Project from "@/components/Project";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="bg-black text-white">
        
        <Home/>
        <About/>
        <Experience/>
        <Project/>
        <Contact/>
        <Footer/>

      </main>
    </>
  );
}
