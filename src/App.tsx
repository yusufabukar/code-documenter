import { useState, useEffect, useRef } from 'react';
import * as esbuild from 'esbuild-wasm';
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';

function App() {
	const ref = useRef<any>();

	const [ input, setInput ] = useState('');
	const [ code, setCode ] = useState('');

	const startService = async () => {
		ref.current = await esbuild.startService({
			worker: true,
			wasmURL: '/esbuild.wasm'
		});
	};
	
	useEffect(() => {
		startService();
	}, []);

	const onClick = async () => {
		if (!ref.current) {
			return;
		};

		const bundle = await ref.current.build({
			entryPoints: ['index.js'],
			bundle: true,
			write: false,
			plugins: [unpkgPathPlugin()],
			define: {
				global: 'window',
				'process.env.NODE_ENV': '"production"'
			}
		});

		setCode(bundle.outputFiles[0].text);
	};

	return (
		<>
			<textarea onChange={e => setInput(e.target.value)}></textarea>
			<div>
				<button onClick={onClick}>Submit</button>
			</div>
			<pre>{code}</pre>
		</>
	);
};

export default App;