/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack : (config) =>{
        config.resolve.alias.canvas =false;
        return config;
    },
    images: {
        remotePatterns:[
            {
                // https://i.imgur.com/VciRSTI.jpeg
                protocol : "https",
                hostname: "i.imgur.com",

            },
            {
                protocol : "https",
                hostname :"img.clerk.com",
            }
        ]
    }
};

export default nextConfig;
