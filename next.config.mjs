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
};

export default nextConfig;
