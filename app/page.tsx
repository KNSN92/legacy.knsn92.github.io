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
      <a
        href="https://knsn92.github.io/"
        className="fixed z-10 top-0 w-full p-2 bg-red-700 opacity-80 flex items-center gap-2 text-sm lg:text-2xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
        お知らせ : このポートフォリオはもう更新されません。
        新しいポートフォリオをご覧下さい。
      </a>
      <Top className="scrollSection" />
      <Profile className="scrollSection" />
      <Skills />
      <Projects className="scrollSection" />
      <Footer />
    </div>
  );
}
