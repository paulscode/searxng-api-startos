# Welcome to SearXNG API!

## Overview

SearXNG API is a fork of SearXNG with JSON output format explicitly enabled, designed for use with API bridges like the Serper-compatible bridge. This package can run alongside the standard SearXNG package.

SearXNG is an Internet metasearch engine which aggregates results from more than 70 search services that also helps protect your privacy.

## API Usage (Serper Bridge)

This instance has JSON format enabled for programmatic access. To use with the [SearXNG-Serper Bridge](https://github.com/your-repo/searxng-serper-bridge):

1. Set `SEARXNG_BASE_URL` in your bridge config to this instance's URL
2. The bridge will translate Serper API calls to SearXNG queries

### Enabled Shopping Engines

This instance has shopping engines enabled for the `/shopping` endpoint:
- **eBay** (US, DE, UK) - General marketplace products
- **Geizhals** - German/EU price comparison

### Example API Request

```bash
# Direct SearXNG JSON API
curl "https://YOUR_SEARXNG_URL/search?q=test&format=json"

# Through Serper Bridge (when configured)
curl -X POST http://BRIDGE_URL:3000/search \
  -H "Content-Type: application/json" \
  -d '{"q": "test query"}'
```

## Browser Usage

Simply click `LAUNCH UI` and start searching!

You can customize your SearXNG instance by visiting the `Preferences` button in the top right corner of your SearXNG homepage.

For more information on SearXNG and advanced usage instructions, check out the [official documentation](https://docs.searxng.org).

## Viewing Stats

If you have enabled stats in config, you can visit your SearXNG URL followed by `/stats` and `/stats/errors` to view usage information about your SearXNG instance.