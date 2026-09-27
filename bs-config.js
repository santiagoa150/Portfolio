// browser-sync config for `yarn dev:i18n` (local i18n preview only — the
// production SSR server already negotiates the locale itself via
// Accept-Language; see server.ts). The static prerendered output has no
// index.html at the root, so bare "/" needs an explicit default here.
module.exports = {
  server: 'dist/Angular-Frontend-Template/browser',
  files: 'dist/Angular-Frontend-Template/browser',
  port: 4300,
  open: false,
  startPath: '/es/',
  middleware: [
    (req, res, next) => {
      if (req.url === '/') {
        res.writeHead(302, { Location: '/es/' });
        res.end();
        return;
      }
      next();
    },
  ],
};
