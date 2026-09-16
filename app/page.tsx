import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Cursor } from "@/components/Cursor";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Playground } from "@/components/Playground";
import { Preloader } from "@/components/Preloader";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#projects">Skip to projects</a>
      <Preloader />
      <Cursor />
      <Header />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Playground />
      <Contact />
    </main>
  );
}
