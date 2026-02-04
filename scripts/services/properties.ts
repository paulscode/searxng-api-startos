import { compat, types as T } from "../deps.ts";

export const properties: T.ExpectedExports.properties = async (effects) => {
  const config = await effects.readFile({
    volumeId: "main",
    path: "start9/config.yaml",
  }).then((x) => compat.YAML.parse(x) as {
    "lan-address": string;
    "tor-address": string;
    "api-key": string;
  });

  return {
    type: "object",
    value: {
      "LAN Address": {
        type: "string",
        value: `https://${config["lan-address"]}`,
        description: "The LAN address for the SearXNG API",
        copyable: true,
        qr: true,
        masked: false,
      },
      "Tor Address": {
        type: "string",
        value: `http://${config["tor-address"]}`,
        description: "The Tor (.onion) address for the SearXNG API",
        copyable: true,
        qr: true,
        masked: false,
      },
      "API Key": {
        type: "string",
        value: config["api-key"],
        description: "Use this API key in your Serper bridge configuration (BRIDGE_API_KEY)",
        copyable: true,
        qr: false,
        masked: true,
      },
      "Bridge Configuration": {
        type: "string",
        value: `SEARXNG_BASE_URL=https://${config["lan-address"]}\nBRIDGE_API_KEY=${config["api-key"]}\nVERIFY_SSL=false`,
        description: "Copy these values to your Serper bridge .env file",
        copyable: true,
        qr: false,
        masked: false,
      },
    },
  } as T.Properties;
};
