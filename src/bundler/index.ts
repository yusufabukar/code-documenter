import * as esbuild from 'esbuild-wasm';
import unpkgPathPlugin from './plugins/unpkg-path-plugin';
import fetchPlugin from './plugins/fetch-plugin';

let service: esbuild.Service;

export default async function bundler(input: string) {
	if (!service) {
		service = await esbuild.startService({
			worker: true,
			wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm'
		});
	};

	const bundle = await service.build({
		entryPoints: ['index.js'],
		bundle: true,
		write: false,
		plugins: [unpkgPathPlugin(), fetchPlugin(input)],
		define: {
			global: 'window',
			'process.env.NODE_ENV': '"production"'
		}
	});

	return bundle.outputFiles[0].text;
};