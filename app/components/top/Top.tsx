import Image from "next/image";
import nextConfig from "@/next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export default function Profile({ className }: { className?: string }) {
  return (
    <div className={`w-screen h-screen flex items-center ${className}`}>
      <div className="flex flex-col items-center mx-auto">
        <div className="relative w-64 h-64">
          <Image
            src={`${BASE_PATH}/myicon.png`}
            alt="My Icon"
            fill={true}
            objectFit="contain"
            className="rounded-full border-gray-300 border-solid border"
          />
        </div>
        <p className="w-fit mt-4 text-4xl text-center font-normal text-gray-500 lg:text-4xl dark:text-gray-400">
          Kenshin Nakao
        </p>
      </div>
    </div>
  );
}
