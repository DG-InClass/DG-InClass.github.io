// Plain terminal output, not Vite configuration source code.
export default {
  name: 'vite',
  scopeName: 'source.vite',
  patterns: [
    {
      match: '^(\\s*)(VITE\\s+v\\S+)(\\s+ready in\\s+)([\\d.]+)( ms)',
      captures: {
        2: { name: 'vite.banner' },
        3: { name: 'vite.muted' },
        4: { name: 'vite.bold' },
      },
    },
    {
      begin: '^\\s*(➜)(\\s+)',
      beginCaptures: { 1: { name: 'vite.green' } },
      end: '$',
      contentName: 'vite.muted',
      patterns: [
        { match: 'Local:', name: 'vite.bold' },
        { include: '#url' },
        { match: '--host|h \\+ enter', name: 'vite.bold' },
      ],
    },
    {
      begin: '^(\\s*\\d{1,2}:\\d{2}:\\d{2}(?:\\s*[aApP]\\.?[mM]\\.?)?\\s+)(\\[vite\\])',
      beginCaptures: {
        1: { name: 'vite.muted' },
        2: { name: 'vite.tag' },
      },
      end: '$',
      patterns: [
        { match: '\\((?:client|server)\\)', name: 'vite.muted' },
        { match: '\\(x\\d+\\)', name: 'vite.number' },
        { match: '\\b(?:page reload|hmr update)\\b', name: 'vite.green' },
        { match: '\\S+ changed, restarting server\\.{3}', name: 'vite.green' },
        { match: 'server restarted\\.', name: 'vite.normal' },
        { include: '#url' },
      ],
    },
    {
      begin: '^\\s*(?=\\[)',
      end: '$',
      patterns: [{ match: "'[^'\\\\]*(?:\\\\.[^'\\\\]*)*'|\"[^\"\\\\]*(?:\\\\.[^\"\\\\]*)*\"", name: 'vite.green' }],
    },
    { match: '^\\s*[+-]?(?:\\d+(?:\\.\\d+)?|\\.\\d+)(?:[eE][+-]?\\d+)?\\s*$', name: 'vite.number' },
  ],
  repository: {
    url: { match: 'https?://[^\\s]+', name: 'vite.url' },
  },
};
