export async function onRequest(context) {
  const { request, env, ctx } = context;
  const url = new URL(request.url);
  
  // Helper to proxy a path to the VPS backend
  function proxyToVPS(pathname, search) {
    const target = 'http://static.226.174.105.178.clients.your-server.de' + pathname + search;
    const headers = {};
    for (const [k, v] of request.headers) headers[k] = v;
    headers.host = url.hostname;
    const resp = await fetch(target, { method: request.method, headers, body: ['GET','HEAD'].includes(request.method) ? null : request.body });
    const rh = {};
    for (const [k, v] of resp.headers) rh[k] = v;
    return new Response(resp.body, { status: resp.status, headers: rh });
  }

  // Proxy survey-assets (new style images + mood images) to VPS
  if (url.pathname.startsWith('/survey-assets/')) {
    return proxyToVPS(url.pathname, url.search);
  }

  // Proxy platform-admin to VPS (with or without trailing slash)
  if (url.pathname === '/platform-admin' || url.pathname.startsWith('/platform-admin/')) {
    return proxyToVPS(url.pathname, url.search);
  }

  // Proxy short-link paths to VPS
  if (url.pathname === '/light' || url.pathname === '/full') {
    return proxyToVPS(url.pathname, url.search);
  }

  // Only handle paths NOT already handled by other functions
  const handled = ['/survey/', '/api/', '/designer', '/admin', '/manage/', '/c/', '/thank-you', '/static/', '/survey-assets/'];
  if (!handled.some(p => url.pathname === p || url.pathname.startsWith(p))) {
    // For things that are not survey-related, redirect to the homepage
    return new Response(null, { status: 302, headers: { 'Location': '/' } });
  }
  return undefined;
}