export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const target = 'http://static.226.174.105.178.clients.your-server.de' + url.pathname + url.search;
  const headers = {};
  for (const [k, v] of request.headers) headers[k] = v;
  headers.host = 'yili.shike.app';
  const resp = await fetch(target, { method: request.method, headers, body: ['GET','HEAD'].includes(request.method) ? null : request.body });
  const rh = {};
  for (const [k, v] of resp.headers) rh[k] = v;
  return new Response(resp.body, { status: resp.status, headers: rh });
}