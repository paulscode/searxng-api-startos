// To utilize the default config system built, this file is required. It defines the *structure* of the configuration file. These structured options display as changeable UI elements within the "Config" section of the service details page in the StartOS UI.

import { compat, types as T } from "../deps.ts";

// Generate a random API key (32 characters, alphanumeric)
function generateApiKey(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 32; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export const getConfig: T.ExpectedExports.getConfig = compat.getConfig({
  "tor-address": {
    name: "Tor Address",
    description: "The Tor address of the network interface",
    type: "pointer",
    subtype: "package",
    "package-id": "searxng-api",
    target: "tor-address",
    interface: "main",
  },
  "lan-address": {
    name: "LAN Address",
    description: "The LAN address of the network interface",
    type: "pointer",
    subtype: "package",
    "package-id": "searxng-api",
    target: "lan-address",
    interface: "main",
  },
  "api-key": {
    type: "string",
    name: "API Key",
    description:
      "A randomly generated API key for use with the Serper bridge. Copy this value to your bridge's BRIDGE_API_KEY environment variable. You can change this to any value you prefer.",
    nullable: false,
    default: {
      charset: "a-z,A-Z,0-9",
      len: 32,
    },
    pattern: "^[a-zA-Z0-9]{16,64}$",
    "pattern-description": "Must be 16-64 alphanumeric characters",
    masked: true,
    copyable: true,
  },
  "instance-name": {
    type: "string",
    name: "SearXNG Instance Name",
    description:
      "Enter a name for your SearXNG instance. This is the name that will be listed if you want to share your SearXNG engine publicly.",
    nullable: false,
    default: "SearXNG API",
    placeholder: "My SearXNG API",
  },
  "tor-url": {
    "name": "Enable Tor address as the base URL",
    "description": "Activates the utilization of a .onion address as the primary URL, particularly beneficial for publicly hosted instances over the Tor network.",
    "type": "boolean",
    "default": false,
  },
  "enable-metrics": {
    name: "Enable Stats",
    description:
      "Your SearXNG instance will collect anonymous stats about its own usage and performance. You can view these metrics by appending `/stats` or `/stats/errors` to your SearXNG URL.",
    type: "boolean",
    default: true,
  },
});
