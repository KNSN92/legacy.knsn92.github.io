/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "https://knsn92.github.io/knsn92.github.io/",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "skillicons.dev",
                port: "",
            }
        ],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;
