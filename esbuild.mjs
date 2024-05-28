import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['app.jsx'],
  bundle: true,
  minify: true,
  outfile: 'out.js',
  target: ['chrome58'],
});
