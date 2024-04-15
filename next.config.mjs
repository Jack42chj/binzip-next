/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "npfoxgwgicnunivoroyz.supabase.co",
                port: "",
                pathname: "/storage/v1/object/public/**",
            },
            {
                protocol: "https",
                hostname: "*.googleusercontent.com",
                port: "",
                pathname: "**",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/main",
                permanent: true,
            },
        ];
    },
    reactStrictMode: false,
};

export default nextConfig;
