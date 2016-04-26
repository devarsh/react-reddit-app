export const renderFullPage = (html, initialState) => 
{
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Isomorphic Reddit App</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}