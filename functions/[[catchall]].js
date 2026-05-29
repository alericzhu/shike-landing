const PROXY_HOST = 'http://178.105.174.226';
const PROXY_PATHS = ['/survey/', '/api/', '/designer', '/admin', '/manage/', '/c/', '/thank-you'];

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  // Check if path needs proxying
  const shouldProxy = PROXY_PATHS.some(p =>
    url.pathname === p || url.pathname.startsWith(p)
  );
  if (!shouldProxy) return;

  const target = PROXY_HOST + url.pathname + url.search;
  const resp = await fetch(target, {
    method: request.method,
    headers: {
      ...Object.fromEntries(request.headers),
      'host': 'yili.shike.app',
    },
    body: ['GET','HEAD'].includes(request.method) ? null : request.body,
  });
  return new Response(resp.body, {
    status: resp.status,
    statusText: resp.statusText,
    headers: resp.headers,
  });
}
