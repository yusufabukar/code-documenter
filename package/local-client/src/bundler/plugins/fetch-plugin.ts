import * as esbuild from 'esbuild-wasm';
import axios from 'axios';
import localForage from 'localforage';

const fileCache = localForage.createInstance({
	name: 'fileCache'
});

const fetchPlugin = (inputCode: string) => {
	return {
		name: 'fetch-plugin',
		setup(build: esbuild.PluginBuild) {
			build.onLoad({filter: /(^index\.js$)/}, () => {
				return {
					loader: 'jsx',
					contents: inputCode
				};
			});

			build.onLoad({filter: /.*/}, async (args: any) => {
				const cachedResult = await fileCache.getItem<esbuild.OnLoadResult>(args.path);

				if (cachedResult) {
					return cachedResult;
				};
			});

			build.onLoad({filter: /.css$/}, async (args: any) => {
				const { data, request }: { data: any, request: any } = await axios.get(args.path);
				const escapedData = data
					.replace(/\n/g, '')
					.replace(/'/g, "\\'")
					.replace(/"/g, '\\"');
				const contents = `
					const style = document.createElement('style');
					style.innerText = '${escapedData}';
					document.head.appendChild(style);
				`;

				const result: esbuild.OnLoadResult = {
					loader: 'jsx',
					contents,
					resolveDir: new URL('./', request.responseURL).pathname
				};
				await fileCache.setItem(args.path, result);

				return result;
			});

			build.onLoad({filter: /.*/}, async (args: any) => {
				const { data, request } = await axios.get(args.path);

				const result: esbuild.OnLoadResult = {
					loader: 'jsx',
					contents: data,
					resolveDir: new URL('./', request.responseURL).pathname
				};
				await fileCache.setItem(args.path, result);

				return result;
			});
		}
	};
};

export default fetchPlugin;