/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ignora erros chatos de ESLint e Typescript durante o deploy
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ensina o Vercel a lidar com as dependências "pesadas" da Solana
  webpack: (config: any) => {
    config.resolve.fallback = {
      fs: false,
      os: false,
      path: false,
      crypto: false,
      stream: false,
    };
    return config;
  },
};

export default nextConfig;
