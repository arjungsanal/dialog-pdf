/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                // https://i.imgur.com/VciRSTI.jpeg
                protocol : "https",
                hostname: "i.imgur.com",

            }
        ]
    }
};

export default nextConfig;
