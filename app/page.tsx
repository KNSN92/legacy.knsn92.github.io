"use client";

import Top from "./components/top/Top";
import Profile from "./components/profile/Profile";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "./components/footer/Footer";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  // useGSAP(() => {
  //   let panels: HTMLElement[] = [];
  //   document.querySelectorAll(`.scrollSection`).forEach((e) => {
  //     panels = [...panels, e as HTMLElement];
  //   });

  //   panels.forEach((panel) => {
  //     ScrollTrigger.create({
  //       trigger: panel,
  //       start: "top",
  //       end: "center",
  //       pin: true,
  //       markers: true,
  //     });
  //   });
  // });

  return (
    <div className="overflow-hidden bg-black">
      <Top className="scrollSection" />
      <Profile className="scrollSection" />
      <Skills />
      <Projects className="scrollSection" />
      <Footer />
    </div>
  );
}
