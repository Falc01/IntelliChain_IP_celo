/** @type {import('next').NextConfig} */
const nextConfig = {
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
  // Desativa o erro do Turbopack no Next 16
  turbopack: {},
  // PROXY MAGICO DO VERCEL
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.VPS_API_URL || 'http://localhost:8000'}/:path*` // Roteia tudo que for /api para a VPS
      }
    ];
  }
};

export default nextConfig;
