export async function onRequest(context) {
  const { request, env, ctx } = context;
  const url = new URL(request.url);
  
  // Handle survey-assets by proxying to the VPS
  if (url.pathname.startsWith('/survey-assets/')) {
    const target = 'http://static.226.174.105.178.clients.your-server.de' + url.pathname + url.search;
    const headers = {};
    for (const [k, v] of request.headers) headers[k] = v;
    headers.host = 'yili.shike.app';
    const resp = await fetch(target, { method: request.method, headers, body: ['GET','HEAD'].includes(request.method) ? null : request.body });
    const rh = {};
    for (const [k, v] of resp.headers) rh[k] = v;
    return new Response(resp.body, { status: resp.status, headers: rh });
  }
  
  // Only handle paths NOT already handled by other functions
  const handled = ['/survey/', '/api/', '/designer', '/admin', '/manage/', '/c/', '/thank-you', '/static/'];
  if (!handled.some(p => url.pathname === p || url.pathname.startsWith(p))) {
    // For everything else, try to get the static index.html from Pages
    return new Response(null, { status: 302, headers: { 'Location': '/' } });
  }
  return undefined;
}