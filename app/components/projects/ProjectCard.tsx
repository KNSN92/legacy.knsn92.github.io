import { Project, TagIcon } from "@/app/types/Types";
import Image from "next/image";

import tag_icon from "@/public/tag_icon.json";
import clsx from "clsx";

import nextConfig from "@/next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export default function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div
      className={
        "overflow-scroll w-128 max-sm:w-full aspect-[4/5] flex flex-col justify-between rounded bg-slate-800 border border-gray-400 " +
        className
      }
    >
      <div>
        <div className="m-2 w-auto relative aspect-[4/3]">
          {project.image ? (
            <Image
              src={`${BASE_PATH}${project.image}`}
              alt="thumb"
              fill
              objectFit="contain"
              className="w-fit h-fit border-0 rounded"
            />
          ) : (
            <div className="size-full border-0 rounded text-slate-700 font-bold text-6xl flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-32"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                />
              </svg>
              <div>No Image</div>
            </div>
          )}
        </div>
        <div className="mx-4">
          <h1 className="mb-2 text-3xl font-bold">{project.title}</h1>
          <div className="mb-2">{project.description}</div>
        </div>
      </div>
      <div className="mx-4 mb-4 flex flex-col justify-between">
        {project.github ? (
          <div className="mb-4">
            <a href={project.github}>
              <Image
                src={`${BASE_PATH}/github.svg`}
                alt="github"
                width={32}
                height={32}
              />
            </a>
          </div>
        ) : null}
        <div className="flex">
          {project.tags.map((tag, i) => (
            <div
              className={clsx(
                "flex items-center m-1 w-fit h-10 px-2 py-0.5 text-lg gap-1 bg-slate-600 rounded-lg border border-gray-400"
              )}
              key={i}
            >
              {tag in tag_icon ? (
                <Image
                  key={i}
                  src={`${BASE_PATH}${(tag_icon as TagIcon)[tag]}`}
                  alt={"img of " + tag}
                  width={32}
                  height={32}
                  className="block mr-1"
                />
              ) : null}
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
