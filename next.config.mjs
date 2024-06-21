/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ipfs-gw.stargaze-apis.com',
          port: '',
          pathname: '/ipfs/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  