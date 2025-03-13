"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ProjectCard from "./ProjectCard";

import projects from "@/public/projects.json";

export default function Projects({ className }: { className?: string }) {
  return (
    <div className={`w-screen h-screen flex items-center ${className}`}>
      <div className="my-4 w-screen">
        <h1 className="w-screen text-center my-8 text-6xl font-extrabold leading-none tracking-tight bg-black text-gray-900  dark:text-white">
          Projects
        </h1>
        <div className="mt-4 mx-auto overflow-hidden max-[520px]:w-screen max-[1040px]:w-[520px] max-[1560px]:w-[1040px] max-[2080px]:w-[1560px] w-[2080px]">
          <Swiper
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={10}
            breakpointsBase="window"
            breakpoints={{
              520: {
                slidesPerView: 1,
              },
              1040: {
                slidesPerView: 2,
              },
              1560: {
                slidesPerView: 3,
              },
              2080: {
                slidesPerView: 4,
              },
            }}
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i}>
                <ProjectCard project={project} className="mx-auto" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
