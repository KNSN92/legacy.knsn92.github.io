import Image from "next/image";
import nextConfig from "@/next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export default function Profile({ className }: { className?: string }) {
  return (
    <div className={`w-screen h-screen flex items-center ${className}`}>
      <div className="flex flex-col items-center mx-auto">
        <h1 className="mx-auto w-fit text-4xl font-bold">about</h1>
        <div className="my-6 text-center flex flex-col items-center justify-center gap-2">
          <p>プログラミングは趣味としてやっています。</p>
          <p>
            最初はjavaから始まり、今ではpythonやtypescriptなどでweb開発なども行っています。
            <br />
            今後はrustやUnityなども学んでみたいです。
          </p>
        </div>
        <a href="https://github.com/KNSN92">
          <Image
            src={`${BASE_PATH}/github.svg`}
            alt="github"
            width={36}
            height={36}
          />
        </a>
      </div>
    </div>
  );
}
