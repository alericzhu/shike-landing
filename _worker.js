// _worker.js — Single Cloudflare Worker for all shike.app Pages routes

const VPS_ORIGIN = 'http://static.226.174.105.178.clients.your-server.de';

const PROXY_PREFIXES = [
  '/survey/',
  '/api/',
  '/designer',
  '/admin',
  '/platform-admin',
  '/manage/',
  '/c/',
  '/thank-you',
  '/survey-assets/',
  '/static/',
  '/light',
  '/full',
];

function matchPath(path) {
  for (const prefix of PROXY_PREFIXES) {
    if (path === prefix || path.startsWith(prefix)) return true;
  }
  return false;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (matchPath(url.pathname)) {
      const target = VPS_ORIGIN + url.pathname + url.search;
      const headers = {};
      for (const [k, v] of request.headers) headers[k] = v;
      headers.host = url.hostname;

      const resp = await fetch(target, {
        method: request.method,
        headers,
        body: ['GET', 'HEAD'].includes(request.method) ? null : request.body,
      });
      const rh = {};
      for (const [k, v] of resp.headers) rh[k] = v;
      return new Response(resp.body, { status: resp.status, headers: rh });
    }

    // Serve static assets from Pages
    try {
      return await env.ASSETS.fetch(request);
    } catch (e) {
      try {
        return await env.ASSETS.fetch(new Request(new URL('/index.html', request.url)));
      } catch (e2) {
        return new Response('Not Found', { status: 404 });
      }
    }
  },
};
