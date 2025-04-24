
import { renderToReadableStream } from 'react-dom/server';
import isbot from 'isbot';
import { PassThrough } from 'stream';

export default {
  async fetch(request, env, context) {
    const isBot = isbot(request.headers.get('user-agent'));

    const { pathname } = new URL(request.url);
    if (pathname === '/') {
      const stream = await renderToReadableStream(<div>Hello from Hydrogen custom entry!</div>);
      return new Response(stream, {
        headers: { 'Content-Type': 'text/html' },
      });
    }

    return new Response('Not Found', { status: 404 });
  },
};
