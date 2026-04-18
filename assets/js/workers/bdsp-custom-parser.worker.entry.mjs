import { parseBdspCustomBuffers } from '../parsers/bdsp-custom-parser-core.mjs';

self.addEventListener('error', event => {
  self.postMessage({
    type: 'parse-bdsp-custom-result',
    ok: false,
    error: [
      event?.message || 'Worker error',
      event?.filename ? `@ ${event.filename}` : '',
      Number.isFinite(event?.lineno) ? `line ${event.lineno}` : '',
      Number.isFinite(event?.colno) ? `col ${event.colno}` : '',
    ].filter(Boolean).join(' '),
  });
});

self.addEventListener('unhandledrejection', event => {
  const reason = event?.reason;
  self.postMessage({
    type: 'parse-bdsp-custom-result',
    ok: false,
    error: String(reason?.stack || reason?.message || reason || 'Unhandled worker rejection'),
  });
});

self.addEventListener('message', async event => {
  const payload = event?.data || {};
  if (payload?.type !== 'parse-bdsp-custom') return;

  try {
    const dataset = await parseBdspCustomBuffers(payload.files || [], {
      ...(payload.options || {}),
      reportProgress(progress) {
        self.postMessage({
          type: 'parse-bdsp-custom-progress',
          progress,
        });
      },
    });
    self.postMessage({
      type: 'parse-bdsp-custom-result',
      ok: true,
      dataset,
    });
  } catch (error) {
    self.postMessage({
      type: 'parse-bdsp-custom-result',
      ok: false,
      error: String(error?.stack || error?.message || error || 'BDSP custom parser error'),
    });
  }
});
