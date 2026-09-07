import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/landing-page-vs-site-multi-pagina",
        destination: "/blog/landing-page-ou-site-multi-pagina",
        permanent: true,
      },
      {
        source: "/blog/site-com-agendamento-e-marcacoes",
        destination: "/blog/site-com-formulario-e-marcacoes",
        permanent: true,
      },
      {
        source: "/blog/rgpd-e-formularios-de-contacto",
        destination: "/blog/site-com-formulario-e-marcacoes",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
