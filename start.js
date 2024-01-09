// Este arquivo de configuração serve para trocar o ip de um host dinâmico de forma automática e expôr em LAN.
// Para desabilitar, vá no package.json e altere o script:

// "scripts": {
//     "dev": "vite"
//     ...

import { networkInterfaces } from "os";
import * as vite from "vite";

// Encontra o endereço IPv4
const findIPv4 = () => {
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
  return "localhost"; // Caso não encontre, use localhost
};

// Inicia o servidor Vite com o endereço IP encontrado
const startServer = async () => {
  const ip = findIPv4();
  const server = await vite.createServer({
    server: { host: ip === "localhost" ? true : ip },
  });

  await server.listen(); // Inicia o servidor
  console.log(`Server running at http://${ip}:5173`);
};

startServer();
