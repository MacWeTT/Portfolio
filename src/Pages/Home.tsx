//Components
import Hero from "../Components/Home/Hero";
import About from "../Components/Home/About";
import Skills from "../Components/Home/Skills";
import Projects from "../Components/Home/Projects";
import Contact from "../Components/Home/Contact";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box minHeight={"100vh"}>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Box>
  );
}
