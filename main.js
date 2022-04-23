import publicIp from "public-ip";
import * as local from "./src/utils/local-data.js";
import * as ipService from "./src/services/ip.service.js";
import dotenv from "dotenv";
dotenv.config();

async function getIp() {
  const currentIp = await publicIp.v4();

  if (!currentIp) return;

  const payload = {
    ip_publica: currentIp,
    ip_privada: "0.0.0.0",
    id_cliente: "1",
    key: process.env.key,
  };

  await ipService.sendIP(payload);
}

getIp();
