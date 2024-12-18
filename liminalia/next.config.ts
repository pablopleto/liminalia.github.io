import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Configuración necesaria para exportar como sitio estático
  trailingSlash: true, // Agrega una barra diagonal al final de las URLs para exportaciones estáticas
};

export default nextConfig;