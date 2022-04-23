import publicIp from "public-ip";
import * as local from "./src/utils/local-data.js";
import * as ipService from "./src/services/ip.service.js";
import dotenv from "dotenv";
dotenv.config();

async function getIp() {
  const currentIp = await publicIp.v4();

  if (!currentIp) throw Error("No current ip");

  const payload = {
    ip_publica: currentIp,
    ip_privada: "0.0.0.0",
    id_cliente: process.env.id_cliente,
    ok: process.env.key,
  };

  await ipService.sendIP(payload);
}

function verifyEnv() {
  try {
    const env = process.env;
    if (!env.baseUrl) throw Error("Define baseUrl in environment variables");
    if (!env.key) throw Error("Define key in environment variables");
    if (!env.id_cliente) throw Error("Define id_cliente in environment variables");
    
  } catch (error) {
    throw Error(error.message);
  }
}

verifyEnv();
getIp();
