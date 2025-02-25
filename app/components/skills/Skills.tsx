"use client";

import Image from "next/image";
import skills from "@/public/skills.json";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function Skills({ className }: { className?: string }) {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: ".skills-panel",
      start: "top",
      end: () => `+=${skills.length * window.innerHeight * 0.75}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    });

    const skillsCategories = document.querySelectorAll(".skills-category");
    skillsCategories.forEach((skillsCategory, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillsCategory,
          start: () => {
            return (
              "+=" +
              (window.innerHeight * 0.75 * (i - 1) +
                (i === 0
                  ? window.innerHeight -
                    (window.innerHeight / 2 - skillsCategory.clientHeight)
                  : 0))
            );
          },
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          // markers: true,
        },
      });
      if (i === 0) {
        gsap.set(skillsCategory, {
          y: () => window.innerHeight / 2 - skillsCategory.clientHeight,
        });
      } else {
        gsap.set(skillsCategory, { y: window.innerHeight });
      }
      if (i !== 0) {
        tl.set(skillsCategory, {
          y: window.innerHeight,
        });
        tl.to(skillsCategory, {
          duration: 0.3,
          y: () => window.innerHeight / 2 - skillsCategory.clientHeight,
        });
      }
      if (i === skills.length - 1) {
        tl.to(
          skillsCategory,
          {
            duration: 0.3,
            y: () => window.innerHeight / 2 - skillsCategory.clientHeight,
          },
          0.6
        );
      } else {
        tl.to(
          skillsCategory,
          {
            duration: 0.3,
            y: -skillsCategory.clientHeight,
          },
          0.6
        );
      }
    });
  });
  return (
    <div
      className={`skills-panel w-screen h-auto flex items-center ${className}`}
    >
      <div className="flex flex-col items-center mx-auto">
        <h1 className="w-screen text-center my-8 text-6xl font-extrabold leading-none tracking-tight bg-black text-gray-900  dark:text-white">
          Skills
        </h1>
        <div className="skills-categories overflow-hidden h-screen w-screen relative">
          {skills.map((v, i) => (
            <div
              key={i}
              className="skills-category absolute w-fit h-fit mx-auto inset-0 z-[1]"
            >
              <h2 className="w-fit mx-auto text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                {v.category}
              </h2>
              <div
                className={`max-w-[544px] w-[80vw] mt-2 flex flex-row flex-wrap justify-center gap-4`}
              >
                {v.icons.map((icon, i) => (
                  <Image
                    src={`https://skillicons.dev/icons?i=${icon}`}
                    alt={`${icon} logo`}
                    width={96}
                    height={96}
                    key={i}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
